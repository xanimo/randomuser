import React, { Component } from 'react';
import UserItem from '../UserItem/UserItem';
import { getRandomUsers } from '../../User';
import Filter from '../Filter/Filter';
import Gender from '../Gender/Gender';

export class UserList extends Component {

  constructor(props){
    super(props);
    this.state = {fetching: true};
  }


  componentWillMount() {
      //request random users
      //set state to fetching
    getRandomUsers(10, this.props.Gender, '10-10-2000')
      .then( data => {
        this.setState({
          users: data,
          fetching: false
        });
      });
  }


  renderUserItems() {
    const calcAge = birthday => {
      let birthdayDate = new Date(birthday.split(' ')[0].replace(/\-+/g, '/'));
      const ageDifMs = parseInt(Date.now() - birthdayDate.getTime());
      const ageDate = new Date(ageDifMs);
      
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    return this.state.users.map((user, index) => {
      const first = user.name.first;
      const last = user.name.last;
      const email = user.email;
      const dob = calcAge(user.dob);
      const phone = user.phone;
      const cell = user.cell;
      const nat = user.nat;
      return (
        <UserItem
          key={first+last+index}
          title={user.name.title}
          firstName={first}
          lastName={last}
          email={email}
          dob={dob}
          phone={phone}
          cell={cell}
          large={user.picture.large}
          nat={nat}/>
          
      );
    });
  }

  render () {
    if(this.state.fetching) {


      //show loader
      return (
        <div>
          <img src='../../../img/loading.gif'/>
        </div>
      );
    }

    return (
      <div className="header">
        <Filter />
        <h2>Users</h2>
        <ul>
          {this.renderUserItems()}
        </ul>
      </div>
    );
  }
}

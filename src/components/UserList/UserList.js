import React, { Component } from 'react';
import UserItem from '../UserItem/UserItem';
import { getRandomUsers } from '../../User';
// import Filter from '../Filter/Filter';

export class UserList extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: [],
      gender: '',
      minAge: 18,
      maxAge: 99
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const calcBirthYear = age => {
      let today = new Date();
      let years = today.getUTCFullYear();
      return Math.abs(years - age);
    }
    let minYear = new Date();
    minYear.setFullYear(calcBirthYear(this.state.minAge), 0, 1);
    let maxYear = new Date();
    maxYear.setFullYear(calcBirthYear(this.state.maxAge), 0, 1);
    console.log(minYear);
    console.log(maxYear);
    event.preventDefault();
      getRandomUsers(10, this.state.gender, minYear, maxYear)
      .then( data => {
        this.setState({
          users: data
        });
      });

  }

   handleChange(event) {
    switch (event.target.id) {
      case "minAge":
      this.setState({ minAge: event.target.value });
      break;
      case "maxAge":
      this.setState({ maxAge: event.target.value });
      break;
    }
    // filterResultsByAge(this.state.minAge, this.state.maxAge);
  }



  setGender(event) {
    this.setState({ gender: event.target.value })
  }

  componentWillMount() {
      //request random users
      //set state to fetching
    getRandomUsers(10, this.state.gender)
      .then( data => {
        this.setState({
          users: data
        }, console.log(data[0].dob));
      });
  }


  renderUserItems() {
    const calcAge = birthday => {
      let birthdayDate = new Date(birthday.split(' ')[0].replace(/\-+/g, '/'));
      const ageDifMs = parseInt(Date.now() - birthdayDate.getTime());
      // console.log(ageDifMs);
      const ageDate = new Date(ageDifMs);
      // console.log(ageDate);
      let age = Math.abs(ageDate.getUTCFullYear() - 1970);
      return age;
    };

    const ucFirst = string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return this.state.users.map((user, index) => {
      const title = ucFirst(user.name.title);
      const first = ucFirst(user.name.first);
      const last = ucFirst(user.name.last);
      const email = user.email;
      const age = calcAge(user.dob);
      const dob = user.dob;
      const phone = user.phone;
      const cell = user.cell;
      const nat = user.nat;
      return (
        <UserItem
          key={first+last+index}
          title={title}
          firstName={first}
          lastName={last}
          email={email}
          age={age}
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
          Loading...
        </div>
      );
    }

    return (
      <div className="header">
      <div className="user-item-container">
      <input id="minAge" type="number" value={this.state.value} onChange={this.handleChange} defaultValue="18"/>
      <input id="maxAge" type="number" value={this.state.value} onChange={this.handleChange} defaultValue="99"/>
      <div onClick={this.setGender.bind(this)} onChange={this.setGender.bind(this)}>
        <input type="radio" value="male" name="gender"/> Male
        <input type="radio" value="female" name="gender"/> Female
      </div>
        <input type="submit" value="Submit" onClick={this.calculateAge}/>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </div>
        <h2>Users</h2>
        <ul>
          {this.renderUserItems()}
        </ul>
      </div>
    );
  }
}

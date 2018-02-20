import React, { Component } from 'react';
import UserItem from '../UserItem/UserItem';
import { getRandomUsers } from '../../User';
// import Filter from '../Filter/Filter';

export class UserList extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: [],
      someArray: [],
      gender: '',
      minAge: 18,
      maxAge: 99,
      seed: '123'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    switch (e.target.id) {
      case "btnReset":
        window.location.reload()
      break;
      case "btnSubmit":
        this.setState({
            seed: ""
        });
      break;
    }
        // e.preventDefault();
        getRandomUsers(100, this.state.seed, this.state.gender)
        .then( data => {
          this.setState({
            users: data,
            seed: ""
          });
        });
  }

   handleChange(e) {
    switch (e.target.id) {
      case "minAge":
      this.setState({ 
        minAge: e.target.value,
        seed: ""
       });
      break;
      case "maxAge":
      this.setState({ 
        maxAge: e.target.value, 
        seed: ""
      });
      break;
    }
  }



  setGender(e) {
    // set gender to male or female pre submit
    this.setState({ gender: e.target.value })
  }

  reset() {
    // set seeed to "123" to fetch original users
            this.setState({
          seed: ""
        });
  }

  componentWillMount() {
      //request random users
      //set state to fetching
    getRandomUsers(100, this.state.seed, this.state.gender)
      .then( (data) => {
        this.setState({
          users: data
        });
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

    // capitalize first letter
    const ucFirst = string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // iterate results and push by filter preference
    let user = this.state.users;
    let userByAge = [];
    let minAge = this.state.minAge;
    let maxAge = this.state.maxAge;
    Object.keys(user).map(function(key, index) {
      let val = user[key];
      if (calcAge(val.dob) >= minAge && calcAge(val.dob) <= maxAge) {
      userByAge.push(val);
      }
    })
    console.log(userByAge);

  //   if (calcAge(this.state.users.dob) >= this.state.minAge && calcAge(this.state.users.dob) <= this.state.maxAge) {
    return userByAge.splice(0, 10).map((user, index) => {
      const title = ucFirst(user.name.title);
      const first = ucFirst(user.name.first);
      const last = ucFirst(user.name.last);
      const email = user.email;
      const age = calcAge(user.dob);
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
        <input id="btnReset" type="submit" value="Reset" onClick={this.handleSubmit}/>
        <input id="btnSubmit" type="submit" value="Submit" onClick={this.handleSubmit} />
      </div>
        <h2>Users</h2>
        <ul>
          {this.renderUserItems()}
        </ul>
      </div>
    );
  }
}

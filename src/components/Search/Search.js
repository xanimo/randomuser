import React, { Component } from 'react';

export default class Search extends Component {
    constructor() {
    super();
    this.state = {
      api: 'https://randomuser.me/api/?results=10',
      users: [],
      gender: '',
      minAge: 18,
      maxAge: 99
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ageRange(minAge, maxAge) {
    // minAge = {...this.state.minAge};
    // maxAge = {...this.state.maxAge};

  }

    getAge(date) {
    var now = new Date();
    var age = now.getFullYear() - date.getFullYear();
    return age;
  }

    handleChange(event) {
    // // iso date time
    // var dateOfBirth = new Date('1982-03-28 00:00:00');

    // // calculate age
    // var age = this.getAge(dateOfBirth);

    // // output
    // console.log(age);
    let minAge, maxAge = "";
    switch (event.target.id) {
      case "minAge":
      this.setState({ minAge: event.target.value });
      break;
      case "maxAge":
      this.setState({ maxAge: event.target.value });
      break;
    }
  }

  setGender(event) {
    this.setState({ gender: event.target.value })
  }

    setApi(event) {
    switch (event.target.value) {
      case "male":
      this.setState({ api: "https://randomuser.me/api/?results=10&gender=male" });
      break;
      case "female":
      this.setState({ api: "https://randomuser.me/api/?results=10&gender=female" });
      break;
    }
  }

    handleSubmit(event) {
    // event.preventDefault();

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="user-item-container">
      <input id="minAge" type="text" value={this.state.value} onChange={this.handleChange} defaultValue="18"/>
      <input id="maxAge" type="text" value={this.state.value} onChange={this.handleChange} defaultValue="99"/>
      <div onClick={this.setGender.bind(this)} onChange={this.setApi.bind(this)}>
        <input type="radio" value="male" name="gender"/> Male
        <input type="radio" value="female" name="gender"/> Female
      </div>
        <input type="submit" value="Submit" onClick={this.calculateAge}/>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </div>
      
    );
  }
}
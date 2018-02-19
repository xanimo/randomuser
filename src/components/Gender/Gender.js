import React from 'react';

class Gender extends React.Component {
	
  setGender(event) {
    console.log(event.target.value);
  }
  
  render() {
    return ( 
      <div onClick={this.setGender.bind(this)}>
        <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>
     )
  }
}

export default Gender;
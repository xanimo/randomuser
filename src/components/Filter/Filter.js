import React from 'react';
import Gender from '../Gender/Gender';
import { calculateAge } from '../../Helpers';

const Filter = (props) => {
	render() {
		
	}
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
		)
}

export default Filter;
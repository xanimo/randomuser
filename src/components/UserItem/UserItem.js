import React, { Component, PropTypes } from 'react';
import './UserItem.css';
import Modal from '../Modal/Modal';

export default class UserItem extends Component {
    constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    phone: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    largePicture: PropTypes.string,
    nat: PropTypes.string.isRequired
  };
  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const title = this.props.title;
    const email = this.props.email;
    const age = this.props.age;
    const phone = this.props.phone;
    const cell = this.props.cell;
    const largePicture = this.props.large;
    const nat = this.props.nat;
    return (
      <div className="user-item-container">
        <img className="photo" src={largePicture}/>
        <div className="name lead">Name: {title} {firstName} {lastName}</div>
        <div>Email: {email} </div>
        <div className="age lead">Age: {age} </div>
       
          <button onClick={this.toggleModal}>
          Contact
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
           <div>Phone: {phone} </div>
        <div>Cell: {cell} </div>
        <div>Nationality: {nat} </div>
        </Modal>
      </div>
      
    );
  }
}

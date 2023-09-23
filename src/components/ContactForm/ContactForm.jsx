import PropTypes from 'prop-types'
import React, { Component } from "react";
import './ContactForm.css'

export class ContactForm extends Component {
  state = {
    number: '',
    name: ''
  }

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    });
  };

  handleInputSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and number.');
      return;
    }

    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`'${name}' is already in contacts`)
      return;
    }

    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' })

  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleInputSubmit}  className='Container__form'>
          <label className='text'>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label  className='text'>
            Number
            <input
              type="tel"
              value={number}
              onChange={this.handleInputChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" className='Add__contact'>Add contact</button>
        </form>
      </div>
    )
  }

};

ContactForm.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
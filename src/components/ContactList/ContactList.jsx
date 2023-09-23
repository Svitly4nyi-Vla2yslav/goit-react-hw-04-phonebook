import React from 'react'
import PropTypes from 'prop-types'
import './ContactList.css'
export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map((contact, id) => (
                <li className='Contact__item' key={contact.id}>{contact.name} : <span className='Number'>{contact.number}</span>
                    <button className='Delete' onClick={() => onDeleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}
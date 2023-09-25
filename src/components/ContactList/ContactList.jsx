import React from 'react'
import PropTypes from 'prop-types'
import './ContactList.css'
export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({name, number, id}) => (
                <li className='Contact__item' key={id}>{name} : <span className='Number'>{number}</span>
                    <button className='Delete' onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}
import React from 'react'
import './Filter.css'
import PropTypes from 'prop-types'
export const Filter = ({ value, onChange }) => {

    return (
        <div>
            <label className='Filter_text'>
                Find contacts by Name
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
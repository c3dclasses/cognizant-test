import React from 'react'
import PropTypes from 'prop-types';

export default function Todo({onClick, onChange, completed, checked, text}) {
    return (
        <li 
            onClick={onClick} 
            style={{textDecoration: completed ? "line-through" : "none"}}
        >
            <input onChange={onChange} checked={checked} type="checkbox" />
            {text}
        </li>
    )
}

Todo.protoTypes = {
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
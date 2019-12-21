import React from 'react';
import './Quote.css';
const Quote = props => {
    return (
        <div className='Quote'>
            <div className='TextPart'>
                <p>{props.text}</p>
                <p> - {props.author}</p>
            </div>
            <div>
                <button type='button' onClick={props.onEdit}>Edit</button>
                <button type='button' onClick={props.onRemove}>X</button>
            </div>
        </div>
    );
};

export default Quote;
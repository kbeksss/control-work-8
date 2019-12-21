import React from 'react';
import './Form.css';
import {CATEGORIES} from "../../constants";
const Form = (props) => {
    return (
        <div className='Form'>
            <form action="#" onSubmit={props.formSubmit}>
                <div className='Variants'>
                    {CATEGORIES.map(type => {
                        return (
                            <label key={type.label} htmlFor={type.value}>
                                {type.label}
                                <input type="radio" id={type.value} name='category' onChange={props.valChange} value={type.value} required/>
                            </label>
                        )
                    })}
                </div>
                <div className="Inputs">
                    <div>
                        <label htmlFor="author">Author</label>
                        <input
                            onChange={props.valChange}
                            name='author'
                            type="text" id='author'
                            className='Author' placeholder='Someone'
                            value={props.author}
                        />
                        <button className='btn'>Save</button>
                    </div>
                    <div>
                        <label htmlFor="text">Quote text</label>
                        <textarea
                            onChange={props.valChange}
                            name="text" id="text"
                            cols="30" rows="10" placeholder='Something is something'
                            value={props.text}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
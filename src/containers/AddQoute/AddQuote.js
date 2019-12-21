import React, {Component} from 'react';
import './AddQuote.css';
import Form from "../../components/Form/Form";
import {CATEGORIES} from "../../constants";
import axiosQuote from "../../axios-quote";

class AddQuote extends Component {
    state = {
        author: '',
        text: '',
        category: CATEGORIES[CATEGORIES.length - 1].value,
    };
    changeValue = event => this.setState({[event.target.name]: event.target.value});
    submitForm = async event => {
        event.preventDefault();
        const quote = {
            author: this.state.author,
            text: this.state.text,
            category: this.state.category,
        };
        const postQ = await axiosQuote.post('quote.json', quote);
        if(postQ.statusText === 'OK'){
            this.props.history.replace('/');
        } else{
            alert('Your message hasn\'t been sent');
        }
    };
    render() {
        return (
            <div className='AddQuote'>
                <h3>Add a new Quote</h3>
                <Form
                    valChange={this.changeValue}
                    author={this.state.author}
                    text={this.state.text}
                    formSubmit={(event) => this.submitForm(event)}
                />
            </div>
        );
    }
}

export default AddQuote;
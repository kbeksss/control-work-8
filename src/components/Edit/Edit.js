import React, {Component} from 'react';
import './Edit.css';
import Form from "../Form/Form";
import axiosQuote from "../../axios-quote";

class Edit extends Component {
    state = {
        author: '',
        text: '',
        category: '',
    };
    async componentDidMount() {
        console.log(this.props.match.params.id);
        const response = await axiosQuote.get('/quote/' + this.props.match.params.id + '.json');
        if(response.data){
            this.setState({author: response.data.author, text: response.data.text, category: response.data.category});
        }
    }
    changeValue = event => this.setState({[event.target.name]: event.target.value});
    submitEditedForm = async e => {
        e.preventDefault();
        const quote = {
            author: this.state.author,
            text: this.state.text,
            category: this.state.category,
        };
        const postQ = await axiosQuote.put('quote/' + this.props.match.params.id + '.json', quote);
        if(postQ.statusText === 'OK'){
            this.props.history.replace('/');
        } else{
            alert('Your message hasn\'t been sent');
        }
        console.log(quote);
    };
    render() {
        return (
            <div className='Edit'>
                <h3>Edit a Quote</h3>
                <Form
                    author={this.state.author}
                    text={this.state.text}
                    valChange={this.changeValue}
                    formSubmit={(e) => this.submitEditedForm (e)}
                />
            </div>
        );
    }
}

export default Edit;
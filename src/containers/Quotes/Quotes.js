import React, {Component} from 'react';
import './Quotes.css';
import {CATEGORIES} from "../../constants";
import axiosQuote from "../../axios-quote";
import {NavLink} from "react-router-dom";

class Quotes extends Component {
    state = {
        quotes: {},
    };
    requestQuotes = async () => {
        let url = 'quote.json';
        if(this.props.match.params.category){
            url += '?orderBy="category"&equalTo="'+ this.props.match.params.category +'"';
        }
        const quotes = await axiosQuote.get(url);
        if(quotes.data){
            this.setState({quotes: quotes.data});
        }
    };
    componentDidMount() {
        return this.requestQuotes();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.category !== this.props.match.params.category){
            return this.requestQuotes();
        }
    }
    goToEdit = id => {
        this.props.history.push('/quotes/' + id + '/edit');
    };
    deleteQuote = async id => {
        const deleted = await axiosQuote.delete('quote/' + id + '.json');
        if(deleted.statusText === 'OK'){
            return this.requestQuotes();
        }

    };
    render() {
        return (
            <div className='Quotes'>
                <div className="QCategories">
                    <ul>
                        <li><NavLink to='/'>All</NavLink></li>
                        {CATEGORIES.map(cat => {
                            return (
                                <li key={cat.value}>
                                    <NavLink to={'/quotes/' + cat.value}>{cat.label}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="ReceivedQuotes">
                    {Object.keys(this.state.quotes).map(key => (
                        <div className='EQuote' key={key}>
                            <div className='ETextPart'>
                                <p>{this.state.quotes[key].text}</p>
                                <p> - {this.state.quotes[key].author}</p>
                            </div>
                            <div>
                                <button type='button' onClick={() => this.goToEdit(key)}>Edit</button>
                                <button type='button' onClick={() => this.deleteQuote(key)}>X</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Quotes;
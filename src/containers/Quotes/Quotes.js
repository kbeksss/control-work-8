import React, {Component} from 'react';
import './Quotes.css';
import {CATEGORIES} from "../../constants";
import axiosQuote from "../../axios-quote";
import {NavLink} from "react-router-dom";
import Quote from "../../components/Quote/Quote";

class Quotes extends Component {
    state = {
        quotes: {},
    };
    requestQuotes = async () => {
        let url = 'quote.json';
        if(this.props.match.params.category) {
            console.log(this.props.match.params.category);
            url += '?orderBy="category"&equalTo="'+ this.props.match.params.category +'"'
        }
        const quotes = await axiosQuote.get(url);
        if(quotes.data){
            this.setState({quotes: quotes.data});
        } else {
            console.error('Data hasn\'t been received');
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
                        <li><NavLink to='/' exact>All</NavLink></li>
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
                        <Quote
                            key={key}
                            author={this.state.quotes[key].author}
                            text={this.state.quotes[key].text}
                            onEdit={() => this.goToEdit(key)}
                            onRemove={() => this.deleteQuote(key)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Quotes;
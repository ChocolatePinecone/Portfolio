import React from 'react';
import Quote from '../components/Quote';

const quoteText1 = 'An API that isn\'t comprehensible, isn\'t usable.';
const quoteAuthor = 'James Gosling - Creator of Java';

const Java = () => {
    return (
        <div id='java'>
            <h1>Java</h1>
            <Quote text={quoteText1} author={quoteAuthor} />
        </div>
    );
};

export default Java;

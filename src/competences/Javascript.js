import React from 'react';
import Quote from '../components/Quote';

const quoteText = 'Javascript will either die quickly or it will be around for twenty years or longer.';
const quoteAuthor = 'Brendan Eich - Creator of Javascript';

const Javascript = () => {
    return (
        <div id='javascript'>
            <h1>Javascript</h1>
            <Quote text={quoteText} author={quoteAuthor} />
        </div>
    );
};

export default Javascript;

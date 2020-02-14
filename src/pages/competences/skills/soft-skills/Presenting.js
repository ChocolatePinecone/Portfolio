import React from 'react';
import Quote from '../../../../components/Quote';

const quoteText = 'Broadly speaking, short words are best, and the old words, when short, are best of all.';
const quoteAuthor = 'Sir Winston Churchill - Speech on receiving the London Times Literary Award November 2, 1949';

const Presenting = () => {
    return (
        <div id='presenting'>
            <h1>Presenting</h1>
            <Quote text={quoteText} author={quoteAuthor} />
        </div>
    );
};

export default Presenting;

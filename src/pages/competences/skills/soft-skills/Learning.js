import React from 'react';
import Quote from '../../../../components/Quote';

const quoteText = 'The beautiful thing about learning is nobody can take it away from you.';
const quoteAuthor = 'B.B. King - In The Charlotte Observer (5 October 1997)';

const Learning = () => {
    return (
        <div id='learning'>
            <h1>Learning</h1>
            <Quote text={quoteText} author={quoteAuthor} />
        </div>
    );
};

export default Learning;

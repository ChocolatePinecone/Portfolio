import React from 'react';
import Quote from '../components/Quote';

const quoteText = 'C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off.';
const quoteAuthor = 'Bjarne Stroustrup - Creator of C++';

const Cplusplus = () => {
    return (
        <div id='C++'>
            <h1>C++</h1>
            <Quote text={quoteText} author={quoteAuthor} />
        </div>
    );
};

export default Cplusplus;

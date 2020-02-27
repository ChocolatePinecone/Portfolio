import React from 'react';
import './Quote.css';

const Quote = (props) => (
    <div className='quote'>
        <p className='quote-text'>
            {`"${props.text}"`}
        </p>
        <div className='quote-author'>
            {props.author}
        </div>
    </div>
);

export default Quote;

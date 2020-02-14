import React from 'react';
import Quote from '../../../../components/Quote';

const quoteText = 'Software is a great combination between artistry and engineering.';
const quoteAuthor = 'Bill Gates';

const SpringBoot = () => {
    return (
        <div id='springboot'>
            <h1>Spring Boot</h1>
            <Quote text={quoteText} author={quoteAuthor} />
            <p>
                I'm currently starting a small demo project to learn more about Spring Boot. My goal is to show the result on this page.
            </p>
        </div>
    );
};

export default SpringBoot;

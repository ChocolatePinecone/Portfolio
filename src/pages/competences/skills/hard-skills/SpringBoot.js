import React from 'react';
import Quote from '../../../../components/Quote';

const quoteText = 'There\'s only one trick in software, and that is using a piece of software that\'s already been written.';
const quoteAuthor = 'Bill Gates - Interview with Electronics magazine (1989)';

const SpringBoot = () => (
    <div id='springboot'>
        <h1>Spring Boot</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            I&apos;m currently starting a small demo project to learn more about Spring Boot. My goal is to show the result on this page.
        </p>
    </div>
);

export default SpringBoot;

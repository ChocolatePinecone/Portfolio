import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';

const quoteText = 'One difference between a smart programmer and a professional programmer is that the professional understands that clarity is king. '
    + 'Professionals use their powers for good and write code that others can understand.';
const quoteAuthor = 'Robert C. Martin - "Clean Code: A Handbook of Agile Software Craftsmanship"';

const ESLint = () => (
    <div id='eslint'>
        <h1>ESLint</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            Linting is not only important for preventing programmatic errors, it also makes sure all code is written in the same style.
        </p>
        <p>
            To be honest the linting in my previous projects has not been that extensive.
            Most differences in styles were still allowed which is pretty fast when programming stuff, but might result in some extra effort when deciphering other peoples code.
            <br />
            I&apos;ve experimented with some more thorough linting, and I have to say I really like it.
            <br />
            <ContentLink href='/experience/projects/this-website'>This website</ContentLink>
            is set up with pretty thorough linting, which makes for a lot of clean, readable code.
        </p>
        <p>
            The nice thing about ESLint is the fact that so many frameworks or dependencies have plugins for it.
            Take REACT for example. The JSX in REACT can be written in many different ways.
            <br />
            THe REACT plugin for ESLint allows you to pick the exact styling you want to have JSX written in down till the last missing space.
        </p>
        <p>
            In short, I&apos;m a fan of linting and will definitely keep applying it in the future.
        </p>
    </div>
);

export default ESLint;

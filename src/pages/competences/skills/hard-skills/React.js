import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';

const quoteText = 'I learned that the style of programming that I gravitated towards was neither weird, nor new and '
    + 'actually closer to some of the oldest philosophies of programming languages. '
    + 'I continued to explore framework-izing these ideas, and I had implemented several iterations of what eventually became React.';
const quoteAuthor = 'Jordan Walke, Creator of React - Transcript from Thursday January 26th, 2017 on reactiflux.com';

const REACT = () => (
    <div id='react'>
        <h1>React</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            React is a very popular library/framework at the moment.
            According to <a target='_blank' rel='noopener noreferrer' href='https://hotframeworks.com/'>https://hotframeworks.com/</a>
            it scores the highest on Github and Stack Overflow since March 2019.
            <br />
            This was one of the reasons why I wanted to try it out myself.
            As first project I actually built <ContentLink href='/experience/projects/this-website'>this very website</ContentLink> you are browsing right now.
        </p>
        <p>
            I personally really like React because of its flexibility.
            It&apos;s not really a framework, but more a library allowing you to use it as lightly or heavily as you want.
            <br />
            The JSX syntax introduced by React is a breeze to use and fully incorporates the powers of native
            <ContentLink href='/skills/hard-skills/programming-languages/javascript'>javascript</ContentLink>.
        </p>
        <p>
            I&apos;d love to work some more with React now that I&apos;ve tried it out.
        </p>
    </div>
);

export default REACT;

import React from 'react';
import { ContentLink } from '../../../../components/ContentNavigation';
import Quote from '../../../../components/Quote';

const quoteText = 'What made JavaScript so powerful, with all the warts and rush job properties, '
    + 'was that it was directly connected to all the things in the browser that average web developers wanted to use.';
const quoteAuthor = 'Brendan Eich, Creator of Javascript - "Brendan Eich on Creating JavaScript in 10 Days, and What He’d Do Differently Today", Interview with David Cassel';

const Javascript = () => (
    <div id='javascript'>
        <h1>Javascript</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            I&apos;ve gained most of my Javascript knowledge from my experience as a frontend developer at <ContentLink href='/experience/companies/ing'>ING</ContentLink>,
            where I worked mostly with ES5 and ES6 within the framework <ContentLink href='/skills/hard-skills/frameworks/polymer'>Polymer</ContentLink>.
            <br />
            I&apos;ve also used Javascript to create <ContentLink href='/experience/projects/this-website'>this website</ContentLink> of course.
        </p>
        <p>
            Javascript is a dynamic and weakly typed language which makes it easy to set things up quickly, but can also be difficult to debug.
            You can easily write wrong code which will still execute, but probably results in something unintended.
        </p>
        <p>
            Personally I&apos;m a big fan of Javascript because of its few of constraints and forgiving nature in comparison with most other languages.
            It codes quickly and reads easily.
        </p>
    </div>
);

export default Javascript;

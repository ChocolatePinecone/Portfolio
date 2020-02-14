import React from 'react';
import { ContentLink } from '../../../../components/ContentNavigation'
import Quote from '../../../../components/Quote';

const quoteText = 'Javascript will either die quickly or it will be around for twenty years or longer.';
const quoteAuthor = 'Brendan Eich - Creator of Javascript';

const Javascript = () => {
    return (
        <div id='javascript'>
            <h1>Javascript</h1>
            <Quote text={quoteText} author={quoteAuthor} />
            <p>
                I've gained most of my Javascript knowledge from my experience as a frontend developer at <ContentLink href='/experience/companies/ing'>ING</ContentLink>, where I worked mostly with ES5 and ES6 within the framework <ContentLink href='/skills/hard-skills/frameworks/polymer'>Polymer</ContentLink>.
                <br />
                I've also used Javascript to create <ContentLink href='/experience/projects/this-website'>this website</ContentLink> of course.
            </p>
            <p>
                Javascript is a dynamic and weakly typed language which makes it easy to set things up quickly, but can also be difficult to debug. You can easily write wrong code which will still execute, but probably results in something unintended.
            </p>
            <p>
                Personally I'm a big fan of Javascript because of its few of constraints and forgiving nature in comparison with most other languages. It codes quickly and reads easily.
            </p>
        </div>
    );
};

export default Javascript;

import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';

const quoteText = 'Broadly speaking, short words are best, and the old words, when short, are best of all.';
const quoteAuthor = 'Sir Winston Churchill - Speech on receiving the London Times Literary Award November 2, 1949';

const Presenting = () => {
    return (
        <div id='presenting'>
            <h1>Presenting</h1>
            <Quote text={quoteText} author={quoteAuthor} />
            <p>
                A good presenting skill is partly built from experience and learning, but also partly needs to come naturally from of charisma and social skills.
            </p>
            <p>
                During my time at <ContentLink href='/experience/companies/ing'>ING</ContentLink> I've discovered that I really like presenting because of my desire to share knowledge and to do this in a way everyone understands.
                <br />
                I've presented sprint demos, and I've given workshops and other informational sessions. I've also acted as scrum master numerous of times.
            </p>
            <p>
                I'm glad to do any presenting needed inside and outside the team.
            </p>
        </div>
    );
};

export default Presenting;

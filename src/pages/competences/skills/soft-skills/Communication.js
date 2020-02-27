import React from 'react';
import Quote from '../../../../components/Quote';

const quoteText = 'Electric communication will never be a substitute for the face of someone who with their soul encourages another person to be brave and true.';
const quoteAuthor = 'Charles Dickens - "The Wreck of the Golden Mary"';

const Communication = () => (
    <div id='communication'>
        <h1>Communication</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            When communication fails in a team, the work is bound to suffer because of it.
            <br />
            Even though I might be a pretty quiet person, when it comes to communication
            I tend to directly address any possible misunderstandings and create clarity when communicating.
        </p>
        <p>
            My energy drains when teams are discussing endlessly,
            so I like to make things clear by writing points or drawing problems out on a board.
            <br />
            I tend to share any relevant information for the team in bite sized chunks through mail or through a session.
            I also like to do some pair programming from time to time to get on the same page regarding solutions and approach.
        </p>
        <p>
            All in all I believe great communication is not necessarily communicating much, but communicating targeted, and formulating with care.
        </p>
    </div>
);

export default Communication;

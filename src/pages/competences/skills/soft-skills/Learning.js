import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';

const quoteText = 'The beautiful thing about learning is nobody can take it away from you.';
const quoteAuthor = 'B.B. King - In The Charlotte Observer (5 October 1997)';

const Learning = () => {
    return (
        <div id='learning'>
            <h1>Learning</h1>
            <Quote text={quoteText} author={quoteAuthor} />
            <p>
                I love to learn, and to do it in depth. The fact I want to become a fullstack developer is because I want to understand the whole chain in depth.
            </p>
            <p>
                My desire to learn is reflected in my hobbies which almost always involve learning or mastering a skill. For example, I love to <ContentLink href='/experience/projects/rocket-shipment'>develop games</ContentLink> or read books about soft skills.
                <br />
                I'm good in finding areas where my team is performing less strong, just so I can develop myself in a way to fill this gap.
            </p>
            <p>
                This is why I think I can fit in any team, as long as there is something to learn.
            </p>
        </div>
    );
};

export default Learning;

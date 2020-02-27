import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';

const quoteText = 'An API that isn\'t comprehensible, isn\'t usable.';
const quoteAuthor = 'James Gosling, Creator of Java - "A Conversation with James Gosling", Interview with Bill Venners';

const Java = () => (
    <div id='java'>
        <h1>Java</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            I first learned Java SE 6 during my eduction for becoming an electrical engineer.
            <br />
            I wrote a couple of PC-applications for the assignments and later made a Pac-man game with 5 playable levels.
        </p>
        <p>
            Shortly after I started at Ordina (August 2017) I passed my Java SE 8 OCA exam with a score of 87%.
            <br />
            Next to my frontend duties at <ContentLink href='/experience/companies/ing'>ING</ContentLink>,
            I&apos;ve also done changes in the team APIs which were written in Java.
        </p>
        <p>
            Java has a little special place in my heart because it is the first OOP language I learned.
            It&apos;s also the first language I coded a program in that actually had a window in which you could draw instead of a console window.
        </p>
        <p>
            I&apos;d love to focus more on this language in the coming period to hone my Java skills.
        </p>
    </div>
);

export default Java;

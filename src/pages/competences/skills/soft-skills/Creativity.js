import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';

const quoteText = 'You can’t use up creativity. The more you use, the more you have.';
const quoteAuthor = 'Maya Angelou - Bell Telephone Magazine';

const Creativity = () => (
    <div id='creativity'>
        <h1>Creativity</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            I love being creative. I&apos;ve had a wide variety of creative outlets in the past from painting miniatures,
            making music and poetry to making gadgets and developing games.
        </p>
        <p>
            I believe creativity is hugely important as it is the biggest part in problem-solving and is responsible for the greatest inventions.
            That&apos;s why I try to utilize and practice it both when working and when off-work.
        </p>
        <p>
            An example of my creativity is <ContentLink href='/experience/projects/rocket-shipment'>the PC videogame I&apos;m creating</ContentLink> from scratch.
            Feel free to check it out!
        </p>
    </div>
);

export default Creativity;

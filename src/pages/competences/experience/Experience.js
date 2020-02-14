import React from 'react';
import { ContentLink } from '../../../components/ContentNavigation';
import Quote from '../../../components/Quote';

const quoteText ='Pure logical thinking cannot yield us any knowledge of the empirical world; all knowledge of reality starts from experience and ends in it.';
const quoteAuthor = 'Albert Einstein';

const Experience = () => {
    return (
        <div id='experience'>
            <h1>Experience</h1>
            <Quote text={quoteText} author={quoteAuthor} />

            <p>
                My experience mostly comes from working within companies and from smaller projects. You can find the most interesting ones in the navigation menu.
            </p>
            <p>
                My biggest company experience has been to work for <ContentLink href='/experience/companies/ing'>ING</ContentLink> for 2 years.
            </p>
            <p>
                Some interesting personal projects of mine are:
            </p>
            <ul>
                <li>
                    <ContentLink href='/experience/projects/this-website'>This website</ContentLink>
                </li>
                <li>
                    <ContentLink href='/experience/projects/rocket-shipment'>My pc game made from scratch</ContentLink>
                </li>
                <li>
                    <ContentLink href='/experience/projects/my-phaser-workshop'>My workshop for making Pong with Phaser</ContentLink>
                </li>
            </ul>
        </div>
    );
};

export default Experience;

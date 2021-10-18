import React from 'react';
import { ContentLink } from '../../../components/ContentNavigation';
import Quote from '../../../components/Quote';

const quoteText = 'Pure logical thinking cannot yield us any knowledge of the empirical world; all knowledge of reality starts from experience and ends in it.';
const quoteAuthor = 'Albert Einstein - Einstein: The Formative Years, 1879-1909';

const Experience = () => (
    <div id='experience'>
        <h1>Experience</h1>
        <Quote text={quoteText} author={quoteAuthor} />

        <p>
            I have had experience working for big organisations like <ContentLink href='/experience/companies/ing'>ING</ContentLink> and the&nbsp;
            <ContentLink href='/experience/companies/police'>Police Netherlands</ContentLink>.
            Alongside these bigger projects I also worked on personal projects of which you can find the most interesting ones described on this website.
        </p>
        <p>
            Some interesting personal projects of mine are:
        </p>
        <ul>
            <li>
                <ContentLink href='/experience/projects/this-website'>This website</ContentLink>
            </li>
            <li>
                <ContentLink href='/experience/projects/jelmerqa'>A fullstack question/answer application</ContentLink>
            </li>
            <li>
                <ContentLink href='/experience/projects/rocket-shipment'>My pc game made from scratch</ContentLink>
            </li>
            <li>
                <ContentLink href='/experience/projects/my-phaser-workshop'>My workshop for making Pong with the JS framework &quot;Phaser&quot;</ContentLink>
            </li>
        </ul>
    </div>
);

export default Experience;

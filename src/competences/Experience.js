import React from 'react';
import { ContentLink } from '../components/ContentNavigation';

const Experience = () => {
    return (
        <div id='experience'>
            <h1>Experience</h1>
            <p>
                I have gained experience within companies and within smaller projects. You can find the most interesting ones in the navigation menu.
            </p>
            <p>
                My biggest company experience has been to work for <ContentLink href='/experience/companies/frontender-at-ing'>ING</ContentLink> for 2 years.
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

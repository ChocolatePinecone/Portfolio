import React from 'react';
import { ContentLink } from '../../../components/ContentNavigation';
import Quote from '../../../components/Quote';

const quoteText = 'Talent you have naturally. Skill is only developed by hours and hours and hours of beating on your craft.';
const quoteAuthor = 'Will Smith - Hancock Interview, NBC Today Show';

const Skills = () => (
    <div id='skills'>
        <h1>Skills</h1>
        <Quote text={quoteText} author={quoteAuthor} />

        <p>
            I&apos;m constantly trying to improve or learn new skills.
        </p>
        <p>
            I&apos;ve worked with multiple languages such as&nbsp;
            <ContentLink href='/skills/hard-skills/programming-languages/javascript'>Javascript</ContentLink>,&nbsp;
            <ContentLink href='/skills/hard-skills/programming-languages/java'>Java</ContentLink> and&nbsp;
            <ContentLink href='/skills/hard-skills/programming-languages/c++'>C++</ContentLink>.
            <br />
            I&apos;ve also used a variety of frameworks and tools, which you can all find in the navigation menu.
        </p>
        <p>
            Feel free to browse through my hard and soft skills.
        </p>
        <p>
            In case you want to know more about how I have applied and gained these skills, please visit the <ContentLink href='/experience'>experience pages</ContentLink>.
        </p>
    </div>
);

export default Skills;

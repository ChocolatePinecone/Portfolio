import React from 'react';
import { ContentLink } from '../../../../components/ContentNavigation';
import Quote from '../../../../components/Quote';

const quoteText ='Talent you have naturally. Skill is only developed by hours and hours and hours of beating on your craft.';
const quoteAuthor = 'Will Smith';

const Skills = () => {
    return (
        <div id='skills'>
            <h1>Skills</h1>
            <Quote text={quoteText} author={quoteAuthor} />

            <p>
                I'm constantly trying to improve or learn new skills.
            </p>
            <p>
                I've worked with multiple languages such as <ContentLink href='/skills/hard-skills/languages/javascript'>Javascript</ContentLink>, <ContentLink href='/skills/hard-skills/languages/java'>Java</ContentLink> and <ContentLink href='/skills/hard-skills/languages/c++'>C++</ContentLink>.
                <br/>
                I've also used a variety of frameworks and tools, which you can all find in the navigation menu.
            </p>
            <p>
                Feel free to browse through my hard and soft skills.
            </p>
            <p>
                In case you want to know more about how I have applied and gained these skills, please visit the <ContentLink href='/experience'>experience pages</ContentLink>.
            </p>
        </div>
    );
};

export default Skills;

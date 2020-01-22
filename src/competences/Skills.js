import React from 'react';
import { ContentLink } from '../components/ContentNavigation';

const Skills = () => {
    return (
        <div id='skills'>
            <h1>Skills</h1>
            <p>
                I'd love to show you some of the skills I have gained over time.
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
                In case you want to know more about how I have used and built up these skills, please visit the <ContentLink href='/experience'>experience pages</ContentLink>
            </p>
        </div>
    );
};

export default Skills;

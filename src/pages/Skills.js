import React from 'react';
import ContentNavigation from '../components/ContentNavigation';

const temp = [
    {
        label: 'Skills',
        subroutes: [
            {
                label: 'Hard skills',
                subRoutes: [
                    {
                        label: 'Languages',
                    },
                    {
                        label: 'Frameworks',
                    },
                    {
                        label: 'Tools',
                    },
                ],
            },
            {
                label: 'Soft skills',
                su
            },
        ],
    },
];

const Skills = () => (
    <div id='skills'>
        <h3>This is the skills page</h3>
        <ContentNavigation routes={temp} />
    </div>
);

export default Skills;

/**
 * This skills page will have the following grouping:
 *
 *  Hard skills
 *      Languages
 *          Javascript
 *          Java
 *          C++
 *      Frameworks
 *          Polymer
 *          React
 *          Spring
 *      Tools
 *          ESLint
 *
 *  Soft skills
 *      Communication
 *      Presenting
 *      Studious
 *      Flexible
 *      Creative
 */

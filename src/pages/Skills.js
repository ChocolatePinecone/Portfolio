import React from 'react';
import ContentNavigation from '../components/ContentNavigation';

const temp = [
    {
        label: 'Skills',
        subRoutes: [
            {
                label: 'Hard skills',
                subRoutes: [
                    {
                        label: 'Languages',
                        subRoutes: [
                            {
                                label: 'Javascript',
                            },
                            {
                                label: 'Java',
                            },
                            {
                                label: 'C++',
                            },
                        ],
                    },
                    {
                        label: 'Frameworks',
                        subRoutes: [
                            {
                                label: 'Polymer',
                            },
                            {
                                label: 'React',
                            },
                            {
                                label: 'Spring',
                            },
                        ],
                    },
                    {
                        label: 'Tools',
                        subRoutes: [
                            {
                                label: 'ESLint',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Soft skills',
                subRoutes: [
                    {
                        label: 'Communication',
                    },
                    {
                        label: 'Presenting',
                    },
                    {
                        label: 'Learning',
                    },
                    {
                        label: 'Flexibility',
                    },
                    {
                        label: 'Creativity',
                    },
                ],
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

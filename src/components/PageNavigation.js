import React from 'react';
import './PageNavigation.css';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { useHistory } from 'react-router-dom';
import { getContentByLanguage, isLanguageEN } from '../utils/LanguageSetting';

export const PageNavigation = () => {
    const history = useHistory();

    return (
        <BottomNavigation
            onChange={(event, path) => {
                redirectToPath(history, path);
            }}
            showLabels
            className='nav'
        >
            <BottomNavigationAction
                classes={{ root: 'icon', label: 'label', selected: 'label' }}
                value='/over-mij'
                label={getContentByLanguage('Over Mij', 'About me')}
                icon={<InfoOutlinedIcon fontSize='large' />}
            />
            <BottomNavigationAction
                classes={{ root: 'icon', label: 'label', selected: 'label' }}
                value='/vaardigheden'
                label={getContentByLanguage('Vaardigheden', 'Skills')}
                icon={<CodeOutlinedIcon fontSize='large' />}
            />
            <BottomNavigationAction
                classes={{ root: 'icon', label: 'label', selected: 'label' }}
                value='/ervaring'
                label={getContentByLanguage('Ervaring', 'Experience')}
                icon={<PeopleAltOutlinedIcon fontSize='large' />}
            />
        </BottomNavigation>

    );
};

export const redirectionType = Object.freeze({ PAGE: 0, CONTENT: 1 });
export const redirectToPath = (history, path, type = redirectionType.PAGE) => {
    // Determine element selector to use for fading
    let selector = '';
    const pathUrl = `${path}${isLanguageEN() ? '?lang=en' : ''}`;
    if (type === redirectionType.PAGE) selector = '.page';
    else if (type === redirectionType.CONTENT) selector = '.content';

    if (selector !== '') {
        // Fade out current content
        document.querySelector(selector)
            .classList
            .add('fade-out');

        // Negate timeout when animation will not be perfomed
        const mql = window.matchMedia('prefers-reduced-motion: no-preference');
        const timeout = (mql.matches) ? 0 : 280;

        // Change to new content through history so only page content will be reloaded instead of the whole page
        window.setTimeout(() => {
            document.querySelector(selector)
                .classList
                .remove('fade-out');
            history.push(pathUrl);
        }, timeout);
    }
};

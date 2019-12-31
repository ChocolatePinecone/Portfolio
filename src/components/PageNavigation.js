import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import './PageNavigation.css';

const PageNavigation = () => {
    return (
        <BottomNavigation showLabels className='nav'>
            <BottomNavigationAction classes={{ root: 'icon', label: 'label', selected: 'label' }} label='About' icon={<InfoOutlinedIcon fontSize='large' />} />
            <BottomNavigationAction classes={{ root: 'icon', label: 'label', selected: 'label' }} label='Skills' icon={<CodeOutlinedIcon fontSize='large' />} />
            <BottomNavigationAction classes={{ root: 'icon', label: 'label', selected: 'label' }} label='Experience' icon={<PeopleAltOutlinedIcon fontSize='large' />} />
        </BottomNavigation>

    );
};

const redirectToPath = (path) => {
    // Fade out current page
    document.querySelector('.content').classList.add('fade-out');

    // Negate timeout when animation will not be perfomed
    const mql = window.matchMedia('prefers-reduced-motion: no-preference');
    const timeout = (mql.matches) ? 0 : 500;

    // Redirect when animation is done
    window.setTimeout(() => {
        window.location.pathname = path;
    }, timeout);
};

const navigate = (value) => {
    let path = '/';

    switch (value) {
    case 0: // About
        path = '/about';
        break;
    case 1: // Skills
        path = '/skills';
        break;
    case 2: // Experience
        path = '/experience';
        break;
    default:
        break;
    }

    redirectToPath(path);
};

const redirectToPath = (path) => {
    // Fade out current page
    document.querySelector('.content').classList.add('fade-out');

    // Negate timeout when animation will not be perfomed
    const mql = window.matchMedia('prefers-reduced-motion: no-preference');
    const timeout = (mql.matches) ? 0 : 500;

    // Redirect when animation is done
    window.setTimeout(() => {
        window.location.pathname = path;
    }, timeout);
};

export default PageNavigation;

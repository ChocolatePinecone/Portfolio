import React from 'react';
import './PageNavigation.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import { useHistory } from 'react-router-dom';

const PageNavigation = () => {
    const history = useHistory();

    const redirectToPath = (event, path) => {
        // Fade out current content
        document.querySelector('.page').classList.add('fade-out');

        // Negate timeout when animation will not be perfomed
        const mql = window.matchMedia('prefers-reduced-motion: no-preference');
        const timeout = (mql.matches) ? 0 : 490;

        // Change to new content through history so only page content will be reloaded instead of the whole page
        window.setTimeout(() => {
            document.querySelector('.page').classList.remove('fade-out');
            history.push(path);
        }, timeout);
    };

    return (
        <BottomNavigation onChange={redirectToPath} showLabels className='nav'>
            <BottomNavigationAction classes={{ root: 'icon', label: 'label', selected: 'label' }} value='/about' label='About' icon={<InfoOutlinedIcon fontSize='large' />} />
            <BottomNavigationAction classes={{ root: 'icon', label: 'label', selected: 'label' }} value='/skills' label='Skills' icon={<CodeOutlinedIcon fontSize='large' />} />
            <BottomNavigationAction classes={{ root: 'icon', label: 'label', selected: 'label' }} value='/experience' label='Experience' icon={<PeopleAltOutlinedIcon fontSize='large' />} />
        </BottomNavigation>

    );
};


export default PageNavigation;

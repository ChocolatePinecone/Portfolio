import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import './PageNavigation.css';

const PageNavigation = () => {
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className='nav'
        >
            <BottomNavigationAction classes={{ root: 'icon', label: 'label', selected: 'label' }} label='About' icon={<InfoOutlinedIcon fontSize='large' />} />
            <BottomNavigationAction classes={{ root: 'icon', label: 'label', selected: 'label' }} label='Skills' icon={<CodeOutlinedIcon fontSize='large' />} />
            <BottomNavigationAction classes={{ root: 'icon', label: 'label', selected: 'label' }} label='Experience' icon={<PeopleAltOutlinedIcon fontSize='large' />} />
        </BottomNavigation>
    );
};

export default PageNavigation;

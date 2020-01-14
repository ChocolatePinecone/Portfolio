import React from 'react';
import './ContentNavigation.css';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { ExpandMore, ExpandLess } from '@material-ui/icons';

const routes = [
    {
        label: 'Skills',
        subRoutes: [
            {
                label: 'Hard skills',
                subRoutes: [
                    {
                        label: 'Languages',
                        subRoutes: [
                            { label: 'Javascript' },
                            { label: 'Java' },
                            { label: 'C++' },
                        ],
                    },
                    {
                        label: 'Frameworks',
                        subRoutes: [
                            { label: 'Polymer' },
                            { label: 'React' },
                            { label: 'Spring' },
                        ],
                    },
                    {
                        label: 'Tools',
                        subRoutes: [
                            { label: 'ESLint' },
                        ],
                    },
                ],
            },
            {
                label: 'Soft skills',
                subRoutes: [
                    { label: 'Communication' },
                    { label: 'Presenting' },
                    { label: 'Learning' },
                    { label: 'Flexibility' },
                    { label: 'Creativity' },
                ],
            },
        ],
    },
];

const ContentNavigation = (props) => {
    const history = useHistory();

    const redirectToPath = (event, path) => {
        // Fade out current content
        document.querySelector('.content').classList.add('fade-out');

        // Negate timeout when animation will not be perfomed
        const mql = window.matchMedia('prefers-reduced-motion: no-preference');
        const timeout = (mql.matches) ? 0 : 490;

        // Change to new content through history so only page content will be reloaded instead of the whole page
        window.setTimeout(() => {
            document.querySelector('.content').classList.remove('fade-out');
            history.push(path);
        }, timeout);
    };

    return (
        <div className='navigation'>
            <List component='nav'>
                { routes.map((route) => createRouteListItem(route)) }
            </List>
        </div>
    );
};

const createRouteListItem = (route, parentRouteId = '', listDepth = 0) => {
    route.id = route.id || `/${route.label.toLowerCase()}`;
    route.id = parentRouteId + route.id;
    return <RouteListItem key={route.id} route={route} listDepth={listDepth} />;
};

const RouteListItem = (props) => {
    if (props.route.subRoutes === undefined) {
        return (
            <ListItem button className='list-item'>
                <ListItemText primary={props.route.label} style={{ paddingLeft: `${props.listDepth * 16}px` }} />
            </ListItem>
        );
    }

    return <CollapsibleListItem route={props.route} listDepth={props.listDepth} />;
};

const CollapsibleListItem = (props) => {
    const [open, setOpen] = React.useState(true);
    const toggleOpen = () => { setOpen(!open) };

    return (
        <div>
            <ListItem button className='list-item' onClick={toggleOpen}>
                <ListItemText primary={props.route.label} style={{ paddingLeft: `${props.listDepth * 16}px` }} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open}>
                <List>
                    { props.route.subRoutes.map((subRoute) => createRouteListItem(subRoute, props.route.id, props.listDepth + 1)) }
                </List>
            </Collapse>
        </div>
    );
};


export default ContentNavigation;
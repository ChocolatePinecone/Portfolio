import React from 'react';
import './ContentNavigation.css';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { redirectToPath, redirectionType } from '../components/PageNavigation';
import { toggleMobileMenu } from '../pages/Competences';

let rendering;

export class ContentNavigation extends React.Component {
    render() {
        rendering = true;
        return (
            <div className='navigation'>
                <List component='nav'>
                    {this.props.routes.map((route) => createRouteListItem(route))}
                </List>
            </div>
        );
    }

    componentDidMount() {
        rendering = false;
        updateNavigationSelection(window.location.pathname);
    }

    componentDidUpdate() {
        rendering = false;
    }
}

const createRouteListItem = (route, parentRouteId = '', listDepth = 0) => {
    if(route.id === undefined) {
        route.id = `/${route.label.toLowerCase()}`; // Convert to lower-case
        route.id = route.id.replace(/ /g, '-'); // Replace all spaces with hyphens
        route.id = parentRouteId + route.id; // Prepend route with parent route for correct url representation
    }
    return <RouteListItem key={route.id} route={route} listDepth={listDepth} />;
};

const RouteListItem = (props) => {
    const history = useHistory();

    if (props.route.subRoutes === undefined) {
        return (
            <ListItem button className='list-item' path={props.route.id} onClick={ () => { navigateToContent(history, props.route.id) } }>
                <ListItemText primary={ props.route.label } style={{ paddingLeft: `${props.listDepth * 16}px` }} />
            </ListItem>
        );
    }

    return <CollapsibleListItem route={props.route} listDepth={props.listDepth} />;
};

const CollapsibleListItem = (props) => {
    const shouldExpand = window.location.pathname.includes(props.route.id);

    const [open, setOpen] = React.useState(shouldExpand);

    // This opens the navigational path in the menu towards the current url, only when re-rendering.
    // User can still open/close this expanded path because component will not re-render on the 'open' state change.
    if(rendering && open !== shouldExpand && shouldExpand === true) setOpen(shouldExpand);

    const toggleOpen = () => { setOpen(!open) };

    return (
        <div>
            <ListItem button className='list-item' onClick={toggleOpen}>
                <ListItemText primary={ props.route.label } style={{ paddingLeft: `${props.listDepth * 16}px` }} />
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

const updateNavigationSelection = (newPath) => {
    const navigationItems = document.querySelector('.navigation').querySelectorAll('.list-item');

    for(const item of navigationItems) {
        const text = item.querySelector('span');

        if(text) {
            if (item.getAttribute('path') === newPath) {
                text.style.fontWeight = 'bold';
                text.style.color = 'DeepSkyBlue';
            } else {
                text.style.fontWeight = null;
                text.style.color = null;
            }
        }
    }
};

export const navigateToContent = (history, path) => {
    let delay = 0;
    if(document.querySelector('.navigation').classList.contains(('menu-opened'))) {
        toggleMobileMenu();
        delay = 300;
    }

    window.setTimeout(() => {
        redirectToPath(history, path, redirectionType.CONTENT);
        updateNavigationSelection(path);
    }, delay);
};

export const ContentLink = (props) => {
    const history = useHistory();

    const navigate = (e) => {
        e.preventDefault(); // Prevent anchor from redirecting
        navigateToContent(history, props.href); // Redirect in the desired way, only refreshing the content
    };

    return (
        <a href={ props.href } onClick={ navigate }>{ props.children }</a>
    );
};

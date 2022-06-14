import React from 'react';
import './ContentNavigation.css';
import { useHistory } from 'react-router-dom';
import {
    Collapse, List, ListItem, ListItemText,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { redirectToPath, redirectionType } from './PageNavigation';
import mobileMenu from '../utils/MobileMenu';
import { getContentByLanguage } from '../utils/LanguageSetting';

export const routes = [
    {
        labelNL: 'Vaardigheden',
        labelEN: 'Skills',
        subRoutes: [
            {
                label: 'Hard skills',
                subRoutes: [
                    {
                        labelNL: 'Programmeertalen',
                        labelEN: 'Programming Languages',
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
                            { label: 'Spring Boot' },
                            { label: 'Phaser' },
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
                    { labelNL: 'Communiceren', labelEN: 'Communication' },
                    { labelNL: 'Presenteren', labelEN: 'Presenting' },
                    { labelNL: 'Leren', labelEN: 'Learning' },
                    { labelNL: 'Creativiteit', labelEN: 'Creativity' },
                ],
            },
        ],
    },
    {
        labelNL: 'Ervaring',
        labelEN: 'Experience',
        subRoutes: [
            {
                labelNL: 'Bedrijven',
                labelEN: 'Companies',
                subRoutes: [
                    { label: 'ING' },
                    { labelNL: 'Politie', labelEN: 'Police' },
                ],
            },
            {
                labelNL: 'Projecten',
                labelEN: 'Projects',
                subRoutes: [
                    { labelNL: 'Deze website', labelEN: 'This website' },
                    { label: 'JelmerQA' },
                    { label: 'Rocket-Shipment' },
                    { labelNL: 'Mijn Phaser workshop', labelEN: 'My Phaser workshop' },
                ],
            },
        ],
    },
];

export const urls = {
    javascript: '/vaardigheden/hard-skills/programmeertalen/javascript',
    java: '/vaardigheden/hard-skills/programmeertalen/java',
    'c++': '/vaardigheden/hard-skills/programmeertalen/c++',
    polymer: '/vaardigheden/hard-skills/frameworks/polymer',
    react: '/vaardigheden/hard-skills/frameworks/react',
    'spring-boot': '/vaardigheden/hard-skills/frameworks/spring-boot',
    phaser: '/vaardigheden/hard-skills/frameworks/phaser',
    eslint: '/vaardigheden/hard-skills/tools/eslint',
    communiceren: '/vaardigheden/soft-skills/communiceren',
    presenteren: '/vaardigheden/soft-skills/presenteren',
    leren: '/vaardigheden/soft-skills/leren',
    creativiteit: '/vaardigheden/soft-skills/creativiteit',
    vaardigheden: '/vaardigheden',
    ing: '/ervaring/bedrijven/ing',
    politie: '/ervaring/bedrijven/politie',
    'deze-website': '/ervaring/projecten/deze-website',
    jelmerqa: '/ervaring/projecten/jelmerqa',
    'rocket-shipment': '/ervaring/projecten/rocket-shipment',
    'phaser-workshop': '/ervaring/projecten/mijn-phaser-workshop',
    ervaring: '/ervaring',
};

let rendering;

export class ContentNavigation extends React.Component {
    componentDidMount() {
        rendering = false;
        updateNavigationSelection(window.location.pathname);
    }

    componentDidUpdate() {
        rendering = false;
    }

    render() {
        rendering = true;
        return (
            <div className='navigation'>
                <List sx={{
                    '@media (max-width: 700px)': {
                        marginTop: 'var(--menu-bar-total-height)',
                        width: '100%',
                    },
                }}
                >
                    {this.props.routes.map((route) => createRouteListItem(route))}
                </List>
            </div>
        );
    }
}

const createRouteListItem = (route, parentRouteId = '', listDepth = 0) => {
    if (route.id === undefined) {
        const urlLabel = route.label || route.labelNL;
        route.id = `/${urlLabel.toLowerCase()}`; // Convert to lower-case
        route.id = route.id.replace(/ /g, '-'); // Replace all spaces with hyphens
        route.id = parentRouteId + route.id; // Prepend route with parent route for correct url representation
    }
    return <RouteListItem key={route.id} route={route} listDepth={listDepth} />;
};

const getRouteItemLabel = (route) => route.label || getContentByLanguage(route.labelNL, route.labelEN);

const RouteListItem = (props) => {
    const history = useHistory();

    if (props.route.subRoutes === undefined) {
        return (
            <ListItem
                button
                className='list-item'
                path={props.route.id}
                onClick={() => {
                    navigateToContent(history, props.route.id);
                }}
            >
                <ListItemText primary={getRouteItemLabel(props.route)} style={{ paddingLeft: `${props.listDepth * 16}px` }} />
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
    if (rendering && open !== shouldExpand && shouldExpand === true) setOpen(shouldExpand);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <ListItem button className='list-item' onClick={toggleOpen}>
                <ListItemText primary={getRouteItemLabel(props.route)} style={{ paddingLeft: `${props.listDepth * 16}px` }} />
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

    navigationItems.forEach((item) => {
        const text = item.querySelector('span');

        if (text) {
            if (item.getAttribute('path') === newPath) {
                text.style.fontWeight = 'bold';
                text.style.color = 'DeepSkyBlue';
            }
            else {
                text.style.fontWeight = null;
                text.style.color = null;
            }
        }
    });
};

export const navigateToContent = (history, path) => {
    let delay = 0;
    if (document.querySelector('.navigation').classList.contains(('menu-opened'))) {
        mobileMenu();
        delay = 300;
    }

    window.setTimeout(() => {
        redirectToPath(history, path, redirectionType.CONTENT);
        updateNavigationSelection(path);
    }, delay);
};

export const ContentLink = (props) => {
    const history = useHistory();
    const href = urls[props.to];

    const navigate = (e) => {
        e.preventDefault(); // Prevent anchor from redirecting
        navigateToContent(history, href); // Redirect in the desired way, only refreshing the content
    };

    return (
        <a href={href} onClick={navigate}>{ props.children }</a>
    );
};
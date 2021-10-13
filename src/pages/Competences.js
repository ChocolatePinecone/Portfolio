import React from 'react';
import './Competences.css';
import {
    Switch,
    Route,
    useHistory,
} from 'react-router-dom';
import { ContentNavigation } from '../components/ContentNavigation';
import logo from '../assets/images/logo.png';
import toggleMobileMenu from '../utils/toggleMobileMenu';
import { redirectToPath } from '../components/PageNavigation';
import Javascript from './competences/skills/hard-skills/Javascript';
import Java from './competences/skills/hard-skills/Java';
import Cplusplus from './competences/skills/hard-skills/C++';
import Polymer from './competences/skills/hard-skills/Polymer';
import REACT from './competences/skills/hard-skills/React';
import SpringBoot from './competences/skills/hard-skills/SpringBoot';
import Phaser from './competences/skills/hard-skills/Phaser';
import ESLint from './competences/skills/hard-skills/ESLint';
import Communication from './competences/skills/soft-skills/Communication';
import Presenting from './competences/skills/soft-skills/Presenting';
import Learning from './competences/skills/soft-skills/Learning';
import Creativity from './competences/skills/soft-skills/Creativity';
import Skills from './competences/skills/Skills';
import Experience from './competences/experience/Experience';
import ING from './competences/experience/ING';
import Police from './competences/experience/Police';
import ThisWebsite from './competences/experience/ThisWebsite';
import JelmerQA from './competences/experience/JelmerQA';
import RocketShipment from './competences/experience/RocketShipment';
import PhaserWorkshop from './competences/experience/PhaserWorkshop';

const routes = [
    {
        label: 'Skills',
        subRoutes: [
            {
                label: 'Hard skills',
                subRoutes: [
                    {
                        label: 'Programming Languages',
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
                    { label: 'Communication' },
                    { label: 'Presenting' },
                    { label: 'Learning' },
                    { label: 'Creativity' },
                ],
            },
        ],
    },
    {
        label: 'Experience',
        subRoutes: [
            {
                label: 'Companies',
                subRoutes: [
                    { label: 'ING' },
                    { label: 'Police' },
                ],
            },
            {
                label: 'Projects',
                subRoutes: [
                    { label: 'This website' },
                    { label: 'JelmerQA' },
                    { label: 'Rocket-Shipment' },
                    { label: 'My Phaser workshop' },
                ],
            },
        ],
    },
];

const Competences = () => {
    const history = useHistory();

    return (
        <div id='competences'>
            <div className='header-menu'>
                <div className='logo-container'>
                    <button type='button' className='logo' onClick={() => redirectToPath(history, '/')}>
                        <img src={logo} alt='Jelmer Pijnappel' />
                    </button>
                </div>
                <button type='button' className='mobile-burger-container' onClick={toggleMobileMenu}>
                    <div id='mobile-burger'>
                        <div className='bar topBar' />
                        <div className='bar btmBar' />
                    </div>
                </button>
            </div>
            <div className='body'>
                <ContentNavigation routes={routes} />
                <div className='content'>
                    <Switch>
                        <Route path='/skills/hard-skills/programming-languages/javascript'>
                            <Javascript />
                        </Route>
                        <Route path='/skills/hard-skills/programming-languages/java'>
                            <Java />
                        </Route>
                        <Route path='/skills/hard-skills/programming-languages/c++'>
                            <Cplusplus />
                        </Route>
                        <Route path='/skills/hard-skills/frameworks/polymer'>
                            <Polymer />
                        </Route>
                        <Route path='/skills/hard-skills/frameworks/react'>
                            <REACT />
                        </Route>
                        <Route path='/skills/hard-skills/frameworks/spring-boot'>
                            <SpringBoot />
                        </Route>
                        <Route path='/skills/hard-skills/tools/eslint'>
                            <ESLint />
                        </Route>
                        <Route path='/skills/hard-skills/frameworks/phaser'>
                            <Phaser />
                        </Route>
                        <Route path='/skills/soft-skills/communication'>
                            <Communication />
                        </Route>
                        <Route path='/skills/soft-skills/presenting'>
                            <Presenting />
                        </Route>
                        <Route path='/skills/soft-skills/learning'>
                            <Learning />
                        </Route>
                        <Route path='/skills/soft-skills/creativity'>
                            <Creativity />
                        </Route>
                        <Route path='/skills'>
                            <Skills />
                        </Route>
                        <Route path='/experience/companies/ing'>
                            <ING />
                        </Route>
                        <Route path='/experience/companies/police'>
                            <Police />
                        </Route>
                        <Route path='/experience/projects/this-website'>
                            <ThisWebsite />
                        </Route>
                        <Route path='/experience/projects/jelmerqa'>
                            <JelmerQA />
                        </Route>
                        <Route path='/experience/projects/rocket-shipment'>
                            <RocketShipment />
                        </Route>
                        <Route path='/experience/projects/my-phaser-workshop'>
                            <PhaserWorkshop />
                        </Route>
                        <Route path='/experience'>
                            <Experience />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Competences;
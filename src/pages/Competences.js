import React from 'react';
import './Competences.css';
import {
    Switch,
    Route,
    useHistory,
} from 'react-router-dom';
import { ContentNavigation, routes, urls } from '../components/ContentNavigation';
import logo from '../assets/images/logo.webp';
import mobileMenu from '../utils/MobileMenu';
import { redirectToPath } from '../components/PageNavigation';
import LanguageToggler from '../components/LanguageToggler';
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

const Competences = () => {
    const history = useHistory();

    return (
        <div id='competences'>
            <LanguageToggler history={history} competencesView />
            <div className='header-menu'>
                <div className='logo-container'>
                    <button type='button' className='logo' onClick={() => redirectToPath(history, '/')}>
                        <img src={logo} alt='Jelmer Pijnappel' />
                    </button>
                </div>
                <button type='button' className='mobile-burger-container' onClick={mobileMenu}>
                    <div id='mobile-burger'>
                        <div className='bar topBar' />
                        <div className='bar btmBar' />
                    </div>
                </button>
            </div>
            <div className='body'>
                <ContentNavigation routes={routes} />
                <div className='navigation-menu-space' />
                <div className='content'>
                    <Switch>
                        <Route path={urls.javascript}>
                            <Javascript />
                        </Route>
                        <Route path={urls.java}>
                            <Java />
                        </Route>
                        <Route path={urls['c++']}>
                            <Cplusplus />
                        </Route>
                        <Route path={urls.polymer}>
                            <Polymer />
                        </Route>
                        <Route path={urls.react}>
                            <REACT />
                        </Route>
                        <Route path={urls['spring-boot']}>
                            <SpringBoot />
                        </Route>
                        <Route path={urls.phaser}>
                            <Phaser />
                        </Route>
                        <Route path={urls.eslint}>
                            <ESLint />
                        </Route>
                        <Route path={urls.communiceren}>
                            <Communication />
                        </Route>
                        <Route path={urls.presenteren}>
                            <Presenting />
                        </Route>
                        <Route path={urls.leren}>
                            <Learning />
                        </Route>
                        <Route path={urls.creativiteit}>
                            <Creativity />
                        </Route>
                        <Route path={urls.vaardigheden}>
                            <Skills />
                        </Route>
                        <Route path={urls.ing}>
                            <ING />
                        </Route>
                        <Route path={urls.politie}>
                            <Police />
                        </Route>
                        <Route path={urls['deze-website']}>
                            <ThisWebsite />
                        </Route>
                        <Route path={urls.jelmerqa}>
                            <JelmerQA />
                        </Route>
                        <Route path={urls['rocket-shipment']}>
                            <RocketShipment />
                        </Route>
                        <Route path={urls['phaser-workshop']}>
                            <PhaserWorkshop />
                        </Route>
                        <Route path={urls.ervaring}>
                            <Experience />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Competences;
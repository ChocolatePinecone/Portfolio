import React from 'react';
import './About.css';
import { useHistory } from 'react-router-dom';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import picture from '../assets/images/me.webp';
import { PageNavigation, redirectToPath } from '../components/PageNavigation';
import LanguageToggler from '../components/LanguageToggler';
import { getContentByLanguage, isLanguageEN } from '../utils/LanguageSetting';
import { urls } from '../components/ContentNavigation';

const isLangEN = isLanguageEN();

const urlErvaring = `${urls.ervaring}${isLangEN ? '?lang=en' : ''}`;
const urlING = `${urls.ing}${isLangEN ? '?lang=en' : ''}`;
const urlPolitie = `${urls.politie}${isLangEN ? '?lang=en' : ''}`;
const urlRocketShipment = `${urls['rocket-shipment']}${isLangEN ? '?lang=en' : ''}`;
const urlJelmerQA = `${urls.jelmerqa}${isLangEN ? '?lang=en' : ''}`;
const urlWebsite = `${urls['deze-website']}${isLangEN ? '?lang=en' : ''}`;
const urlJava = `${urls.java}${isLangEN ? '?lang=en' : ''}`;
const urlJavascript = `${urls.javascript}${isLangEN ? '?lang=en' : ''}`;
const urlCplusplus = `${urls['c++']}${isLangEN ? '?lang=en' : ''}`;

const About = () => {
    const history = useHistory();

    return (
        <div id='about'>
            <LanguageToggler history={history} />
            <img src={picture} alt={getContentByLanguage('Foto van mij met mijn dochter op mijn schouders', 'Me, carrying my daughter on my shoulders')} />

            <p>
                {getContentByLanguage('Hallo! Mijn naam is Jelmer Pijnappel.', 'Hey! My name is Jelmer Pijnappel.')}
                <br />
                {getContentByLanguage(
                    'Ik ben vader van mijn kleine meid Ivy, echtgenoot van mijn lieve vrouw Dragana en een fervent coder.',
                    'I\'m a first time dad of my little girl Ivy, a husband to my lovely wife Dragana and a coding enthusiast.'
                )}
            </p>
            <h2>{getContentByLanguage('Geschiedenis', 'History')}</h2>
            <p>
                {getContentByLanguage('Ik hou van programmeren!', 'I love programming!')}
                <br />
                {
                    getContentByLanguage(
                        'Nadat ik mijn opleiding HBO Elektrotechniek afrondde (2012) en 5 jaar in het veld heb gewerkt, zag ik de mogelijkheid een carrièreswitch te maken naar de IT.',
                        'After getting my bachelor in Electrical Engineering (2012) and working for 5 years in the field, I saw the opportunity to steer my career towards IT.'
                    )
                }
            </p>

            {
                getContentByLanguage(
                    <p>
                        Snel na het starten bij Ordina begon ik als Front-end Engineer bij <a href={urlING} onClick={() => { redirect(history, urlING); }}>ING</a>.
                        Hoewel ik het daar erg naar mijn zin had, wilde ik me graag meer ontwikkelen richting Fullstack Engineer.
                        ING had helaas geen beschikbare Fullstack of Back-end plekken waar ik terecht kon, dus daarom besloot ik verder te zoeken buiten ING.
                        Momenteel werk ik Fullstack aan een project voor de <a href={urlPolitie} onClick={() => { redirect(history, urlPolitie); }}>Politie</a>.
                    </p>,
                    <p>
                        Soon after joining Ordina, I started as a Front-end Engineer at <a href={urlING} onClick={() => { redirect(history, urlING); }}>ING</a>.
                        Even though I&apos;ve enjoyed my time there a lot, I wanted to develop myself towards becoming a Fullstack Engineer.
                        Unfortunately ING did not have any Fullstack or Back-end opportunities for me, so I decided to search further outside of ING.
                        Currently I&apos;m working Fullstack on a project for <a href={urlPolitie} onClick={() => { redirect(history, urlPolitie); }}>the Police Netherlands</a>.
                    </p>
                )
            }

            <h2>{getContentByLanguage('Passies', 'Passions')}</h2>
            {
                getContentByLanguage(
                    <p>
                        Naast mijn dagelijkse werk ontwikkel ik sinds 2014 ook mijn eigen games.
                        <br />
                        Bij mijn game development heb ik gewerkt met C#,&nbsp;
                        <a href={urlJava} onClick={() => { redirect(history, urlJava); }}>Java</a>,&nbsp;
                        <a href={urlJavascript} onClick={() => { redirect(history, urlJavascript); }}>Javascript</a> en&nbsp;
                        <a href={urlCplusplus} onClick={() => { redirect(history, urlCplusplus); }}>C++</a>.
                        <br />
                        Deze laatste taal heb ik mezelf geleerd in korte tijd en is ook de taal die ik gebruik voor&nbsp;
                        <a href={urlRocketShipment} onClick={() => { redirect(history, urlRocketShipment); }}>mijn nieuwste game</a>.
                    </p>,
                    <p>
                        In addition to my regular job I&apos;ve been developing my own games since 2014.
                        <br />
                        When developing games, I&apos;ve worked with the languages C#,
                        <a href={urlJava} onClick={() => { redirect(history, urlJava); }}>Java</a>,&nbsp;
                        <a href={urlJavascript} onClick={() => { redirect(history, urlJavascript); }}>Javascript</a> and&nbsp;
                        <a href={urlCplusplus} onClick={() => { redirect(history, urlCplusplus); }}>C++</a>.
                        <br />
                        This last language has been self-taught in a short time and is the language I&apos;m using for&nbsp;
                        <a href={urlRocketShipment} onClick={() => { redirect(history, urlRocketShipment); }}>my latest game</a>.
                    </p>
                )
            }
            {
                getContentByLanguage(
                    <p>
                        Ik hou ervan af en toe een projectje te doen met electronica of een informatief boek te lezen over bijvoorbeeld psychologie.
                        <br />
                        Hiernaast speel ik ook regelmatig een strategische bordspel of een videogame.
                    </p>,
                    <p>
                        I love doing projects with electronics or reading an informative book about, for example, psychology.
                        <br />
                        Next to this I regularly play strategic board games or videogames.
                    </p>
                )
            }

            <h2>{getContentByLanguage('Deze website', 'This website')}</h2>
            {
                getContentByLanguage(
                    <p>
                        In plaats van het sturen van een CV is het veel krachtiger je vaardigheden te laten zien.
                        <br />
                        Dat is precies waar deze website voor dient. Ik heb deze website met <a href={urlWebsite} onClick={() => { redirect(history, urlWebsite); }}>verschillende tools</a> gemaakt
                        en de code openbaar op github staan.
                        Ik update de website periodiek met <a href={urlErvaring} onClick={() => { redirect(history, urlErvaring); }}>nieuwe projecten</a> die een idee geven van wat ik kan.
                    </p>,
                    <p>
                        Instead of just sending a CV, showing something you built is much more powerful.
                        <br />
                        That&apos;s exactly what this site is for. I&apos;ve made this website using a <a href={urlWebsite} onClick={() => { redirect(history, urlWebsite); }}>range of tools</a>&nbsp;
                        and have made the code public on github.
                        I update the website periodically with <a href={urlErvaring} onClick={() => { redirect(history, urlErvaring); }}>new projects</a> that give an idea of my abilities.
                    </p>
                )
            }
            <p>
                {
                    getContentByLanguage(
                        'Tussen de pagina\'s zul je quotes vinden die me inspireren of die ik grappig vond, links naar dingen die ik gemaakt heb, '
                        + 'en projecten die ik heb gedaan om iets te leren of te laten zien dat ik iets specifieks kan.',
                        'Throughout the pages you\'ll find quotes that inspire me or I just think are funny, links to things I\'ve created, and '
                        + 'projects I did to learn something or show I can do something specific.'
                    )
                }
            </p>
            {
                getContentByLanguage(
                    <p>
                        Veel plezier met het lezen en rondkijken!
                        <br />
                        Mocht je vragen hebben, voel je vrij om me een vraag te sturen via mijn eigengemaakte <a href={urlJelmerQA} onClick={() => { redirect(history, urlJelmerQA); }}>vragen API</a>,
                        of stuur me een berichtje op <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/jelmer-pijnappel/'>LinkedIn<OpenInNewIcon fontSize='small' /></a>.
                    </p>,
                    <p>
                        Have fun reading and looking around!
                        <br />
                        If you have any questions feel free to ask me through my <a href={urlJelmerQA} onClick={() => { redirect(history, urlJelmerQA); }}>question API</a>,
                        or shoot me a message on <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/jelmer-pijnappel/'>LinkedIn<OpenInNewIcon fontSize='small' /></a>.
                    </p>
                )
            }
            <PageNavigation className='nav' />
        </div>
    );
};

const redirect = (history, url) => {
    // Redirect
    redirectToPath(history, url);

    // Return false to disable further navigation by the anchor calling this
    return false;
};

export default About;

import React from 'react';
import './About.css';
import { useHistory } from 'react-router-dom';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import picture from '../assets/images/me.webp';
import { PageNavigation, redirectToPath } from '../components/PageNavigation';

const urlING = '/experience/companies/ing';
const urlJava = '/skills/hard-skills/programming-languages/java';
const urlJavascript = '/skills/hard-skills/programming-languages/javascript';
const urlCplusplus = '/skills/hard-skills/programming-languages/c++';
const urlRocketShipment = '/experience/projects/rocket-shipment';
const urlJelmerQA = '/experience/projects/jelmerqa';

const About = () => {
    const history = useHistory();

    return (
        <div id='about'>
            <img src={picture} alt='Me, carrying my daughter on my shoulders' />

            <p>
                Hey! My name is Jelmer Pijnappel.
                <br />
                I&apos;m a first time dad of my little girl Ivy, a husband to my lovely wife Dragana and a coding enthusiast.
            </p>
            <h2>Origins</h2>
            <p>
                I love programming!
                <br />
                After getting my bachelor in Electrical Engineering (2012) and working for 5 years in the field, I saw the opportunity to steer my career towards IT.
            </p>
            <p>
                Soon after joining Ordina (August 2017), I started as a Frontend Engineer
                at <a href={urlING} onClick={() => { redirect(history, urlING); }}>ING</a>.
                Even though I&apos;ve enjoyed my time there a lot, I wanted to develop myself towards becoming a Fullstack Engineer.
                Unfortunately ING did not have any Fullstack or Backend opportunities for me, so I decided to search further outside of ING.
                Currently I&apos;m working fullstack on a project for the Police Netherlands.
            </p>

            <h2>Passions</h2>
            <p>
                In addition to my regular job I&apos;ve been developing my own games since 2014.
                <br />
                When developing games, I&apos;ve worked with the languages
                C#, <a href={urlJava} onClick={() => { redirect(history, urlJava); }}>Java</a>,&nbsp;
                <a href={urlJavascript} onClick={() => { redirect(history, urlJavascript); }}>Javascript</a> and&nbsp;
                <a href={urlCplusplus} onClick={() => { redirect(history, urlCplusplus); }}>C++</a>.
                <br />
                This last language has been self-taught in a short time and is the language I&apos;m using
                for <a href={urlRocketShipment} onClick={() => { redirect(history, urlRocketShipment); }}>my latest game</a>.
            </p>
            <p>
                I also like reading books about and all kinds of informational subjects like psychology or science.
                <br />
                Next to this I love playing games (both board and digital among others).
            </p>

            <h2>This website</h2>
            <p>
                Instead of just sending a CV, showing something you built is much more powerful.
                <br />
                That&apos;s exactly what this site is for. In addition to the content of this site, you&apos;ll hopefully get a better understanding of my personality as well.
            </p>
            <p>
                Throughout the pages you&apos;ll find quotes that inspire me or I just think are funny, links to things I&apos;ve created, and integrated demonstrations of my skills.
            </p>
            <p>
                Have fun reading and looking around!
                <br />
                If you have any questions feel free to ask me through the same way I gave you this website link, or shoot me a message on
                my  <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/jelmer-pijnappel/'>LinkedIn page<OpenInNewIcon fontSize='small' /></a>.
                As part of a personal project I&apos;ve also built a question API that you can use to ask me stuff <a href={urlJelmerQA} onClick={() => { redirect(history, urlJelmerQA); }}>here</a>.
            </p>
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

import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { ContentLink } from '../../../components/ContentNavigation'
import Quote from '../../../components/Quote';

const quoteText ='It isn\'t about "games", for me, personally, and it never really was. It was about creating something- anything- far bigger than yourself.';
const quoteAuthor = 'Shigeru Miyamoto - Nintendo\'s most respected video game developer - GDC 2011';

const PhaserWorkshop = () => {
    return (
        <div id='PhaserWorkshop'>
            <h1>My Phaser Workshop</h1>
            <Quote text={quoteText} author={quoteAuthor} />
            <p>
                While <ContentLink href='/skills/soft-skills/learning'>learning</ContentLink> and trying out some small things with <ContentLink href='/skills/hard-skills/frameworks/phaser'>Phaser</ContentLink> and experiencing how easy something can be set up, I decided to create a workshop to teach others about game development.
            </p>
            <p>
                The goal of the workshop is to build a version of one of the first video games: <strong>Pong</strong>.
                <br />
                Next to this, I also explain a bit about video game development and game loops in general.
                <br />
                People really liked the workshop which also I've made available <a target='_blank' href='https://github.com/PijnappelJ/phaser-pong'>here<OpenInNewIcon fontSize="small"/></a>.
            </p>
            <p>
                While giving this workshop I've had the opportunity to practice my <ContentLink href='/skills/soft-skills/presenting'>presenting</ContentLink> and of course my <ContentLink href='/skills/soft-skills/creativity'>creativity</ContentLink>.
            </p>
        </div>
    );
};

export default PhaserWorkshop;

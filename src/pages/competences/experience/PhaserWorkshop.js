import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ContentLink } from '../../../components/ContentNavigation';
import Quote from '../../../components/Quote';
import PongGame from '../../../components/PongGame';
import { getContentByLanguage } from '../../../utils/LanguageSetting';

const quoteText = '\'It\'s the simplest game. One moving spot, two paddles, score digits\' – that was one of the harder things to actually make, '
    + 'to try to make those seven segment numerals, y\'know – and that was it.';
const quoteAuthor = 'Allan Alcorn, Creator of Pong - Interview with IGN, retrieved 2015-11-09';

const PhaserWorkshop = () => (
    <div id='PhaserWorkshop'>
        <h1>
            {getContentByLanguage(
                'Mijn Phaser Workshop',
                'My Phaser Workshop'
            )}
        </h1>
        <Quote text={quoteText} author={quoteAuthor} />
        {
            getContentByLanguage(
                <p>
                    Tijdens het <ContentLink to='leren'>leren</ContentLink> en uitproberen
                    van <ContentLink to='phaser'>Phaser</ContentLink> besloot ik een workshop te maken om
                    anderen iets te leren over een van mijn passies, game development.
                </p>,
                <p>
                    While <ContentLink to='leren'>learning</ContentLink> and trying out
                    some small things with <ContentLink to='phaser'>Phaser</ContentLink> I decided to create a workshop to learn others about
                    one of my passions, game development.
                </p>
            )
        }
        {
            getContentByLanguage(
                <p>
                    Het doel van de workshop was om een versie neer te zetten van een van de eerste videogames: <strong>Pong</strong>.
                    <br />
                    Daarnaast legde ik ook een stuk uit over videogame development en game loops in het algemeen.
                    <br />
                    Deelnemers leken de workshop erg leuk te vinden, welke ik
                    ook <a target='_blank' rel='noopener noreferrer' href='https://github.com/PijnappelJ/phaser-pong'>hier<OpenInNewIcon fontSize='small' /></a> beschikbaar heb gemaakt.
                </p>,
                <p>
                    The goal of the workshop is to build a version of one of the first video games: <strong>Pong</strong>.
                    <br />
                    Next to this, I also explain a bit about video game development and game loops in general.
                    <br />
                    People really liked the workshop which also I&apos;ve made
                    available <a target='_blank' rel='noopener noreferrer' href='https://github.com/PijnappelJ/phaser-pong'>here<OpenInNewIcon fontSize='small' /></a>.
                </p>
            )
        }
        {
            getContentByLanguage(
                <p>
                    Door het geven van deze workshop heb ik de mogelijkheid genomen mijn <ContentLink to='presenteren'>presenteren</ContentLink> en natuurlijk
                    mijn <ContentLink to='creativiteit'>creativiteit</ContentLink> verder te ontwikkelen.
                </p>,
                <p>
                    While giving this workshop I&apos;ve had the opportunity to practice my <ContentLink to='presenteren'>presenting</ContentLink> and
                    of course my <ContentLink to='creativiteit'>creativity</ContentLink>.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Als je deze pagina toevallig op een PC aan het bekijken bent, kun je het resultaat van de workshop hieronder spelen!',
                'If you\'re viewing this page on a PC, the result of the workshop can be played below!'
            )}
        </p>
        <br />
        <PongGame />
    </div>
);

export default PhaserWorkshop;

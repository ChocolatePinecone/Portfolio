import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { ContentLink } from '../../../components/ContentNavigation';
import Quote from '../../../components/Quote';
import PongGame from '../../../components/PongGame';

const quoteText = '\'It\'s the simplest game. One moving spot, two paddles, score digits\' – that was one of the harder things to actually make, '
    + 'to try to make those seven segment numerals, y\'know – and that was it.';
const quoteAuthor = 'Allan Alcorn, Creator of Pong - Interview with IGN, retrieved 2015-11-09';

const PhaserWorkshop = () => (
    <div id='PhaserWorkshop'>
        <h1>My Phaser Workshop</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            While <ContentLink href='/skills/soft-skills/learning'>learning</ContentLink> and trying out
            some small things with <ContentLink href='/skills/hard-skills/frameworks/phaser'>Phaser</ContentLink> and experiencing how easy something can be set up,
            I decided to create a workshop to teach others about game development.
        </p>
        <p>
            The goal of the workshop is to build a version of one of the first video games: <strong>Pong</strong>.
            <br />
            Next to this, I also explain a bit about video game development and game loops in general.
            <br />
            People really liked the workshop which also I&apos;ve made available
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/PijnappelJ/phaser-pong'>here<OpenInNewIcon fontSize='small' /></a>.
        </p>
        <p>
            While giving this workshop I&apos;ve had the opportunity to practice my <ContentLink href='/skills/soft-skills/presenting'>presenting</ContentLink>
            and of course my <ContentLink href='/skills/soft-skills/creativity'>creativity</ContentLink>.
        </p>
        <p>
            If you&apos;re viewing this page on a PC, the result of the workshop can be played below!
        </p>
        <br />
        <PongGame />
    </div>
);

export default PhaserWorkshop;

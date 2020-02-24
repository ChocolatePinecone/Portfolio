import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';

import PongGame from '../../../../components/PongGame'

const quoteText = 'Waka waka waka, waka waka. Waka waka waka waka, waka.';
const quoteAuthor = 'PAC-MAN';

const Phaser = () => {
    return (
        <div id='phaser'>
            <h1>Phaser</h1>
            <Quote text={quoteText} author={quoteAuthor} />
            <p>
                If you want to make a HTML game, Phaser is the way to go. Phaser is a fast, free open-source javascript game framework. It takes care of the more complicated stuff like game loops, input management, audio, physics, collision detection, animation, etc.
            </p>
            <p>
                I read about Phaser and first tried it out by making <strong>a Pong game, which you can play below if you're on a PC!</strong>
            </p>
            <p>
                Because Phaser is so easy to use, you can set up a game very quickly and still learn some game development lessons in the process. Because of these strengths I decided to make a <ContentLink href='/experience/projects/my-phaser-workshop'>workshop about game development</ContentLink> with it.
            </p>
            <p>
                Game development is a big hobby of mine! if you're interested, check out my self made game <ContentLink href='/experience/projects/rocket-shipment'>Rocket Shipment</ContentLink> and its <a target='_blank' rel="noopener noreferrer" href='https://store.steampowered.com/app/1237310/Rocket_Shipment/'>Steam page<OpenInNewIcon fontSize="small"/></a>.
            </p>
            <PongGame />
            <br />
        </div>
    );
};

export default Phaser;

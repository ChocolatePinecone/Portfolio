import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Quote from '../../../components/Quote';
import { ContentLink } from '../../../components/ContentNavigation';
import gif from '../../../assets/images/rocketshipment.gif';

const quoteText = 'It isn\'t about "games", for me, personally, and it never really was. It was about creating something- anything- far bigger than yourself.';
const quoteAuthor = 'Shigeru Miyamoto, Nintendo\'s most respected video game developer - GDC 2011';

const RocketShipment = () => (
    <div id='RocketShipment'>
        <h1>Rocket Shipment: My game made from scratch</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            Rocket Shipment is a fresh take on the old space classics like Lunar Lander, Crazy Gravity, Solar Jetman and Gravity Force to name a few.
            <br />
            It&apos;s a game I started making because I forgot the name of the shareware game &quot;Crazy Gravity&quot;.
            I really wanted to play it again, but could not find it anywhere. That&apos;s when I decided to just make my own version.
        </p>
        <p>
            Even though the general idea of the game might sound simple, it&apos;s a huge project.
            I&apos;m releasing this game on one of the biggest game marketplaces,&nbsp;
            <a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/1237310/Rocket_Shipment/'>Steam<OpenInNewIcon fontSize='small' /></a>.
            <br />
            The challenges do not only lie in programming the game, but also in marketing and translation to name a few.
        </p>
        <p>
            Programming this game involves designing UI systems, physics, collision detection, animation, levels, save/load systems and much more.
            It&apos;s a great challenge and a test of perseverance.
        </p>
        <p>
            I&apos;m creating this game from scratch using <ContentLink href='/skills/hard-skills/programming-languages/c++'>C++</ContentLink> and the SFML Library.
        </p>
        <p>
            Here&apos;s a small gif of Rocket Shipment to give you an idea of its aesthetics:
        </p>
        <img src={gif} alt='A Rocket Shipment animated GIF' />
    </div>
);

export default RocketShipment;

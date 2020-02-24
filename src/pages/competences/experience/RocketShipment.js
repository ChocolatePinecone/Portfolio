import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Quote from '../../../components/Quote';
import { ContentLink } from '../../../components/ContentNavigation';

const quoteText ='It isn\'t about "games", for me, personally, and it never really was. It was about creating something- anything- far bigger than yourself.';
const quoteAuthor = 'Shigeru Miyamoto - Nintendo\'s most respected video game developer - GDC 2011';

const RocketShipment = () => {
    return (
        <div id='RocketShipment'>
            <h1>Rocket Shipment: My game made from scratch</h1>
            <Quote text={quoteText} author={quoteAuthor} />
            <p>
                Rocket Shipment is a fresh take on the old space classics like Lunar Lander, Crazy Gravity, Solar Jetman and Gravity Force to name a few.
                <br />
                It's a game I started making because I forgot the name of the shareware game "Crazy Gravity". I really wanted to play it again, but could not find it anywhere. That's when I decided to just make my own version.
            </p>
            <p>
                Even though the general idea of the game might sound simple, it's a huge project. I'm releasing this game on one of the biggest game marketplaces, <a target='_blank' rel="noopener noreferrer" href='https://store.steampowered.com/app/1237310/Rocket_Shipment/'>Steam<OpenInNewIcon fontSize="small"/></a>.
                <br />
                The challenges do not only lie in programming the game, but also in marketing and translation to name a few.
            </p>
            <p>
                Programming this game involves designing UI systems, physics, collision detection, animation, levels, save/load systems and much more. It's a great challenge and tests your perseverance.
            </p>
            <p>
                I'm creating this game from scratch using <ContentLink href='/skills/hard-skills/programming-languages/c++'>C++</ContentLink> and the SFML Library.
            </p>
        </div>
    );
};

export default RocketShipment;

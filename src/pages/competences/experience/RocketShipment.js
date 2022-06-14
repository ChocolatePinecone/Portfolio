import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Quote from '../../../components/Quote';
import { ContentLink } from '../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../utils/LanguageSetting';

const quoteText = 'It isn\'t about "games", for me, personally, and it never really was. It was about creating something- anything- far bigger than yourself.';
const quoteAuthor = 'Shigeru Miyamoto, Nintendo\'s most respected video game developer - GDC 2011';

const RocketShipment = () => (
    <div id='RocketShipment'>
        <h1>
            {getContentByLanguage(
                'Rocket Shipment: Mijn game gemaakt zonder game engine',
                'Rocket Shipment: My game made without game engine'
            )}
        </h1>
        <Quote text={quoteText} author={quoteAuthor} />
        {
            getContentByLanguage(
                <p>
                    Rocket Shipment is een ode aan de oude spacegame klassiekers zoals Lunar Lander, Crazy Gravity, Solar Jetman en Gravity Force, om er maar een paar te noemen.
                    <br />
                    Het is een spel dat ik ben begonnen te maken omdat ik de naam vergeten was van de shareware game &quot;Crazy Gravity&quot;.
                    Ik wilde het graag weer spelen, maar kon het nergens vinden omdat de naam me ontschoten was. Ik besloot na een tijdje zelf maar mijn eigen versie te maken.
                </p>,
                <p>
                    Rocket Shipment is a fresh take on the old space classics like Lunar Lander, Crazy Gravity, Solar Jetman and Gravity Force to name a few.
                    <br />
                    It&apos;s a game I started making because I forgot the name of the shareware game &quot;Crazy Gravity&quot;.
                    I really wanted to play it again, but could not find it anywhere since I couldn&apos;t remember what it was called. That&apos;s when I decided to just make my own version.
                </p>
            )
        }
        {
            getContentByLanguage(
                <p>
                    Ook al klinkt het algemene idee van de game simpel, het was een enorm project.
                    Ik heb dit spel uitgebracht op een van de grootste game marktplaatsen,&nbsp;
                    <a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/1237310/Rocket_Shipment/'>Steam<OpenInNewIcon fontSize='small' /></a>.
                    <br />
                    De uitdagingen in dit project lagen niet alleen binnen de programmering, maar onder andere ook in het marketen en vertalen van de game.
                </p>,
                <p>
                    Even though the general idea of the game might sound simple, it&apos;s a huge project.
                    I released this game on one of the biggest game marketplaces,&nbsp;
                    <a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/1237310/Rocket_Shipment/'>Steam<OpenInNewIcon fontSize='small' /></a>.
                    <br />
                    The challenges of this project did not only lie in programming the game, but also partly in marketing and translation of the game.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Het programmeren van deze game omvatte het ontwikkelen van UI systemen, physics, collision detection, animation, levels, save/load systemen en veel meer. '
                + 'Het was een enorme uitdaging en test op je doorzettingsvermogen.',
                'Programming this game involves designing UI systems, physics, collision detection, animation, levels, save/load systems and much more. '
                + 'It\'s a great challenge and a test of perseverance.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Ik heb dit spel zonder bestaande game engine gemaakt met behulp van de taal <ContentLink to='c++'>C++</ContentLink> en
                    de SFML Library. Hier had ik voor gekozen omdat ik mezelf flink wilde uitdagen en wilde leren hoe alles inder de motorkap werkt.
                    Ik update de game hobbymatig van tijd tot tijd met nieuwe content en functionaliteit.
                </p>,
                <p>
                    I&apos;ve created this game without an existing game engine by using <ContentLink to='c++'>C++</ContentLink> and the SFML Library.
                    I chose to do this because I wanted to thoroughly challenge myself and learn how things are done behind the scenes.
                    I update the game from time to time with new content and functionality.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Hier is een trailer van Rocket Shipment om je een idee te geven van het spel:',
                'Here\'s a trailer of Rocket Shipment to give you an idea of the game:'
            )}
        </p>
        <div className='videoWrapper' style={{ position: 'relative', paddingBottom: 'calc(9/16 * 100%)' }}>
            <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/3ujySubWntQ'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                style={{ position: 'absolute', margin: '0 auto', display: 'block' }}
            />
        </div>
    </div>
);

export default RocketShipment;

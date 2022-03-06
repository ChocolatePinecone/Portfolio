import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'Waka waka waka, waka waka. Waka waka waka waka, waka.';
const quoteAuthor = 'PAC-MAN';

const Phaser = () => (
    <div id='phaser'>
        <h1>Phaser</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            {getContentByLanguage(
                'Als je een HTML spel wilt maken is Phaser de tool die je moet kiezen. Phaser is een snel, gratis, open-source Javascript game framework. '
                + 'Het verzorgt de algemene game onderdelen zoals game loops, input management, audio, physics, collision detection, animatie, etc.',
                'If you want to make a HTML game, Phaser is the way to go. Phaser is a fast, free, open-source Javascript game framework. '
                + 'It takes care of the more general game stuff like game loops, input management, audio, physics, collision detection, animation, etc.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Kort nadat ik over Phaser las heb ik het uitgeprobeerd met <strong>een Pong game</strong>.
                </p>,
                <p>
                    Soon after I read about Phaser, I tried it out by making <strong>a Pong game</strong>.
                </p>
            )
        }
        {
            getContentByLanguage(
                <p>
                    Omdat Phaser zo simpel te gebruiken is kun je erg snel een spel opzetten. Naar mijn mening ideaal om een paar algemene game development lessen te leren.
                    <br />
                    Hierom besloot ik een <ContentLink to='phaser-workshop'>workshop over game development</ContentLink> er mee te maken.
                </p>,
                <p>
                    Because Phaser is so easy to use, you can set up a game very quickly. In my opinion it&apos;s an ideal framework to learn some game development lessons with.
                    <br />
                    Because of this, I decided to make a <ContentLink to='phaser-workshop'>workshop about game development</ContentLink> with it.
                </p>
            )
        }
        {
            getContentByLanguage(
                <p>
                    Game development is een grote hobby van mij. Mocht je geïnteresseerd zijn, check dan eens mijn zelfgemaakte game&nbsp;
                    <ContentLink to='rocket-shipment'>Rocket Shipment</ContentLink> en zijn&nbsp;
                    <a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/1237310/Rocket_Shipment/'>Steam pagina<OpenInNewIcon fontSize='small' /></a>.
                </p>,
                <p>
                    Game development is a big hobby of mine. if you&apos;re interested, check out my self made game&nbsp;
                    <ContentLink to='rocket-shipment'>Rocket Shipment</ContentLink> and its&nbsp;
                    <a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/1237310/Rocket_Shipment/'>Steam page<OpenInNewIcon fontSize='small' /></a>.
                </p>
            )
        }
    </div>
);

export default Phaser;

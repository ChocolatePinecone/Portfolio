import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'Broadly speaking, short words are best, and the old words, when short, are best of all.';
const quoteAuthor = 'Sir Winston Churchill - Speech on receiving the London Times Literary Award November 2, 1949';

const Presenting = () => (
    <div id='presenting'>
        <h1>{getContentByLanguage('Presenteren', 'Presenting')}</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            {getContentByLanguage(
                'Goed presenteren komt deels vanuit ervaring en leren, maar ook deels van nature vanuit charisma en sociale vaardigheren. '
                + 'Naar mijn mening is het een uitdaging waar altijd nog wel ruimte is voor verbetering.',
                'A good presenting skill is partly built from experience and learning, but also partly needs to come naturally from charisma and social skills. '
                + 'In my opinion it\'s a challenge that always has room for improvement.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Tijdens mijn werk bij <ContentLink to='ing'>ING</ContentLink> ontdekte ik
                    dat ik presenteren een leuke uitdaging vond vanwege mijn verlangen kennis te delen, en dit op een manier te doen die iedereen begrijpt.
                    <br />
                    Ik heb sprint demo&apos;s gepresenteerd, workshops en andere groepsessies gegeven. Ik heb ook meerdere keren als scrum master opgetreden.
                </p>,
                <p>
                    During my time at <ContentLink to='ing'>ING</ContentLink> I discovered
                    that I find presenting a fun challenge because of my desire to share knowledge and to do this in a way everyone understands.
                    <br />
                    I&apos;ve presented sprint demos, and I&apos;ve given workshops and other informational sessions. I&apos;ve also acted as scrum master numerous of times.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Kortom, ik vind het geen probleem om binnen en buiten het team presentaties te geven.',
                'In short, I\'m happy to do any presenting needed inside and outside the team.'
            )}
        </p>
    </div>
);

export default Presenting;

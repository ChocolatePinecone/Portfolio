import React from 'react';
import { ContentLink } from '../../../../components/ContentNavigation';
import Quote from '../../../../components/Quote';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'What made JavaScript so powerful, with all the warts and rush job properties, '
    + 'was that it was directly connected to all the things in the browser that average web developers wanted to use.';
const quoteAuthor = 'Brendan Eich, Creator of Javascript - "Brendan Eich on Creating JavaScript in 10 Days, and What He’d Do Differently Today", Interview with David Cassel';

const Javascript = () => (
    <div id='javascript'>
        <h1>Javascript</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        {
            getContentByLanguage(
                <p>
                    Ik heb mijn meeste ervaring met Javascript opgedaan binnen mijn Front-end rol bij <ContentLink to='ing'>ING</ContentLink>,
                    Waar ik vooral werkte met ES5 en ES6 binnen het framework <ContentLink to='polymer'>Polymer</ContentLink>.
                    <br />
                    Ik heb ook Javascript gebruikt om <ContentLink to='deze-website'>deze website</ContentLink> te ontwikkelen natuurlijk.
                    <br />
                    <br />
                    Qua Front-end bij de <ContentLink to='politie'>Nationale Politie</ContentLink> heb
                    ik vooral in typescript geprogrammeerd, wat in essentie een uitgebreidere versie is van Javascript.
                </p>,
                <p>
                    I&apos;ve gained most of my Javascript knowledge from my Front-end role at <ContentLink to='ing'>ING</ContentLink>,
                    where I worked mostly with ES5 and ES6 within the framework <ContentLink to='polymer'>Polymer</ContentLink>.
                    <br />
                    I&apos;ve also used Javascript to create <ContentLink to='deze-website'>this website</ContentLink> of course.
                    <br />
                    <br />
                    For the Front-end at the <ContentLink to='politie'>Police Netherlands</ContentLink> I
                    mostly programmed in typescript, which is essentially a extended version of Javascript.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Javascript is dynamically en weakly typed, wat ervoor zorgt dat het makkelijk is om er dingen snel mee op te zetten, maar ingewikkeld kan zijn om te debuggen. '
                + 'Je kunt gemakkelijk foute code schrijven die wel draait, maar waarschijnlijk resulteert in iets onbedoelds.',
                'Javascript is a dynamically and weakly typed language which makes it easy to set things up quickly, but can also be difficult to debug. '
                + 'You can easily write wrong code which will still execute, but probably results in something unintended.'
            )}
        </p>
        <p>
            {getContentByLanguage(
                'Persoonlijk ben ik een grote fan van Javascript vanwege zijn weinige begrenzingen en vergevende natuur in vergelijking met de meeste andere populaire talen. '
                + 'Het schrijft snel en leest makkelijk.',
                'Personally I\'m a big fan of Javascript because of its few of constraints and forgiving nature in comparison with most other popular languages. '
                + 'It codes quickly and reads easily.'
            )}
        </p>
    </div>
);

export default Javascript;

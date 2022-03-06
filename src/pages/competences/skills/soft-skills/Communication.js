import React from 'react';
import Quote from '../../../../components/Quote';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'Electric communication will never be a substitute for the face of someone who with their soul encourages another person to be brave and true.';
const quoteAuthor = 'Charles Dickens - "The Wreck of the Golden Mary"';

const Communication = () => (
    <div id='communication'>
        <h1>{getContentByLanguage('Communicatie', 'Communication')}</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            {getContentByLanguage(
                'Als communicatie in een team faalt, zal het werk er hoogstwaarschijnlijk onder lijden.',
                'When communication fails in a team, the work is bound to suffer because of it.'
            )}
            <br />
            {getContentByLanguage(
                'Ook al ben ik wellicht een stil type, als het op communicatie aankomt ben ik geneigd '
                + 'direct mogelijke misverstanden uit de weg te ruimen en duidelijkheid te creëren.',
                'Even though I might be a pretty quiet person, when it comes to communication '
                + 'I tend to directly address any possible misunderstandings and create clarity when communicating.'
            )}
        </p>
        <p>
            {getContentByLanguage(
                'Mijn energie raakt snel op wanneer teams eindeloos discussiëren, '
                + 'dus probeer ik in die gevallen onduidelijkheden direct helder te krijgen en tot consensus te komen.',
                'My energy drains quickly when teams are discussing endlessly, '
                + 'so in these cases I try to immediately clear up unclarities and reach a consensus.'
            )}
            <br />
            {getContentByLanguage(
                'Als ik relevante informatie verkrijg probeer ik deze meestal te verspreiden in het team via mail of het organiseren van een groepsessie. '
                + 'Ik ben verder groot voorstander van pair programming om op één lijn te komen wat oplossingen en benaderingen van problemen betreft.',
                'I tend to share any relevant information for the team in bite sized chunks through mail or through a session. '
                + 'I\'m also a big supporter of pair programming to get on the same page regarding solutions and approach.'
            )}
        </p>
        <p>
            {getContentByLanguage(
                'Uiteindelijk geloof ik dat goede communicatie niet per se betekent veel communicatie, maar eerder gerichte, kwalitatieve communicatie.',
                'All in all I believe great communication is not necessarily communicating much, but communicating targeted, and formulating with care.'
            )}
        </p>
    </div>
);

export default Communication;

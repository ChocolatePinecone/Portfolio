import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Quote from '../../../components/Quote';
import { ContentLink } from '../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../utils/LanguageSetting';

const quoteText = 'Where does Spider-man keep his pictures? \n On his web-site.';
const quoteAuthor = getContentByLanguage('Een grappig persoon op internet', 'Some funny guy on the internet');

const ThisWebsite = () => (
    <div id='ThisWebsite'>
        <h1>
            {getContentByLanguage(
                'Deze Website',
                'This Website'
            )}
        </h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            {getContentByLanguage(
                'Je vaardigheden laten zien is veel krachtiger dan iemand ervan proberen te overtuigen. '
                + 'Deze website heeft exact dat als doel, om te laten zien wat ik kan.',
                'Showing your skill is much better than trying to convince someone of your skill. '
                + 'This website is meant to do just that, to show my skill.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Voordat ik deze website begon te maken had ik helemaal nog geen ervaring met <ContentLink to='react'>React</ContentLink>.
                    Op dit moment is het een van de meest populaire frameworks/libraries, dus wilde ik het graag uitproberen.
                    <br />
                    Daarom is deze website compleet opgezet in React.
                </p>,
                <p>
                    Before making this website I had no experience with <ContentLink to='react'>React</ContentLink> at all.
                    Currently it&apos;s one of the most popular frameworks/libraries, so I really wanted to give it a try.
                    <br />
                    That&apos;s why this website has been completely made in React.
                </p>
            )
        }
        {
            getContentByLanguage(
                <p>
                    Als je nieuwsgierig bent naar de source code, dan kun je
                    deze <a target='_blank' rel='noopener noreferrer' href='https://github.com/ChocolatePinecone/Portfolio'>hier<OpenInNewIcon fontSize='small' /></a> vinden.
                </p>,
                <p>
                    If you&apos;re curious to see the source code, it&apos;s
                    available <a target='_blank' rel='noopener noreferrer' href='https://github.com/ChocolatePinecone/Portfolio'>here<OpenInNewIcon fontSize='small' /></a>.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Een klein overzicht van wat ik voor de website heb gebruikt:',
                'A small summary of what was used for building the website:'
            )}
            <table>
                <tbody>
                    <tr>
                        <td>Framework:</td>
                        <td><ContentLink to='react'>React</ContentLink></td>
                    </tr>
                    <tr>
                        <td>Linting:</td>
                        <td><ContentLink to='eslint'>ESLint</ContentLink></td>
                    </tr>
                    <tr>
                        <td>Package manager:</td>
                        <td>Node/NPM</td>
                    </tr>
                    <tr>
                        <td>{getContentByLanguage('Programmeertaal', 'Language')}:</td>
                        <td>Javascript ES6</td>
                    </tr>
                    <tr>
                        <td>Hosting:</td>
                        <td><a target='_blank' rel='noopener noreferrer' href='https://firebase.google.com/'>Firebase<OpenInNewIcon fontSize='small' /></a></td>
                    </tr>
                    <tr>
                        <td>Source control:</td>
                        <td>Git (<a target='_blank' rel='noopener noreferrer' href='https://github.com/ChocolatePinecone/Portfolio'>Github<OpenInNewIcon fontSize='small' /></a>)</td>
                    </tr>
                    <tr>
                        <td>Pipeline (deployment):</td>
                        <td><a target='_blank' rel='noopener noreferrer' href='https://github.com/ChocolatePinecone/Portfolio/actions'>Github Actions<OpenInNewIcon fontSize='small' /></a></td>
                    </tr>
                    <tr>
                        <td>UI {getContentByLanguage('Elementen', 'Elements')}:</td>
                        <td><a target='_blank' rel='noopener noreferrer' href='https://material-ui.com/'>Material UI<OpenInNewIcon fontSize='small' /></a></td>
                    </tr>
                </tbody>
            </table>
        </p>
    </div>
);

export default ThisWebsite;

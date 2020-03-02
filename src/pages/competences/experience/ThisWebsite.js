import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Quote from '../../../components/Quote';
import { ContentLink } from '../../../components/ContentNavigation';

const quoteText = 'Where does Spider-man keep his pictures? \n On his web-site.';
const quoteAuthor = 'Some funny guy on the internet';

const ThisWebsite = () => (
    <div id='ThisWebsite'>
        <h1>This Website</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            Showing your skill is much better than trying to convince someone of your skill. This website is meant to do just that, to show my skill and that I&apos;m worth hiring.
        </p>
        <p>
            Before making this website I had no experience with <ContentLink href='/skills/frameworks/react'>React</ContentLink> at all.
            Currently it&apos;s one of the most popular frameworks/libraries, so I really wanted to give it a try.
            <br />
            I&apos;ve set this whole website up while in between assignments and simultaneously working on other in-house projects at Ordina.
        </p>
        <p>
            If you&apos;re curious to see the source code, it&apos;s
            available <a target='_blank' rel='noopener noreferrer' href='https://github.com/ChocolatePinecone/Portfolio'>here<OpenInNewIcon fontSize='small' /></a>
        </p>
        <p>
            A small summary of what was used for building the website:
            <table>
                <tbody>
                    <tr>
                        <td>Framework:</td>
                        <td><ContentLink href='/skills/frameworks/react'>React</ContentLink></td>
                    </tr>
                    <tr>
                        <td>Linting:</td>
                        <td><ContentLink href='/skills/hard-skills/tools/eslint'>ESLint</ContentLink></td>
                    </tr>
                    <tr>
                        <td>Package manager:</td>
                        <td>Node/NPM</td>
                    </tr>
                    <tr>
                        <td>Language:</td>
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
                        <td>UI Elements:</td>
                        <td><a target='_blank' rel='noopener noreferrer' href='https://material-ui.com/'>Material UI<OpenInNewIcon fontSize='small' /></a></td>
                    </tr>
                </tbody>
            </table>
        </p>
    </div>
);

export default ThisWebsite;

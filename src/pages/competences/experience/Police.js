import React from 'react';
import { ContentLink } from '../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../utils/LanguageSetting';

const Police = () => (
    <div id='Police'>
        <h1>
            {getContentByLanguage(
                'Werken voor de Nationale Politie (2020 - nu)',

                'Working for the Police Netherlands (2020 - now)'
            )}
        </h1>
        {
            getContentByLanguage(
                <p>
                    Tijdens het werken bij de Nationale Politie ontwikkelde ik mee aan een registratie applicatie voor agenten op straat.
                    <br />
                    De applicatie maakt het veel simpeler en sneller voor agenten om hun registraties te updaten met zaken of overtredingen waar ze bij betrokken waren.
                    Het draait op een web en mobiele omgeving en biedt een overzichtelijk beeld van alle registratie processen die een agent moet doorlopen.
                    Het slaat ook regelmatig de voortgang op om te voorkomen dat agenten data kwijtraken aangezien ze vaak hectische dagen hebben.
                </p>,
                <p>
                    While working at the Police Netherlands I took part in developing a registration application for police officers.
                    <br />
                    The application makes it much easier and faster for officers to update their registration with cases or offences they were involved in.
                    It runs on desktop and mobile and offers a clean and clear overview of all kinds of registration processes for officers to fill in.
                    It also regularly saves progress to avoid losing any data as police officers tend to have very hectic days.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Tijdens het werken voor de Politie ben ik onderdeel geweest van een multi-gediciplineerd Agile team waar we de registratie applicatie '
                + 'samen ontwikkelde met een aantal andere teams. '
                + 'We hadden ook het voorrecht samen te werken met daadwerkelijke eindgebruikers (straatagenten) om er zeker van te zijn dat we exact bouwden wat ze nodig hadden.',

                ' While working for the Police, I\'ve been part of a multi-disciplined Agile team where we developed the registration application alongside many other teams. '
                + 'We also had the privilege to work with actual end users (real police officers) to be sure we were building exactly what they needed.'
            )}
        </p>
        <br />
        <h2>
            {getContentByLanguage(
                'Wat hield mijn werk in?',

                'What was my job?'
            )}
        </h2>
        {
            getContentByLanguage(
                <p>
                    Als Fullstack developer werkte ik beide aan de Front-end (Angular) en Back-end (<ContentLink to='java'>Java</ContentLink>
                    &nbsp;en Oracle Service Bus).
                </p>,
                <p>
                    As Fullstack developer I worked both on the Front-end (Angular) and Back-end (<ContentLink to='java'>Java</ContentLink>
                    &nbsp;and Oracle Service Bus).
                </p>
            )
        }
        {
            getContentByLanguage(
                <p>
                    Ik heb een rol mogen spelen in het ontwikkelen van de fuctionaliteit om data continu op te slaan, en heb me verder &quot;T-shaped&quot; ontwikkeld door opdrachten
                    buiten mijn comfort zone op te pakken.

                    Ik heb veel met het RDF datamodel gewerkt. Dit gebeurde voornamelijk via een politie-eigen programmeertaal die actief ontwikkeld werd door het IT platform team.
                    Ook heb ik zo nu en dan via xquery scripts met het datamodel gewerkt.
                    Aangezien ik het leuk vind te <ContentLink to='leren'>leren</ContentLink>, ben ik behoorlijk vaardig geworden in het gebruik van de politie-eigen taal
                    en heb ik er ook enigszins aan bijgedragen.
                </p>,
                <p>
                    I played a part in designing and implementing the functionality for saving data continuously, and have improved my &quot;T-shape&quot; by
                    taking on assignments outside of my comfort zone.

                    I have worked a lot with the RDF data model. Mostly through a custom programming language actively developed by the IT platform team.
                    I also worked with the model through xquery scripts every now and then.
                    As I love to <ContentLink to='leren'>learn</ContentLink>, I became proficient in using the custom language and also contributed a little to it.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Het Front-end werk besloeg vooral het werken met deze politie-eigen taal bovenop een basis van Angular 12. '
                + 'Unittests werden gemaakt met Mocha/Chai, component tests met Jasmine en integratie testen met Cypress / TestCafe.',

                'The Front-end work mostly consisted of working with this custom language on top of a base of Angular 12. '
                + 'Unit tests were made with Mocha/Chai, component tests with Jasmine and integration tests with Cypress / TestCafe.'
            )}
        </p>
        <p>
            {getContentByLanguage(
                'Het Back-end werk besloeg vooral het werken met Java EE waarbij tests werden geschreven in JUnit en mocks werden verzorgd met Mockito. '
                + 'Integratietests werden geschreven in groovy met Spock. '
                + 'Een deel van het Back-end werk bestond ook uit xquery code, gebruikt door de Oracle Service Bus (OSB), welke ik ook aanpaste van tijd tot tijd.',

                'The Back-end work mostly consisted of working with Java EE with tests written with JUnit, utilizing Mockito for mocks. '
                + 'Integration tests were written in groovy with Spock. '
                + 'Part of the Back-end also consists of xquery code used by the Oracle Service Bus (OSB) which I also adjusted from time to time.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Voor onze Agile processen, documentatie en code gebruikten we Jira, Confluence en Git (met BitBucket).
                    <br />
                    Binnen het team heb ik regelmatig kennissessies georganiseerd om andere leden te helpen of juniors op te leiden.
                    Ik heb ook regelmatig confluence pagina&apos;s aangemaakt en onderhouden met handleidingen voor een aantal ingewikkelde technische processen
                    zoals data migraties of specifieke implementaties.
                </p>,
                <p>
                    For our Agile processes, documentation and code we have made use of Jira, Confluence and Git (with Bitbucket).
                    <br />
                    Within the team I&apos;ve regularly hosted knowledge sessions to keep other up to date and educate junior team members.
                    I also regularly created and maintained confluence pages with guides for a range of technical processes like data migrations or specific implementations.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Andere benoemenswaardige dingen die ik binnen dit project heb gedaan of aan heb gewerkt, zijn:',

                'Other notable things I have done or worked on in this project are:'
            )}
        </p>
        <ul>
            <li>
                {getContentByLanguage(
                    'Deelnemen aan een select gegevensteam dat als schakel tussen teams en het datamodel dient',

                    'Being part of a select datateam that functions as link between teams and the datamodel'
                )}
            </li>
            <li>
                {getContentByLanguage(
                    'Ontwikkelen en implementeren van Jenkinsfiles voor nieuwe Jenkins jobs',

                    'Designing and implementing Jenkinsfiles for new Jenkins jobs'
                )}
            </li>
            <li>
                {getContentByLanguage(
                    'Schrijven van migratiescript voor model- of data-aanpassingen',

                    'Writing migration scripts for model or data changes'
                )}
            </li>
            <li>
                {getContentByLanguage(
                    'Als onderdeel van een selecte groep Senior reviewers pull requests voor de mono-repo beoordelen en mergen',

                    'Reviewing pull requests for the mono-repo as part of a select group of Senior Reviewers'
                )}
            </li>
            <li>
                {getContentByLanguage(
                    'Kernfunctionaliteit van de politie-eigen taal uitbreiden',

                    'Extending core functionality of the custom programming language'
                )}
            </li>
            <li>
                {getContentByLanguage(
                    'Uitbreiden van de aparte generieke UI componenten library die gebruikt wordt binnen en buiten de registratie applicatie',

                    'Extending the seperate generic UI components library used inside and outside the registration application'
                )}
            </li>
        </ul>
        <br />
        <h2>
            {getContentByLanguage(
                'Wat was het resultaat?',

                'What was the result?'
            )}
        </h2>
        <p>
            {getContentByLanguage(
                'Ons team heeft veel belangrijke onderdelen van de applicatie ontwikkeld waarbij ik een grote rol heb gespeeld. '
                + 'Ik vond het fijn deel te nemen aan meerdere sleuteldiscussies en denkgroepen en ben blij voorop te hebben mogen lopen bij enkele essentiele functionaliteiten van de applicatie. '
                + 'Ik ben veel uitdagingen aangegaan buiten mijn comfort zone waardoor ik ook een hoop bijgeleerd heb.',

                'Our team has developed many important parts of the application in which I have also had a big part. '
                + 'I loved partaking in key discussions and focus groups and am happy to have pioneered in some essential functionalities of the application. '
                + 'I\'ve taken on many challenges outside of my comfort zone, learning a lot in the process.'
            )}
        </p>
    </div>
);

export default Police;

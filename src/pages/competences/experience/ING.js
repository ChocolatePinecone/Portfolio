import React from 'react';
import { ContentLink } from '../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../utils/LanguageSetting';

const ING = () => (
    <div id='ING'>
        <h1>
            {getContentByLanguage(
                'Werken voor ING (2017 - 2019)',

                'Working for ING (2017 - 2019)'
            )}
        </h1>
        <p>
            {getContentByLanguage(
                'Terwijl ik bij ING werkte, waren ze het softwareplatform van Nederland en België aan het combineren.\n'
                + 'Daarnaast waren ze bezig hun website van de legacy technologie (AngularJS) te updaten naar een nieuwere (Polymer 2) welke ook gebruikt werd in de mobiele app.',

                'While I worked for ING, they were combining the software platform of Belgium and the Netherlands.\n'
                + 'Next to this they were updating their website from legacy technology (AngularJS) to a newer one (Polymer 2) which was also used in the mobile app.'
            )}

        </p>
        <p>
            {getContentByLanguage(
                'Binnen ING heb ik op een Agile manier gewerkt in een DevOps team waar ruimte was om je T-shaped te ontwikkelen.',

                'Within ING, I\'ve worked in a DevOps team where we worked in an Agile manner with room for personal T-shaped development.'
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
                    Als Front-end developer werkte ik vooral aan de <ContentLink to='polymer'>Polymer</ContentLink> componenten.
                    De componenten die we bouwden en onderhielden moesten we ook integreren op meerdere plekken binnen de website en de mobiele app.
                    Hierbij maakten we gebruik van meerdere met git gemanagede repo&apos;s en werkten we nauw samen met andere teams.
                </p>,
                <p>
                    As Front-end developer I mainly worked on the <ContentLink to='polymer'>Polymer</ContentLink> components.
                    We built and maintained these components and also integrated them into multiple places on the website and the mobile app.
                    To do this, we made use of multiple git managed repos and we worked thorougly with other teams.
                </p>
            )
        }
        {
            getContentByLanguage(
                <p>
                    Ik heb binnen ING zo nu en dan een paar kleine aanpassingen gedaan in Back-end API configuraties.
                    Deze API&apos;s waren geprogrammeerd in <ContentLink to='java'>Java</ContentLink>, opgezet met Maven en gerund met Tomcat.<br />
                </p>,
                <p>
                    Every now and then I made some small needed changes in Back-end API configurations.
                    These APIs were programmed in <ContentLink to='java'>Java</ContentLink>, set up with Maven and ran with Tomcat.<br />
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Mijn team gebruikte Service-Now (een soortgelijk programma als Jira), Gitlab en Jenkins. We werkten als DevOps team om onze applicaties te ontwikkelen en beheren.\n'
                + 'Mijn team werkte met een afwisselende scrum master rol. Dit betekent dat ik ook regelmatig als scrum master optrad.',

                'My team frequently used Service-Now (similar to Jira), Git and Jenkins. We worked as DevOps team to develop and maintain our applications.\n'
                + 'My team worked with a changing scrum master role. This means I\'ve regularly acted as scrum master as well.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Naast mijn normale werk viel het me op dat er erg veel onduidelijkheid was over het nodige OCD werk (Operational Control Dashboard)
                    Dit werk omvatte het leveren van de nodige bewijzen voor security eisen over onze applicaties.
                    <br />
                    Omdat hier kennis miste, nam ik het initiatief om er meer over te leren zodat ik het team hierin kon aansturen.
                    Uiteindelijk werd ik hierdoor het OCD contactpunt binnen ons team en heb ik een aantal sessies georganiseerd om het team te helpen.
                </p>,
                <p>
                    Next to my normal work, I noticed there was unclarity about the OCD work (Operational Control Dashboard).
                    This work involved the necessary evidence needed for security requirements of our applications.
                    <br />
                    Because of this lack of knowledge, I&apos;ve taken the initiative of learning more about it so I could give the team some guidance.
                    Eventually because of this I became the point of contact for OCD within our team and I&apos;ve organised some sessions to guide and work with them.
                </p>
            )
        }
        <br />
        <h2>
            {getContentByLanguage(
                'Wat was het resultaat?',
                'What was the result?'
            )}
        </h2>
        <p>
            {getContentByLanguage(
                'Ik heb succesvol meerdere componenten voor ING ontwikkeld en onderhouden. Ik heb me het Agile werken eigen gemaakt en heb me T-shaped kunnen inzetten in teamverband.\n'
                + 'Naast de Front-end ervaring heb ik ook enige Back-end ervaring opgedaan, heb ik te maken gehad met beide het web en mobiele platform en '
                + 'heb ik me verdiept in enkele security gerelateerde zaken.',

                'I\'ve successfully created and maintained many components for ING. I\'ve made the Agile way of working my own, and have been able to work in a team in a T-shaped manner.\n'
                + 'Besides the Front-end experience, I also gained some Back-end experience, worked with both web and mobile platforms and researched some security related subjects.'
            )}
        </p>
    </div>
);

export default ING;

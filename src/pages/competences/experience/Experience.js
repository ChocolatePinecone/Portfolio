import React from 'react';
import { ContentLink } from '../../../components/ContentNavigation';
import Quote from '../../../components/Quote';
import { getContentByLanguage } from '../../../utils/LanguageSetting';

const quoteText = 'Pure logical thinking cannot yield us any knowledge of the empirical world; all knowledge of reality starts from experience and ends in it.';
const quoteAuthor = 'Albert Einstein - Einstein: The Formative Years, 1879-1909';

const Experience = () => (
    <div id='experience'>
        <h1>{getContentByLanguage('Ervaring', 'Experience')}</h1>
        <Quote text={quoteText} author={quoteAuthor} />

        {
            getContentByLanguage(
                <p>
                    Ik heb vooral bij grote bedrijven mogen werken zoals de <ContentLink to='ing'>ING</ContentLink> en de&nbsp;
                    <ContentLink to='politie'>Nationale Politie</ContentLink>.
                    Naast deze grote projecten heb ik ook aan persoonlijke projecten gewerkt waarvan je de meesten zal vinden op deze website.
                </p>,
                <p>
                    I have had experience working for big organisations like <ContentLink to='ing'>ING</ContentLink> and the&nbsp;
                    <ContentLink to='politie'>Police Netherlands</ContentLink>.
                    Alongside these bigger projects I also worked on personal projects of which I have described most on this website.
                </p>
            )
        }

        <p>
            {getContentByLanguage('Een aantal persoonlijke projecten van mij zijn:', 'Some interesting personal projects of mine are:')}
        </p>
        <ul>
            <li>
                <ContentLink to='deze-website'>{getContentByLanguage(
                    'Deze website',

                    'This website'
                )}
                </ContentLink>
            </li>
            <li>
                <ContentLink to='jelmerqa'>{
                    getContentByLanguage(
                        'Een fullstack vraag/antwoord applicatie',

                        'A fullstack question/answer application'
                    )
                }
                </ContentLink>
            </li>
            <li>
                <ContentLink to='rocket-shipment'>{
                    getContentByLanguage(
                        'Mijn pc game die ik enkel met C++ en SFML heb geschreven',

                        'My pc game made from scratch'
                    )
                }
                </ContentLink>
            </li>
            <li>
                <ContentLink to='phaser-workshop'>{
                    getContentByLanguage(
                        'Mijn workshop over het maken van Pong met het JS framework "Phaser"',

                        'My workshop for making Pong with the JS framework "Phaser"'
                    )
                }
                </ContentLink>
            </li>
        </ul>
    </div>
);

export default Experience;

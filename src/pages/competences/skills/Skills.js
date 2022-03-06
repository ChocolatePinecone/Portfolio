import React from 'react';
import { ContentLink } from '../../../components/ContentNavigation';
import Quote from '../../../components/Quote';
import { getContentByLanguage } from '../../../utils/LanguageSetting';

const quoteText = 'Talent you have naturally. Skill is only developed by hours and hours and hours of beating on your craft.';
const quoteAuthor = 'Will Smith - Hancock Interview, NBC Today Show';

const Skills = () => (
    <div id='skills'>
        <h1>{getContentByLanguage('Vaardigheden', 'Skills')}</h1>
        <Quote text={quoteText} author={quoteAuthor} />

        <p>
            {getContentByLanguage(
                'Ik probeer constant mijn vaardigheden te verbeteren of nieuwe vaardigheden te leren.',
                'I\'m constantly trying to improve or learn new skills.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Ik heb met meerdere programmeertalen gewerkt, zoals&nbsp;
                    <ContentLink to='javascript'>Javascript</ContentLink>,&nbsp;
                    <ContentLink to='java'>Java</ContentLink> and&nbsp;
                    <ContentLink to='c++'>C++</ContentLink>.
                    <br />
                    Ik heb ook meerdere frameworks en tools gebruikt, welke je allemaal kunt vinden via het navigatiemenu.
                </p>,
                <p>
                    I&apos;ve worked with multiple languages such as&nbsp;
                    <ContentLink to='javascript'>Javascript</ContentLink>,&nbsp;
                    <ContentLink to='java'>Java</ContentLink> and&nbsp;
                    <ContentLink to='c++'>C++</ContentLink>.
                    <br />
                    I&apos;ve also used a variety of frameworks and tools, which you can all find in the navigation menu.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Voel je vrij door mijn hard en soft skills te bladeren.',
                'Feel free to browse through my hard and soft skills.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Mocht je willen weten hoe ik deze vaardigheden heb verkregen en toegepast, kijk dan eens naar de pagina&apos;s over <ContentLink to='ervaring'>ervaring</ContentLink>.
                </p>,
                <p>
                    In case you want to know more about how I have applied and gained these skills, please visit the <ContentLink to='ervaring'>experience pages</ContentLink>.
                </p>
            )
        }
    </div>
);

export default Skills;

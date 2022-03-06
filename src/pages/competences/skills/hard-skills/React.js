import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'I learned that the style of programming that I gravitated towards was neither weird, nor new and '
    + 'actually closer to some of the oldest philosophies of programming languages. '
    + 'I continued to explore framework-izing these ideas, and I had implemented several iterations of what eventually became React.';
const quoteAuthor = 'Jordan Walke, Creator of React - Transcript from Thursday January 26th, 2017 on reactiflux.com';

const REACT = () => (
    <div id='react'>
        <h1>React</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        {
            getContentByLanguage(
                <p>
                    React is een erg populaire library/framework op het moment.
                    Volgens <a target='_blank' rel='noopener noreferrer' href='https://hotframeworks.com/'>https://hotframeworks.com/</a>&nbsp;
                    scoort het het hoogste van alle bekende frameworks op Github en Stack Overflow sinds Maart 2019.
                    <br />
                    Dit was een van de redenen waarom ik hem zelf ook uit wilde proberen.
                    Voor mijn eerste project heb ik <ContentLink to='deze-website'>deze website</ContentLink> gebouwd die je nu aan het bekijken bent.
                </p>,
                <p>
                    React is a very popular library/framework at the moment.
                    According to <a target='_blank' rel='noopener noreferrer' href='https://hotframeworks.com/'>https://hotframeworks.com/</a>&nbsp;
                    it scores the highest on Github and Stack Overflow since March 2019.
                    <br />
                    This was one of the reasons why I wanted to try it out myself.
                    As first project I actually built <ContentLink to='deze-website'>this very website</ContentLink> you are browsing right now.
                </p>
            )
        }
        {
            getContentByLanguage(
                <p>
                    Persoonlijk vind ik React erg prettig om mee te werken vanwege zijn flexibiliteit.
                    Het gedraagt zich niet echt als een framework, maar meer als een library die je zo minimaal of uitgebreid kan gebruiken als je wilt.
                    <br />
                    De JSX syntax gebruikt bij React is heel gemakkelijk in gebruik en ondersteunt volledig de krachten van native&nbsp;
                    <ContentLink to='javascript'>javascript</ContentLink>.
                </p>,
                <p>
                    I personally really like React because of its flexibility.
                    It doesn&apos;t really act as a framework, but more as a library allowing you to use it as lightly or heavily as you want.
                    <br />
                    The JSX syntax introduced by React is a breeze to use and fully incorporates the powers of native&nbsp;
                    <ContentLink to='javascript'>javascript</ContentLink>.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Het is een leuk framework waar ik prima mee verder zou kunnen werken.',
                'It\'s a fun library/framework that I wouldn\'t mind doing more with.'
            )}
        </p>
    </div>
);

export default REACT;

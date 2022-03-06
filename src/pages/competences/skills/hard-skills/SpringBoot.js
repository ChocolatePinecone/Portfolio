import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'There\'s only one trick in software, and that is using a piece of software that\'s already been written.';
const quoteAuthor = 'Bill Gates - Interview with Electronics magazine (1989)';

const SpringBoot = () => (
    <div id='springboot'>
        <h1>Spring Boot</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            {getContentByLanguage(
                'Helaas heb ik nog niet de mogelijkheid gehad om Spring in een bedrijfsomgeving te gebruiken. '
                + 'Het is nog steeds een veel gebruikt framework en is iets dat ik erg graag wilde uitproberen, '
                + 'dus koos ik er voor het te gebruiken in een persoonlijk project naast een aantal andere frameworks/tools op mijn lijst.',
                'Unfortunately I\'ve not had the opportunity to use Spring in a company environment. '
                + 'It\'s still a very widely used framework and is something I really wanted to try out, '
                + 'so I planned to utilize it in a personal project alongside a couple of other frameworks/tools on my list.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Het project heet JelmerQA en kun je <ContentLink to='jelmerqa'>hier</ContentLink> vinden.
                </p>,
                <p>
                    The project is called JelmerQA and can be found <ContentLink to='jelmerqa'>here</ContentLink>.
                </p>
            )
        }
    </div>
);

export default SpringBoot;
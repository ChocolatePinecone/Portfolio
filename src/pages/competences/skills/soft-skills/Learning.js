import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'The beautiful thing about learning is nobody can take it away from you.';
const quoteAuthor = 'B.B. King - The Charlotte Observer (5 October 1997)';

const Learning = () => (
    <div id='learning'>
        <h1>{getContentByLanguage('Leren', 'Learning')}</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            {getContentByLanguage(
                'Ik houd er van om te leren en om dat grondig te doen. Ik zet me daarom graag als fullstack developer in om op die manier mijn kennis over de complete chain te vergroten.',
                'I love to learn, and to do it in depth. This is why I prefer a fullstack position to keep increasing my knowledge about the full chain.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Mijn verlangen om te leren is terug te zien in mijn hobby&apos;s die meestal te maken hebben met het leren of verbeteren van een vaardigheid.
                    Ik vind het bijvoorbeeld heerlijk om <ContentLink to='rocket-shipment'>games te ontwikkelen</ContentLink> of om boeken te lezen over hard/soft skills.
                </p>,
                <p>
                    My desire to learn is reflected in my hobbies which almost always involve learning or mastering a skill.
                    For example, I love to <ContentLink to='rocket-shipment'>develop games</ContentLink> or read books about hard or soft skills.
                </p>
            )
        }
        {
            getContentByLanguage(
                <p>
                    Ik merk vaak gebieden op waar het team minder goed in presteert, waar ik me dan vervolgens in verdiep om zo het gat te vullen.
                    Ik vind het dan ook leuk om vooronderzoek te doen over toekomstig werk voor het team.
                </p>,
                <p>
                    I&apos;m good in finding areas where my team is performing less strong, just so I can develop myself in a way to fill this gap.
                    I also enjoy investigating future work for our team.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Zo lang er iets te leren valt voel ik me over het algemeen snel thuis in een team.',
                'As long as there is something to learn, I usually feel easily at home in a team.'
            )}
        </p>
    </div>
);

export default Learning;

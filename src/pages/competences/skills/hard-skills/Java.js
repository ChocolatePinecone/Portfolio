import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'An API that isn\'t comprehensible, isn\'t usable.';
const quoteAuthor = 'James Gosling, Creator of Java - "A Conversation with James Gosling", Interview with Bill Venners';

const Java = () => (
    <div id='java'>
        <h1>Java</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            {getContentByLanguage(
                'Mijn eerste ervaring met Java had ik tijdens mijn opleiding Elektrotechniek. Toen was het nog Java SE 6.',
                'My first encounter with Java was during my eduction electrical engineering. Back then it was Java SE 6.'
            )}
            <br />
            {getContentByLanguage(
                'Ik schreef een paar PC-applicaties voor schoolopdrachten en maakte later een Pac-Man spel met 5 speelbare levels.',
                'I wrote a couple of PC-applications for the assignments and later made a Pac-Man game with 5 playable levels.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Kort na mijn start bij Ordina (Augustus 2017) slaagde ik voor mijn Java SE 9 OCA examen met een score van 87%.
                    <br />
                    Naast mijn Front-end werkzaamheden bij <ContentLink to='ing'>ING</ContentLink> heb
                    ik ook aanpassingen gedaan in Back-end REST API&apos;s welke waren geschreven in Java.
                    <br />
                    Ook bij de <ContentLink to='politie'>Nationale Politie</ContentLink> heb ik met Java gewerkt.
                    Hier waren de Java modules niet als REST APIs opgezet, maar meer in de vorm van &quot;workers&quot; die werden geactiveerd via JMS messages of events vanuit de database.
                </p>,
                <p>
                    Shortly after I started at Ordina (August 2017) I passed my Java SE 8 OCA exam with a score of 87%.
                    <br />
                    Next to my Front-end duties at <ContentLink to='ing'>ING</ContentLink>,
                    I&apos;ve also done changes in the team APIs which were written in Java.
                    <br />
                    I also worked with Java at the <ContentLink to='politie'>Police Netherlands</ContentLink>.
                    There, the Java modules weren&apos;t set up as REST APIs, but more in the shape of &quot;workers&quot; that were triggered through JMS messages or database events.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Java heeft een speciaal plekje in mijn hart omdat het de eerste OO programmeertaal is die ik leerde. '
                    + 'Het is ook de eerste taal waarin ik een programma heb gemaakt dat een werkelijk scherm had waarin je UI kon plaatsen, in tegenstelling tot een terminal.',
                'Java has a little special place in my heart because it is the first OOP language I learned. '
                    + 'It\'s also the first language I coded a program in that actually had a window in which you could add UI elements instead of a terminal.'
            )}
        </p>
    </div>
);

export default Java;

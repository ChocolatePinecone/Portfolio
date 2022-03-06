import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off.';
const quoteAuthor = 'Bjarne Stroustrup, Creator of C++ - Bjarne Stroustrup\'s FAQ: Did you really say that?';

const Cplusplus = () => (
    <div id='C++'>
        <h1>C++</h1>
        <Quote text={quoteText} author={quoteAuthor} />

        <p>
            {getContentByLanguage(
                'Ik kwam eerst in contact met C++ tijdens mijn opleiding Elektrotechniek. '
                + 'Toen gebruikte ik het alleen voor een paar kleine console projecten. '
                + 'Na mijn opleiding heb ik de taal niet meer gebruikt tot aan 2018.',
                'I first touched base with C++ during my education of Electrical Engineering. '
                + 'Back then I only used it for some small console window projects. '
                + 'After my education I did not use the language up until 2018.'
            )}
        </p>
        <p>
            {getContentByLanguage(
                'Voor de hobby heb ik een paar videogames gemaakt, en in Juli 2018 wilde ik er eens een vanuit compleet niks opzetten, zonder bestaande game engine. '
                + 'Ik koos ervoor dit te doen met behulp van SFML en C++, wat betekende dat ik mijn kennis over de taal wat op moest schroeven. '
                + 'Ik spendeerde 1 of 2 weken aan het bijleren van C++ met behulp van Pluralsight en pushde mijn eerste regels code naar de repo rond 1 Augustus 2018.',
                'I\'ve hobbied with making video games and in July 2018 I really wanted to make a video game from scratch, without using a pre-made game engine. '
                + 'I chose to do this with SFML and C++, which meant I needed to brush up on my C++ knowledge. '
                + 'I spent 1 or 2 weeks learning C++ with help of Pluralsight and pushed my first lines of code to the repo around August 1st 2018.'
            )}
        </p>
        <p>
            {getContentByLanguage(
                'Terwijl ik mijn game aan het ontwikkelen was, heb ik toegepast wat ik geleerd heb over C++14, zoals shared en unique smart pointers. '
                + 'Ik heb ook het filesystem gebruikt dat onderdeel is geworden van de standaard library in C++17.',
                'While developing my game I\'ve applied what I\'ve learned about C++14, like shared and unique smart pointers. '
                + 'I\'ve also used the filesystem that became part of the standard library in C++17.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Ik heb allerlei functionaliteit geprogrammeerd, zoals het opslaan en laden van files,
                    maken van templates voor callback structuren, een physics en collider systeem, een audio en animatie systeem en natuurlijk de game mechanics zelf.
                    <br />
                    Het spel heet <ContentLink to='rocket-shipment'>Rocket Shipment</ContentLink> en heeft een&nbsp;
                    <a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/1237310/Rocket_Shipment/'>Steam pagina<OpenInNewIcon fontSize='small' /></a>!
                </p>,
                <p>
                    I&apos;ve programmed all kinds of functionality, such as saving and loading files from disk,
                    templates for callback structures, a physics and collider system, an audio and animation system and of course the game mechanics themselves.
                    <br />
                    The game is called <ContentLink to='rocket-shipment'>Rocket Shipment</ContentLink> and has a&nbsp;
                    <a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/1237310/Rocket_Shipment/'>Steam page<OpenInNewIcon fontSize='small' /></a>!
                </p>
            )
        }
    </div>
);

export default Cplusplus;

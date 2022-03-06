import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'You can’t use up creativity. The more you use, the more you have.';
const quoteAuthor = 'Maya Angelou - Bell Telephone Magazine';

const Creativity = () => (
    <div id='creativity'>
        <h1>{getContentByLanguage('Creativiteit', 'Creativity')}</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            {getContentByLanguage(
                'Ik houd er van creatief te zijn. Ik heb een breed scala aan creatieve uitlaatkleppen gehad, '
                + 'van het verven en in elkaar zetten van miniaturen tot het maken van muziek, gedichten, elektronica en video games.',
                'I love being creative. I\'ve had a wide variety of creative outlets in the past from painting and assembling miniatures, '
                + 'to making music, poetry electronics and video games.'
            )}
        </p>
        <p>
            {getContentByLanguage(
                'Ik geloof dat creativiteit enorm belangrijk is in het probleem-oplossend denken en verantwoordelijk is voor de grootste uitvindingen. '
                + 'Daarom probeer ik het binnen en buiten mijn werk te gebruiken.',
                'I believe creativity is hugely important as it is the biggest part in problem-solving and is responsible for the greatest inventions. '
                + 'That\'s why I try to utilize and practice it both when working and when off-work.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Een voorbeeld van mijn creativiteit kun je zien in <ContentLink to='rocket-shipment'>mijn PC video game</ContentLink> die ik zonder game engine heb gemaakt.
                    Voel je vrij hem eens te bekijken!
                </p>,
                <p>
                    An example of my creativity is <ContentLink to='ocket-shipment'>the PC videogame I&apos;m creating</ContentLink> from scratch.
                    Feel free to check it out!
                </p>
            )
        }
    </div>
);

export default Creativity;

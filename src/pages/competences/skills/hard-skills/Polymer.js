import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'Unlike the other web libraries like jQuery and frameworks like Angular and React, Polymer promotes the use of the original framework/platform of the web: the browser.';
const quoteAuthor = 'Toni-Jan Keith Monserrat, Google Developer Expert - "Why did I chose Polymer? Because it will be “gone”…", Article on Medium';

const Polymer = () => (
    <div id='polymer'>
        <h1>Polymer</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        {
            getContentByLanguage(
                <p>
                    Polymer is een framework waar je niet veel over hoort, aangezien de meeste bedrijven gebruik maken van Angular, Vue of React.
                    Polymer is of wordt echter toch gebruikt door een aantal grote namen zoals
                    Youtube, Netflix, Google Earth, McDonald&apos;s, Coca-Cola, Github, en natuurlijk de plek waar ik mijn ervaring ermee op heb gedaan:&nbsp;
                    <ContentLink to='ing'>ING</ContentLink>.
                </p>,
                <p>
                    Polymer is a framework you don&apos;t hear a lot about, since most companies currently use Angular, Vue or React.
                    Polymer however, was or still is used by a couple of big names such as
                    Youtube, Netflix, Google Earth, McDonald&apos;s, Coca-Cola, Github, and of course the place where I got my experience:&nbsp;
                    <ContentLink to='ing'>ING</ContentLink>.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Zoals al in de bovenstaande quote vermeld is Polymer een framework dat zich focust op het afleveren van de meest browser native ervaring. '
                + 'Zijn doel is om te voorzien in een web component structuur dat het dichtste bij het uiteindelijke doel komt dat browsers native willen implementeren in de toekomst.',
                'As stated in the quote above, Polymer is a framework focused on delivering the most browser native experience. '
                + 'Its goal is to provide a web component structure closest to the target solution planned to be implemented in browsers natively.'
            )}
            <br />
            {getContentByLanguage(
                'Dit betekent dat Polymer per definitie een tijdelijk framework is totdat browsers web components ondersteunen.',
                'This means Polymer is by definition a temporary framework until browsers support web components.'
            )}
        </p>
        <p>
            {getContentByLanguage(
                'Wat ik erg fijn vond aan Polymer is dat het css, html en Javascript samenvoegt in 1 file, wat de filetree simpel en duidelijk houdt. '
                + 'Het forceert ook om componenten klein te houden omdat je niet een te grote file wilt.',
                'What I like about Polymer is that it clubs css, html and Javascript together in 1 file, which keeps the filetree clear and contained. '
                + 'It also forces you to keep components small because you don\'t want file to become too big.'
            )}
            <br />
            <br />
            {getContentByLanguage(
                'Wat ik minder fijn vond was Polymer\'s gebruik van de Shadow DOM, welke enorm in de weg kon zitten bij automatische tests. '
                + 'De Shadow DOM houdt de HTML van componenten bij elkaar en afgeschermd van alles erbuiten, wat het moeilijk maakt om interne componentwaarden te controleren of te schrijven.',
                'What I like less is Polymers use of the Shadow DOM, which can be a nuisance when writing tests. '
                + 'The Shadow DOM keeps component\'s HTML contained and shielded from everything outside it, which makes it hard to check or set certain values while running tests.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Concluderend is Polymer een duidelijk en robuust framework, en heeft het ons team prima ondersteund tijdens
                    het werk bij <ContentLink to='ing'>ING</ContentLink>.
                </p>,
                <p>
                    All in all Polymer is a clear and robust framework, and has served our team well during my time at <ContentLink to='ing'>ING</ContentLink>.
                </p>
            )
        }
    </div>
);

export default Polymer;

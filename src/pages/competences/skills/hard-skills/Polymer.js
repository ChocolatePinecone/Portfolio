import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';

const quoteText = 'Unlike the other web libraries like jQuery and frameworks like Angular and React, Polymer promotes the use of the original framework/platform of the web: the browser.';
const quoteAuthor = 'Toni-Jan Keith Monserrat - Google Developer Expert';

const Polymer = () => {
    return (
        <div id='polymer'>
            <h1>Polymer</h1>
            <Quote text={quoteText} author={quoteAuthor} />
            <p>
                Polymer is a framework you don't hear a lot about, since most companies currently use Angular, Vue or React. Polymer is however still used by a couple of big names such as Youtube, Google Earth, McDonald's, Coca-Cola, Github, and of course the place where I got my experience: <ContentLink href='/experience/companies/ing'>ING</ContentLink>.
            </p>
            <p>
                As stated in the quote above, Polymer is a framework focused on delivering the most browser native experience. Its goal is to provide a web component structure closest to the target solution planned to be implemented in browsers natively.
                <br />
                This means Polymer is by definition a temporary framework until browsers support web components.
            </p>
            <p>
                What I like most about Polymer is that it clubs css, html and javascript together in 1 file, which keeps things clear and contained.
                <br />
                What I like less is Polymers use of the Shadow DOM, which can be a nuisance when writing tests. The Shadow DOM keeps components contained and shielded from everything outside it, which makes it hard to check or set certain values while running tests.
            </p>
            <p>
                All in all Polymer is a clear and robust framework, and has served our team well during my time at <ContentLink href='/experience/companies/ing'>ING</ContentLink>.
            </p>
        </div>
    );
};

export default Polymer;

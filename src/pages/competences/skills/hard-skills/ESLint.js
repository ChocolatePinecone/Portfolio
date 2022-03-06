import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';
import { getContentByLanguage } from '../../../../utils/LanguageSetting';

const quoteText = 'One difference between a smart programmer and a professional programmer is that the professional understands that clarity is king. '
    + 'Professionals use their powers for good and write code that others can understand.';
const quoteAuthor = 'Robert C. Martin - "Clean Code: A Handbook of Agile Software Craftsmanship"';

const ESLint = () => (
    <div id='eslint'>
        <h1>ESLint</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            {getContentByLanguage(
                'Linting is niet alleen belangrijk om programmeerfouten te voorkomen, maar helpt ook enorm bij het aanhouden van dezelfde stijl in de code.',
                'Linting is not only important for preventing programmatic errors, it also makes sure all code is written in the same style.'
            )}
        </p>
        {
            getContentByLanguage(
                <p>
                    Ik ben zeker een fan van linting. Bij veel projecten wordt linting naar mijn mening soms nog niet strict genoeg toegepast waardoor je toch aardige verschillen kun krijgen in
                    bepaalde notaties van delen code.
                    <br />
                    <ContentLink to='deze-website'>Deze website</ContentLink> is met erg stricte linting opgezet, waardoor alles erg eenduidig en leesbaar is.
                </p>,
                <p>
                    I&apos;m definitely a fan of linting. Many projects don&apos;t apply linting strictly enough in my opinion, which can cause decent differences in certain coding notations.
                    <br />
                    <ContentLink to='deze-website'>This website</ContentLink> is set up with pretty thorough and strict linting, which makes for a lot of clean, readable code.
                </p>
            )
        }
        <p>
            {getContentByLanguage(
                'Het mooie van ESLint is dat veel frameworks er plugins voor hebben. Neem React bijvoorbeeld. '
                    + 'De JSX in React kan op veel verschillende manieren worden geschreven, maar met ESLint kan je hier een enkele manier mee afdwingen wat het overzichtelijk houdt.',
                'The nice thing about ESLint is the fact that so many frameworks have plugins for it. '
                    + 'Take React for example. The JSX in React can be written in many different ways, but with ESLint you can force a single way which keeps it clear.'
            )}
            <br />
            {getContentByLanguage(
                'De React plugin voor ESLint staat je toe de exacte styling te bepalen die je wilt gebruiken voor JSX tot aan de laatste missende spatie.',
                'The React plugin for ESLint allows you to pick the exact styling you want to have JSX written in down till the last missing space.'
            )}
        </p>
        <p>
            {getContentByLanguage(
                'In het kort is linting zeker iets belangrijks en iets wat ik zal blijven gebruiken in mijn werk.',
                'In short, linting is important and is something I will definitely keep applying in the future.'
            )}
        </p>
    </div>
);

export default ESLint;

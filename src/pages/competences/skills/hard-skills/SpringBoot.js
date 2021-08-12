import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation';

const quoteText = 'There\'s only one trick in software, and that is using a piece of software that\'s already been written.';
const quoteAuthor = 'Bill Gates - Interview with Electronics magazine (1989)';

const SpringBoot = () => (
    <div id='springboot'>
        <h1>Spring Boot</h1>
        <Quote text={quoteText} author={quoteAuthor} />
        <p>
            Unfortunately I&apos;ve not had the opportunity to use Spring in a company environment.
            It&apos;s still a very widely used framework and is something I really wanted to try out,
            so I planned to utilize it in a personal project alongside a couple of other frameworks/tools on my list.
        </p>
        <p>
            The project is called JelmerQA and can be found <ContentLink href='/experience/jelmerqa'>here</ContentLink>.
        </p>
    </div>
);

export default SpringBoot;

import React from 'react';
import { ContentLink } from '../../../components/ContentNavigation';

const Police = () => (
    <div id='Police'>
        <h1>Working for the Police Netherlands</h1>
        <p>
            While working at the Police Netherlands I took part in developing a registration application for police officers.
            <br />
            The application makes it much easier and faster for officers to update their registration about cases or offences they were involved in.
            It runs on desktop and mobile and offers a clean and clear overview of all kinds of registration processes for officers to fill in.
            It also regularly saves progress to avoid losing any data as police officers tend to have very hectic days.
        </p>
        <p>
            While working for the Police, I&apos;ve been part of a multi-disciplined Agile team where we developed the registration application alongside many other teams.
            We also had the privilege to work with actual end users (real police officers) to be sure we were building exactly what they needed.
        </p>
        <br />
        <h2>What was my job?</h2>
        <p>
            As Fullstack developer I worked both on the Frontend (Angular) and backend (<ContentLink href='/skills/hard-skills/programming-languages/java'>Java</ContentLink>
            &nbsp;and Oracle Service Bus).
        </p>
        <p>
            I&apos;ve played a part in designing and implementing the functionality for saving data continuously, and have improved my &quot;T-shape&quot; by
            taking on assignments outside of my comfort zone.

            I have worked a lot with the RDF data model both through xquery scripts and a custom programming language written developed by the IT platform department.
            As I love to <ContentLink href='/skills/soft-skills/learning'>learn</ContentLink>, I became proficient in using it and also contributed a little to this custom language.
        </p>
        <p>
            The frontend work mostly consisted of working with this custom language on top of a base of Angular 11.
            Unit tests were written in Mocha/Chai, component tests in Jasmine and integration tests in Cypress.
        </p>
        <p>
            The backend work mostly consisted of working with Java EE with tests written with JUnit, utilizing Mockito for mocks. Integration tests were written in groovy with Spock.
            Part of the backend also consists of xquery code written in the Oracle Service Bus (OSB) which I also modified and extended from time to time.
        </p>
        <p>
            For our Agile processes, documentation and code we have made use of Jira, Confluence and Git (through Bitbucket).
            <br />
            Within the team I&apos;ve regularly hosted knowledge sessions to keep other up to date and help out junior team members.
            I also regularly created and maintained confluence pages with guides for a range of technical processes like migrations or specific implementations.
        </p>
        <p>
            Other notable things I have done or worked on in this project are:
        </p>
        <ul>
            <li>
                Designing and implementing Jenkinsfiles for new Jenkins jobs
            </li>
            <li>
                Writing migration scripts for model/database changes
            </li>
            <li>
                Reviewing pull requests as Senior Reviewer
            </li>
            <li>
                Extending core functionality of the custom programming language
            </li>
            <li>
                Extending generic UI components in a seperate library used throughout the application
            </li>
        </ul>
        <br />
        <h2>What was the result?</h2>
        <p>
            Our team has developed many important parts of the application in which I have also had a big part.
            I loved partaking in key discussions and focus groups and am happy to have pioneered in some essential functionalities of the application.
            I&apos;ve taken on many challenges outside of my comfort zone, learning a lot in the process.
        </p>
    </div>
);

export default Police;

import React from 'react';
import Quote from '../../../../components/Quote';
import { ContentLink } from '../../../../components/ContentNavigation'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const quoteText = 'C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off.';
const quoteAuthor = 'Bjarne Stroustrup - Creator of C++';

const Cplusplus = () => {
    return (
        <div id='C++'>
            <h1>C++</h1>
            <Quote text={quoteText} author={quoteAuthor} />

            <p>
                I first touched base with C++ during my education of Electrical Engineering. Back then I only used it for some small console window projects. After my education I did not use the language up until 2018.
            </p>
            <p>
                I've hobbied with making video games and in July 2018 I really wanted to make a video game from scratch. I chose to do this with SFML and C++, which meant I needed to brush up on my C++ knowledge. I spent 1 or 2 weeks learning C++ with help of Pluralsight and pushed my first lines of code to the repo around August 1st.
            </p>
            <p>
                While developing my game I've applied what I've learned about C++14, like shared and unique smart pointers. I've also used the filesystem that became part of the standard library in C++17.
            </p>
            <p>
                I've programmed all kinds of functionality, such as saving and loading files from disk, templates for callback structures, a physics and collider system, an audio and animation system and of course the game mechanics themselves.
                <br/>
                The game is called <ContentLink href='/experience/projects/rocket-shipment'>Rocket Shipment</ContentLink> and has a <a target='_blank' href='https://store.steampowered.com/app/1237310/Rocket_Shipment/'>Steam page<OpenInNewIcon fontSize="small"/></a>!
            </p>
        </div>
    );
};

export default Cplusplus;

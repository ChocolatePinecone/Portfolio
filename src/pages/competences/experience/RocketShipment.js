import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Quote from '../../../components/Quote';

const quoteText ='Something.';
const quoteAuthor = 'Someone';

const RocketShipment = () => {
    return (
        <div id='RocketShipment'>
            <h1>Rocket Shipment: My game made from scratch</h1>
            <Quote text={quoteText} author={quoteAuthor} />
            <p>
                The game is called <a target='_blank' href='https://store.steampowered.com/app/1237310/Rocket_Shipment/'>Rocket Shipment<OpenInNewIcon fontSize="small"/></a> and has a Steam page!
            </p>
        </div>
    );
};

export default RocketShipment;

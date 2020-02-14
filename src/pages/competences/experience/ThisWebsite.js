import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Quote from '../../../components/Quote';

const quoteText ='Something.';
const quoteAuthor = 'Someone';

const ThisWebsite = () => {
    return (
        <div id='ThisWebsite'>
            <h1>This Website</h1>
            <Quote text={quoteText} author={quoteAuthor} />
            <p>
                <a target='_blank' href='https://github.com/ChocolatePinecone/Portfolio'>Github repo<OpenInNewIcon fontSize="small"/></a>
            </p>
        </div>
    );
};

export default ThisWebsite;

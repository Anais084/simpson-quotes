import React from 'react';

const DisplayQuote = ({ quote }) => {
    return (
        <div className="DisplayQuote">
            <img src={quote.image} alt="picture" />
            <p>Quote : {quote.quote}</p>
            <p>Character : {quote.character}{' '}</p>
        </div>
    );
};

export default DisplayQuote;
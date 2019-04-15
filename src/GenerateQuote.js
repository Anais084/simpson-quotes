import  React  from  'react';

const  GenerateQuote = ({ selectQuote }) => {
    return (
        <div  className="GenerateQuote">
        <button className="quoteButton"  onClick={selectQuote}>Get quote</button>
        </div>
    );
};

export  default  GenerateQuote;
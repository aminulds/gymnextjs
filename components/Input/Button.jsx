import React from 'react';

const Button = ({ type, text, id }) => {
    return (
        <button className="btn btnPrimary" type={type} id={id}>
            {text}
        </button>
    );
};

export default Button;

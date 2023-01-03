import React from 'react';

const Button = ({ icon, type, text, id }) => {
    return (
        <button className="btn btnPrimary" type={type} id={id}>
            <span className="me-2">{icon}</span>
            {text}
        </button>
    );
};

export default Button;

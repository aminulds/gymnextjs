import React from 'react';

const Button = ({ icon, type, text, id, className }) => {
    return (
        <button className={`btn btnPrimary ${className}`} type={type} id={id}>
            <span className="me-2">{text}</span>
            <span className="fs-4">{icon}</span>
        </button>
    );
};

export default Button;

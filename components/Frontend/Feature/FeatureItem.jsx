import React from 'react';

const FeatureItem = ({ title, icon, text }) => {
    return (
        <div className="feature-item">
            <div className="card">
                <div className="card-body">
                    <div className="icon-wrap">
                        <div className="feature-icon">{icon}</div>
                    </div>
                    <h5 className="text-center ">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureItem;

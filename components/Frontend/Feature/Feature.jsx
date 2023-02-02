import React from 'react';
import { BiWalletAlt } from 'react-icons/bi';
import { featureData } from './featureData';
import FeatureItem from './FeatureItem';

const Feature = () => {
    return (
        <div className="feature py-4 py-md-5" id="feature">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Features</h2>
                    <p>Total Body Workout</p>
                </div>
                <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                    {featureData.map((featureITem) => (
                        <div key={featureITem.id} className="col">
                            <FeatureItem title={featureITem.title} icon={featureITem.icon} text={featureITem.text} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;

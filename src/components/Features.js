import React from 'react'
import featuresData from "../assets/data/featuresSlider"

import "./Features.css"

function Features() {
    return (
        <section className='features'>
            <div className="features-container">
                <h2 className="features-title">Features</h2>

                {featuresData.map((feature, index) => (
                    <div className="feature">
                        <h2 className='feature-title'>{feature.title}</h2>
                        <p className="feature-description">{feature.body}</p>
                    </div>
                ))}
                <div className="features-blur"></div>


            </div>

        </section>
    )
}

export default Features
import React from 'react'
import { AboutLeft } from './AboutLeft';
import { AboutRight } from './AboutRight';

export const AboutAudioPro = () => {
    return (
        <>
            <div className="mainAboutAudioPro">
                <h1>About <span>Audio Pro</span></h1>
                <div className="anotherOne">
                    <div className="AboutAudioLeft">
                        <AboutLeft />
                    </div>
                    <div className="AboutAudioright">
                        <AboutRight />
                    </div>
                </div>
            </div>
        </>
    )
}

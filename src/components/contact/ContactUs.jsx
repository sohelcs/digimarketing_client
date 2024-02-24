import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { InlineWidget } from "react-calendly";

const ContactUs = () => {
    return (
        <div className='max-w-[1400px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-10 mt-6 flex lg:md:flex-row flex-col items-center justify-center gap-x-4'>
            <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/4f7a494b-b2db-4462-92a2-1011b399c8a8/8jvD4tmB35.json"
                    className="lg:md:w-[30vw] lg:md:h-[600px] h-[50vh] w-[80vw]"
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <div className='w-full h-full' >
                <InlineWidget
                    url="https://calendly.com/afnanferdousi550/free-consultancy"
                />
            </div>
        </div>
    );
};

export default ContactUs;

import React, { useEffect, useState } from 'react';
import './SplashScreen.css';
import splash from '../assets/splash-logo.png';

const SplashScreen = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Simulate loading process
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000); // Adjust the duration as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`splash-screen ${visible ? '' : 'hidden'}`}>
            <img
                src={splash}
                alt='Splash Screen Image'
                className='splash-screen-image'
            />
        </div>
    );
};

export default SplashScreen;

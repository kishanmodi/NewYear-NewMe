import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import SplashScreen from './SplashScreen';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [quote, setQuote] = useState({
        text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: 'Thomas A. Edison'
    });
    const [click, setClick] = useState(1);
    const [time, setTime] = useState(
        `${new Date().getHours()}:${new Date().getMinutes()}`
    );

    useEffect(() => {
        const getQuote = async () => {
            try {
                const numbers = [1, 2, 3];
                let rand = numbers[Math.floor(Math.random() * numbers.length)];

                let quoteData;
                if (rand === 1) {
                    quoteData = await axios.get(
                        `https://api.quotable.io/quotes/random`
                    );
                    const { content, author } = quoteData.data[0];
                    setQuote({ text: content, author: author });
                } else if (rand === 2) {
                    quoteData = await axios.get(`https://api.kanye.rest/`);
                    const { quote } = quoteData.data;
                    setQuote({ text: quote, author: 'Kanye West' });
                } else {
                    quoteData = await axios.get(
                        `https://api.quotable.io/quotes/random`
                    );
                    const { content, author } = quoteData.data[0];
                    setQuote({ text: content, author: author });
                }
            } catch (error) {
                console.error('Error fetching quote:', error);
                // Handle error, set a default quote, or show an error message to the user
            }
        };

        getQuote();
    }, [click]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {
                const date = new Date();
                return `${date.getHours()}:${date.getMinutes()}`;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div
            className='image-box'
            style={{
                backgroundImage:
                    "url('https://source.unsplash.com/random/1920x1080?city,night,flower,nature,books,japan,sea,forest')"
            }}
        >
            <SplashScreen />
            <div className='main-container'>
                <h2 id='clock'>{time}</h2>
                <button
                    className='tracker-button'
                    onClick={() => {
                        navigate('/tracker');
                    }}
                >
                    Habit Tracker
                </button>
                <div className='inner-container'>
                    <div className='quote-container'>
                        <h1 id='quote'>"{quote.text}"</h1>
                        <h3 id='who-said-this'>- {quote.author}</h3>
                        <button
                            id='refresh'
                            title='Refresh'
                            onClick={() => {
                                setClick((prev) => prev + 1);
                            }}
                        >
                            <i className='fa-solid fa-arrows-rotate'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

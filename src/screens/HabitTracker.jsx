import React, { useState, useEffect, useCallback } from 'react';
import './HabitTracker.css';
import Habits from '../components/Habit-List/habits';
import Header from '../components/Header-Texts/header';

const HabitTracker = () => {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        getLocalHabits();
    }, []);

    useEffect(() => {
        saveLocalHabits();
    }, [habits]);

    const saveLocalHabits = () => {
        localStorage.setItem('habits', JSON.stringify(habits));
    };

    const getLocalHabits = useCallback(() => {
        const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
        setHabits(storedHabits);
    }, []);

    const handleIncrement = (habit) => {
        setHabits((prevHabits) =>
            prevHabits.map((item) =>
                item.id === habit.id
                    ? { ...habit, count: habit.count + 1 }
                    : item
            )
        );
    };

    const handleDecrement = useCallback((habit) => {
        setHabits((prevHabits) =>
            prevHabits.map((item) =>
                item.id === habit.id
                    ? { ...habit, count: Math.max(0, habit.count - 1) }
                    : item
            )
        );
    }, []);

    const handleDelete = useCallback((habit) => {
        setHabits((prevHabits) =>
            prevHabits.filter((item) => item.id !== habit.id)
        );
    }, []);

    const handleAdd = useCallback((name) => {
        setHabits((prevHabits) => [
            ...prevHabits,
            { id: Date.now(), name, count: 0 }
        ]);
    }, []);

    const handleReset = useCallback(() => {
        setHabits((prevHabits) =>
            prevHabits.map((item) =>
                item.count !== 0 ? { ...item, count: 0 } : item
            )
        );
    }, []);

    return (
        <div
            className='app-container'
            style={{
                backgroundImage:
                    "url('https://source.unsplash.com/random/1920x1080?city,night,flower,nature,books,japan,sea,forest')"
            }}
        >
            <div className='image-container'></div>
            <div className='container'>
                {/* <SplashScreen /> */}
                <Header
                    totalCount={habits.filter((item) => item.count > 0).length}
                />
                <Habits
                    habits={habits}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                    onAdd={handleAdd}
                    onReset={handleReset}
                />
            </div>
        </div>
    );
};

export default HabitTracker;

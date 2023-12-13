import React from 'react';
import styles from './habits.module.css';
import Habit from '../Individual-Habit/habit';
import HabitAddForm from '../Add-New-Habit/habitAddForm';

const Habits = ({
    habits,
    onAdd,
    onIncrement,
    onDecrement,
    onDelete,
    onReset
}) => {
    return (
        <div className={styles.habits}>
            <HabitAddForm onAdd={onAdd} />
            <ul className={styles.habitsList}>
                {habits.map((habit) => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
            <button
                className={styles.habitsReset}
                onClick={onReset}
            >
                Start Over
            </button>
        </div>
    );
};

export default Habits;

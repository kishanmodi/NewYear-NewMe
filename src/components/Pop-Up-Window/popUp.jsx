import React from 'react';
import styles from './popUp.module.css';
import DeleteBtn from '../Delete-Button/DeleteBtn';

const PopUp = ({ habit, onDelete }) => {
    return (
        <div className={styles.box}>
            <strong>Congrats!</strong>
            <p>{`You've done ${habit.name} for ${habit.count} days!`}</p>
            <DeleteBtn
                habit={habit}
                onDelete={onDelete}
                color={'#000'}
            />
        </div>
    );
};

export default PopUp;

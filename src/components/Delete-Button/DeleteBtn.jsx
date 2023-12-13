import React from 'react';
import styles from './delete.module.css';

const DeleteBtn = ({ habit, onDelete, color }) => {
    const handleDelete = () => {
        onDelete(habit);
    };

    return (
        <button
            className={`${styles.habitButton} ${styles.habitDelete}`}
            onClick={handleDelete}
            style={{ color: color }}
        >
            <i className='fas fa-trash'></i>
        </button>
    );
};

export default DeleteBtn;

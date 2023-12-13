import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <h1 onClick={() => navigate('/')}>Habit Tracker</h1>
            <p>It takes 21 days to develop a habit.</p>
            <strong className={styles.headerCountAnnounce}>
                {props.totalCount === 0
                    ? 'No habit is being followed!'
                    : props.totalCount === 1
                    ? `${props.totalCount} habit is being followed!`
                    : `${props.totalCount} habits are being followed!`}
            </strong>
        </header>
    );
};

export default Header;

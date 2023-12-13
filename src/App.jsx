import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HabitTracker from './screens/HabitTracker';
import Home from './screens/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/tracker'
                    element={<HabitTracker />}
                />
            </Routes>
        </Router>
    );
};

export default App;

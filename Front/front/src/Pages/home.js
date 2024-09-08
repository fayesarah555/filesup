import React from 'react';

function HomePage() {
    const handleRegister = () => {
        // Redirect to the registration form or endpoint
        window.location.href = '/register'; // Adjust this URL based on your routing setup
    };

    const handleLogin = () => {
        // Redirect to the login form or endpoint
        window.location.href = '/login'; // Adjust this URL as needed
    };

    return (
        <div>
            <h1>Welcome to FileSup!</h1>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default HomePage;

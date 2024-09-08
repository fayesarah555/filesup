import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Import your components
import HomePage from './Pages/home';
import PaymentForm from './Pages/PaymentForm';
import Login from './Pages/login';

// Load Stripe with your public key (ensure the key is set in your environment variables)
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<PaymentForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Elements>
    </Router>
  );
}

export default App;

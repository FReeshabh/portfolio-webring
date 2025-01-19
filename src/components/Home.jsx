import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ textAlign: 'center', margin: '20px' }}>
    <h1>Red Raider Webring</h1>
    <p>
      Explore amazing developer portfolios by visiting the{' '}
      <Link to="/webring">Webring</Link>.
    </p>
  </div>
);

export default Home;
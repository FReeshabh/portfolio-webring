import React, { useEffect, useState } from 'react';
import '../styles/Webring.css';

const App = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data from the JSON file
  useEffect(() => {
    fetch('/data/portfolios.json')
      .then((response) => response.json())
      .then((data) => setPortfolios(data))
      .catch((error) => console.error('Error fetching portfolios:', error));
  }, []);

  // Fuzzy matching function
  const fuzzyMatch = (text, query) => {
    const normalizedText = text.toLowerCase();
    const normalizedQuery = query.toLowerCase();
    return (
      normalizedText.includes(normalizedQuery) ||
      normalizedQuery.split('').every((char) => normalizedText.includes(char))
    );
  };

  // Filter portfolios based on fuzzy search
  const filteredPortfolios = portfolios.filter((portfolio) => {
    const query = searchQuery.toLowerCase();
    return (
      fuzzyMatch(portfolio.name, query) ||
      portfolio.interests.some((interest) => fuzzyMatch(interest, query)) ||
      portfolio.degree.some((degree) => fuzzyMatch(degree, query)) || // Search by degree
      fuzzyMatch(portfolio.description, query) // Search includes hidden description
    );
  });

  return (
    <div className="webring-container">
      <h1 className="webring-title">Webring</h1>
      <p className="webring-description">Explore the amazing portfolios of talented developers!</p>

      {/* Buttons */}
      <div className="action-buttons">
        <button
          onClick={() => window.open('https://github.com/your-repository', '_blank')}
          className="action-button"
        >
          View Source Code
        </button>
        <button
          onClick={() => window.open('https://forms.google.com/add-your-portfolio', '_blank')}
          className="action-button"
        >
          Add Your Website
        </button>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name, interests, degree, or description..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredPortfolios.map((portfolio, index) => (
          <div className="portfolio-card" key={index}>
            <h2>{portfolio.name}</h2>
            <p>Graduating Year: {portfolio.year}</p>
            <p>Status: {portfolio.status === 'current' ? 'Current Student' : 'Alumni'}</p>
            <p>
              <strong>Degree:</strong> {portfolio.degree.join(', ')}
            </p>
            <p>
              <strong>Interests:</strong> {portfolio.interests.join(', ')}
            </p>
            <a href={portfolio.website} target="_blank" rel="noopener noreferrer" className="portfolio-link">
              Visit Portfolio
            </a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Created by Rishabh Tewari</p>
      </footer>
    </div>
  );
};

export default App;
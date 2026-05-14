import React, { useState, useEffect } from 'react';
import IdentityCard from './act4_1'; 
import './act4.css';

const Act4 = () => {
  const [searchTerm, setSearchTerm] = useState("Kim"); 
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIdentity = async (nameToSearch) => {
    try {
      setIsLoading(true);
      setError(null);
      // Using a template literal for the URL
      const response = await fetch(`https://api.genderize.io?name=${nameToSearch}`);
      
      if (!response.ok) throw new Error("API Limit reached");

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIdentity(searchTerm);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.nameInput.value.trim();
    if (input) {
      setSearchTerm(input);
      fetchIdentity(input);
    }
  };

  return (
    <div className="act4-container">
      <h1 className="brand-title">BABAE O LALAKI?</h1>

      <div className="content-wrapper">
        <p className="subtitle">Activity 4: React Hooks & API Integration</p>

        <form onSubmit={handleSearch} className="search-box">
          <input 
            name="nameInput"
            type="text" 
            placeholder="Scan name..." 
            className="search-input"
            required
          />
          <button type="submit" className="search-btn">Predict</button>
        </form>

        {isLoading && <p>Scanning...</p>}

        {error && (
          <div className="error-msg">
            <span>⚠️</span> {error}
          </div>
        )}

        {!isLoading && !error && <IdentityCard data={result} />}
      </div>
    </div>
  );
};

export default Act4;
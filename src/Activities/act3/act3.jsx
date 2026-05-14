import { useState, useEffect, useRef } from 'react';
import Act3_1 from './act3_1';
import './act3.css';

function Act3() {
  const [members, setMembers] = useState([]);
  const [query, setQuery] = useState("");
  
  const searchInput = useRef(null);

  useEffect(() => {
    fetch('/act3.json')
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch(error => console.error("Error fetching data:", error));

    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, []);

  const handleSearch = () => {
    setQuery(searchInput.current.value.toLowerCase());
  };

  const filtered = members.filter(m => 
    m.name.toLowerCase().includes(query)
  );

  return (
    <div className="container">
      <div className="header">
        <h1>Activity 3: Member Directory</h1>
        <p>BSIT 2B Project</p>
        
        <div className="search-box">
          <input 
            ref={searchInput} 
            type="text" 
            placeholder="Type a name..." 
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="card-grid">
        {filtered.length > 0 ? (
          filtered.map(person => (
            <Act3_1 
              key={person.id} 
              name={person.name} 
              role={person.role} 
            />
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', textAlign: 'center' }}>
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Act3;

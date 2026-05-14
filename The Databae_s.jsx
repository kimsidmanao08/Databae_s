import React, { useState } from 'react';
import Batman from "../Activities/act1/act1";
import BatBae from "../Activities/act2/act2";
import Act3 from "../Activities/act3/act3";
import Act4 from "../Activities/act4/act4";
import heroImage from '../assets/hero.png';

const DatabaesMCO = () => {
  const [view, setView] = useState('menu');

  const activities = [
    { id: 'act1', title: 'Activity 1', component: <Batman /> },
    { id: 'act2', title: 'Activity 2', component: <BatBae /> },
    { id: 'act3', title: 'Activity 3', component: <Act3 /> },
    { id: 'act4', title: 'Activity 4', component: <Act4 /> },
  ];

  // VIEW: ACTIVITY MODE
  if (view !== 'menu') {
    const selected = activities.find(a => a.id === view);
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100%', color: '#000' }}>
        <button 
          onClick={() => setView('menu')}
          style={{ margin: '20px', padding: '10px 20px', cursor: 'pointer', background: '#222', color: '#d4af37', border: '2px solid #d4af37', borderRadius: '5px', fontWeight: 'bold' }}
        >
          ← Back to Menu
        </button>
        <div style={{ all: 'revert' }}>
          {selected.component}
        </div>
      </div>
    );
  }

  // VIEW: LANDING PAGE MODE (Using Inline Styles to force the color)
  return (
    <div style={{ backgroundColor: '#0f0f0f', color: '#e0e0e0', minHeight: '100vh', width: '100%', fontFamily: 'sans-serif' }}>
      
      {/* Hero Section */}
      <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px', borderBottom: '2px solid #d4af37' }}>
        <img src={heroImage} alt="Hero" style={{ width: '150px', borderRadius: '50%', border: '4px solid #d4af37', marginBottom: '20px' }} />
        <h1 style={{ color: '#d4af37', fontSize: '2.5rem', margin: 0, textTransform: 'uppercase' }}>Databae's Compilation</h1>
        <p style={{ color: '#aaa' }}>BSIT - 2B | Realest databae's </p>
      </header>

      {/* Activities Grid */}
      <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
          {activities.map((act) => (
            <div key={act.id} style={{ backgroundColor: '#1e1e1e', padding: '30px', borderRadius: '12px', textAlign: 'center', border: '1px solid #333' }}>
              <h3 style={{ color: '#d4af37', marginBottom: '15px' }}>{act.title}</h3>
              <button 
                onClick={() => setView(act.id)}
                style={{ backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '12px 24px', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}
              >
                View Activity
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Team Footer */}
      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid #333' }}>
        <p style={{ color: '#d4af37', fontWeight: 'bold' }}>The Databae's Team</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
          {['Dominic', 'Gian', 'Frank', 'Kim', 'Mary Joy'].map(name => (
            <span key={name} style={{ border: '1px solid #d4af37', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem' }}>{name}</span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default DatabaesMCO;
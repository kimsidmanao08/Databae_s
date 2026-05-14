import React from 'react';

const IdentityCard = ({ data }) => {
  // 1. Safety Check: If there's no data yet, show nothing.
  if (!data || !data.name) return null;

  // 2. Logic: Determine theme color based on predicted gender
  const isMale = data.gender === 'male';
  const themeColor = data.gender ? (isMale ? '#4facfe' : '#f093fb') : '#95a5a6';

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      padding: '30px',
      marginTop: '20px',
      color: '#333',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      width: '320px',
      borderTop: `10px solid ${themeColor}`,
      textAlign: 'center',
      transition: 'all 0.4s ease'
    }}>
      <small style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px' }}>
        Result for:
      </small>
      <h2 style={{ fontSize: '2.2rem', margin: '5px 0', textTransform: 'capitalize' }}>
        {data.name}
      </h2>
      
      {/* Gender Badge */}
      <div style={{
        backgroundColor: themeColor,
        color: 'white',
        padding: '12px',
        borderRadius: '12px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        margin: '20px 0'
      }}>
        {data.gender ? data.gender.toUpperCase() : "UNKNOWN"}
      </div>

      {/* Probability and Count Stats */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ textAlign: 'left' }}>
          <p style={{ margin: 0, color: '#888', fontSize: '0.7rem', fontWeight: 'bold' }}>PROBABILITY</p>
          <p style={{ margin: 0, fontWeight: 'bold' }}>
            {(data.probability * 100).toFixed(0)}%
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, color: '#888', fontSize: '0.7rem', fontWeight: 'bold' }}>SAMPLES</p>
          <p style={{ margin: 0, fontWeight: 'bold' }}>
            {data.count ? data.count.toLocaleString() : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

// At the bottom of act4_1.jsx
export default IdentityCard;
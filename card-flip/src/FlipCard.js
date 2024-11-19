import React, { useState, useEffect } from 'react';
import './FlipCard.css';

function FlipCard({ frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-face card-front">
            <img src={frontContent} alt="Front side" />
        </div>
        <div className="card-face card-back">
            <img src={backContent} alt="Back side" />
        </div>
    </div>
  );
}

export default FlipCard;

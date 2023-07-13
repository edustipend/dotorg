import React from 'react';
import "./NumbersGrid.css"

const NumbersGrid = () => {
  const numbersGrid = [
    {
      id: '1',
      count: '5000+',
      text: 'Applications'
    },
    {
      id: '2',
      count: '100+',
      text: 'Beneficiaries'
    },
    {
      id: '3',
      count: '7+',
      text: 'Ambasssadors'
    },
    {
      id: '4',
      count: '2k+',
      text: 'Happy Learners'
    }
  ];

  return (
    <>
      {/* Mobile */}
      <div className="numbers-container">
        <div className="numbers">
          <div className="top-numbers">
            <div className="top-left-numbers">
              <h3>{numbersGrid[0].count}</h3>
              <p>{numbersGrid[0].text}</p>
            </div>
            <div className="top-right-numbers">
              <h3>{numbersGrid[1].count}</h3>
              <p>{numbersGrid[1].text}</p>
            </div>
          </div>
          <div className="bottom-numbers">
            <div className="bottom-left-numbers">
              <h3>{numbersGrid[2].count}</h3>
              <p>{numbersGrid[2].text}</p>
            </div>
            <div className="bottom-right-numbers">
              <h3>{numbersGrid[3].count}</h3>
              <p>{numbersGrid[3].text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bigger Screen */}
      <div className="numbers-container-bigscreen">
        <div className="numbers-bigscreen">
          <div className="top-numbers-bigscreen">
            <div className="top-left-numbers-bigscreen">
              <h3>{numbersGrid[0].count}</h3>
              <p>{numbersGrid[0].text}</p>
            </div>
            <div className="top-right-numbers-bigscreen">
              <h3>{numbersGrid[1].count}</h3>
              <p>{numbersGrid[1].text}</p>
            </div>
          </div>
          <div className="bottom-numbers-bigscreen">
            <div className="bottom-left-numbers-bigscreen">
              <h3>{numbersGrid[2].count}</h3>
              <p>{numbersGrid[2].text}</p>
            </div>
            <div className="bottom-right-numbers-bigscreen">
              <h3>{numbersGrid[3].count}</h3>
              <p>{numbersGrid[3].text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NumbersGrid;

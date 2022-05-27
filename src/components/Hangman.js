import React from 'react'

const Hangman = ({ numWrong }) => {
  return (
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" stroke="#000000"/>
      <line x1="140" y1="20" x2="140" y2="50" stroke="#000000" />
      <line x1="60" y1="20" x2="60" y2="230" stroke="#000000" />
      <line x1="20" y1="230" x2="100" y2="230" stroke="#000000" />

      {/* <!-- Head --> */}
      {numWrong > 0 &&
        <circle cx="140" cy="70" r="20" />
      }
      {/* <!-- Body --> */}
      {numWrong > 1 &&
        <line x1="140" y1="90" x2="140" y2="150" stroke="#000000" />
      }
      {/* <!-- Arms --> */}
      {numWrong > 2 &&
        <line x1="140" y1="120" x2="120" y2="100" stroke="#000000" />
      }
      {numWrong > 3 &&
        <line x1="140" y1="120" x2="160" y2="100" stroke="#000000" />
      }
      {/* <!-- Legs --> */}
      {numWrong > 4 &&
        <line x1="140" y1="150" x2="120" y2="180" stroke="#000000" />
      }
      {numWrong > 5 &&
        <line x1="140" y1="150" x2="160" y2="180" stroke="#000000" />
      }
    </svg>
  )
}

export default Hangman
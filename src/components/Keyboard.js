import React from 'react'
import { Button, Row } from 'react-bootstrap'

const Keyboard = ({ handleGuess, correctGuess, wrongGuess }) => {
  return (
    <div>
      <div>
        {"qwertyuiop".split("").map(letter => (
          <Button
            variant='primary'
            size='lg'
            key={letter}
            value={letter}
            onClick={handleGuess}
            disabled={correctGuess.includes(letter) || wrongGuess.includes(letter)}
          >
            {letter}
          </Button>
        ))}
      </div>
      <div>
        {"asdfghjkl".split("").map(letter => (
          <Button
            variant='primary'
            size='lg'
            key={letter}
            value={letter}
            onClick={handleGuess}
            disabled={correctGuess.includes(letter) || wrongGuess.includes(letter)}
          >
            {letter}
          </Button>
        ))}
      </div>
      <div>
        {"zxcvbnm".split("").map(letter => (
          <Button
            variant='primary'
            size='lg'
            key={letter}
            value={letter}
            onClick={handleGuess}
            disabled={correctGuess.includes(letter) || wrongGuess.includes(letter)}
          >
            {letter}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Keyboard
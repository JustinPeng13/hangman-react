import React from 'react'
import { Button, Row } from 'react-bootstrap'

const Keyboard = ({ handleGuess, correctGuess, wrongGuess }) => {
  return (
    <div>
      <div>
        {"QWERTYUIOP".split("").map(letter => (
          <Button
            variant='primary'
            size='lg'
            className='m-1 keys'
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
        {"ASDFGHJKL".split("").map(letter => (
          <Button
            variant='primary'
            size='lg'
            className='m-1 keys'
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
        {"ZXCVBNM".split("").map(letter => (
          <Button
            variant='primary'
            size='lg'
            className='m-1 keys'
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
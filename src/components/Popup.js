import React from 'react'
import { Alert, Button } from 'react-bootstrap'

const Popup = ({status, word, playAgain}) => {
  if (status == 'Win') {
    return (
      <Alert variant='success' dismissible>
        <p>Congratulations, you guessed the word correctly!</p>
        <Button variant='primary' onClick={playAgain}>Play Again</Button>
      </Alert>
    );
  } else if (status == 'Lose') {
    return (
      <Alert variant='danger' dismissible>
        <p>Sorry, you lost... The word was <strong><em>{word}</em></strong>.</p>
        <Button variant='primary' onClick={playAgain}>Play Again</Button>
      </Alert>
    );
  }
}

export default Popup
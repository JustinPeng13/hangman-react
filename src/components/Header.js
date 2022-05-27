import React from 'react'

const Header = ({livesLeft, numLives}) => {
  return (
    <div>
      <h1>Hangman</h1>
      <p>Use the on-screen keyboard or type the letter you want to guess!</p>
      <p>You have <strong>{livesLeft}/{numLives}</strong> lives left!</p>
    </div>
  )
}

export default Header
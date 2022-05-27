import React from 'react'

const Header = ({livesLeft, numLives}) => {
  return (
    <div className='header'>
      <h1>Hangman</h1>
      <h4>(Animals)</h4>
      <p>Use the on-screen keyboard or type the letter you want to guess!<br></br>
      You have <strong>{livesLeft}/{numLives}</strong> lives left!</p>
    </div>
  )
}

export default Header
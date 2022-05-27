import React from 'react'

const WordDisplay = ({word, correctGuess}) => {
  const displayWord = word.split('').map(
    letter => correctGuess.includes(letter) ? letter : '_'
  ).join(' ');
  
  return (
    <div>
      <p>{displayWord}</p>
    </div>
  )
}

export default WordDisplay
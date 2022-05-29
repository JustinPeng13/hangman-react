import './App.css';
import randomWord from './components/Words';
import Hangman from './components/Hangman';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import Popup from './components/Popup';
import WordDisplay from './components/WordDisplay';
import { useState, useEffect } from 'react';

var word = randomWord();

function App() {
  const [correctGuess, setCorrectGuess] = useState([]);
  const [wrongGuess, setWrongGuess] = useState([]);
  const [status, setStatus] = useState('');
  const numLives = 6;

  const handleGuess = e => {
    const letter = e.target.value;
    if (status == '') {
      if (word.includes(letter)) {
        if (!correctGuess.includes(letter)) {
          setCorrectGuess(currentLetters => [...currentLetters, letter]);
        }
      } else {
        if (!wrongGuess.includes(letter)) {
          setWrongGuess(currentLetters => [...currentLetters, letter]);
        }
      }
    }
  }

  const playAgain = () => {
    setStatus('');
    setCorrectGuess([]);
    setWrongGuess([]);
    word = randomWord();
  }

  useEffect(() => {
    const displayWord = word.split('').map(
      letter => correctGuess.includes(letter) ? letter : '_'
    ).join(' ');
    
    const newStatus = wrongGuess.length > 5
      ? 'Lose'
      : displayWord.includes('_')
        ? ''
        : 'Win';

    setStatus(stat => newStatus);
  }, [correctGuess, wrongGuess]);


  useEffect(() => {
    const handleKeydown = e => {
      const { key, keyCode } = e;
      if (status == '' && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toUpperCase();
        if (word.includes(letter)) {
          if (!correctGuess.includes(letter)) {
            setCorrectGuess(currentLetters => [...currentLetters, letter]);
          }
        } else {
          if (!wrongGuess.includes(letter)) {
            setWrongGuess(currentLetters => [...currentLetters, letter]);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctGuess, wrongGuess]);

  return (
    <div className="App text-center">
      <Popup status={status} word={word} playAgain={playAgain} />
      <Header livesLeft={numLives - wrongGuess.length} numLives={numLives} />
      <Hangman numWrong={wrongGuess.length} />
      <WordDisplay word={word} correctGuess={correctGuess} />
      <Keyboard handleGuess={handleGuess} correctGuess={correctGuess} wrongGuess={wrongGuess} />
    </div>
  );
}

export default App;

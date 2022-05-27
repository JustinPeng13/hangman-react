const words = [
  'application',
  'programming',
  'interface',
  'wizard'
];

const randomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
}

export default randomWord;
const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let array = [];
  let result;
  let charArray = [];
  for (let i = 0; i < expr.length; i += 10) {
      let letter = expr.slice(i, i+10);
      charArray.push(letter);
  }
  let decodedArr = charArray.map(element => element
    .replace(/00/g, '')
    .replace(/10/g, '.')
    .replace(/11/g, '-'));

  decodedArr.forEach(element => {
      if (element === '**********') {
          array.push(' ');
      } else {
          array.push(MORSE_TABLE[element]);
      }
  });
  return result = array.join('');
}

module.exports = {
  decode
}
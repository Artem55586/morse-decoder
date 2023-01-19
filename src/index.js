const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const exprLength = expr.length;
    let repEl = '';
    let exprArrow = [];
    let string = '';
    
    const keyArrow = Object.keys(MORSE_TABLE);
    const valueArrow = Object.values(MORSE_TABLE);
  
    for (let i = 0; i < exprLength; i = i + 10){
      exprArrow.push(expr.slice(i, i + 10));
    }
  
    const dotDashArrow = exprArrow.map((element) => {
      repEl = element.replaceAll('10', '.').replaceAll('11', '-').replaceAll('00', '').replaceAll('**********', ' ');
      return repEl;
    })
    
    dotDashArrow.forEach((element, index) => {
      let ind = keyArrow.indexOf(dotDashArrow[index]);
      if (ind !== -1) {
        string = `${string}${valueArrow[ind]}`;
      } else {
        string = `${string} `
      }
    })

    return string;
}

module.exports = {
    decode
}
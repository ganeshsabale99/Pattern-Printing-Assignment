// *   *
//  * *
//   *
//  * *
// *   *


for (let i = 0; i < 5; i++) {
    let line = '';
    for (let j = 0; j < 5; j++) {
      if (j === i || j === 5 - i - 1) {
        line += '*';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }







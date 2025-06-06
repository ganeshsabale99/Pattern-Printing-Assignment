//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA

let n=5;

for (let i = 1; i <= n; i++) {
    let line = '';

    // Add spaces
    for (let space = 1; space <= n - i; space++) {
      line += ' ';
    }

    // Increasing characters
    for (let j = 0; j < i; j++) {
      line += String.fromCharCode(65 + j); // 65 = 'A'
    }

    // Decreasing characters
    for (let j = i - 2; j >= 0; j--) {
      line += String.fromCharCode(65 + j);
    }

    console.log(line);
  }
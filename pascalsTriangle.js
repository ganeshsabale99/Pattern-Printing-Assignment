 let n=5;

 for (let i = 0; i < n; i++) {
    let line = '';

    
    for (let s = 0; s < n - i - 1; s++) {
      line += ' ';
    }

    let num = 1; 
    for (let j = 0; j <= i; j++) {
      line += num + ' ';
      num = num * (i - j) / (j + 1); 
    }

    console.log(line.trimEnd());
  }
const n = 10;
let log = '';

for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= n; j++) {
    const isInsideTriangle = (i < n / 2 && j >= n / 2 - i && j <= n / 2 + i);
    const isInsideInvertedTriangle = (i > n / 2 && j >= i - n / 2 && j <= n - (i - n / 2));

    if (isInsideTriangle || isInsideInvertedTriangle || i === n / 2) {
      log += "*";
    } else {
      log += " ";
    }
  }

  if (i === n / 2) {
    log += "\n  Welcome\n";
  } else {
    log += "\n";
  }
}

export default log
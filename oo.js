function hex2rgb(hex) {
  if (/#[0-9a-fA-F]{3}/.test(hex) && hex.length === 4) {
    let a = hex.slice(1, 2),
      b = hex.slice(2, 3),
      c = hex.slice(3);
    a = parseInt(a + a, 16);
    b = parseInt(b + b, 16);
    c = parseInt(c + c, 16);
    console.log('1');
    return 'rgb(' + a + ',' + b + ',' + c + ')';
  } else if (/#[0-9a-fA-F]{6}/.test(hex) && hex.length === 7) {
    let a = hex.slice(1, 3),
      b = hex.slice(3, 5),
      c = hex.slice(5);
    a = parseInt(a, 16);
    b = parseInt(b, 16);
    c = parseInt(c, 16);
    console.log('2');
    return 'rgb(' + a + ',' + b + ',' + c + ')';
  } else {
    return hex;
  }
}
console.log(hex2rgb('#ffaabb'));

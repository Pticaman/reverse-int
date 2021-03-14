module.exports = function reverse(n) {
  n = Math.abs(n);

  let x = String(n);
  let a =x.split('');
  let b = a.reverse();
  let c = b.join('');
 


  return c;
}

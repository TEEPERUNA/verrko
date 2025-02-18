function calulateArea(radius) {
  return Math.PI * radius * radius;
}

function compareNumbers(a, b) {
  if (a > b) {
    return a + " is greater than " + b;
  } else if (a < b) {
    return b + " is greater than " + a;
  } else {
    return a + " is equal to " + b;
  }
}

calculateArea(5);
compareNumbers(10, 5);

const num = [1, 2, 3, 4, 5];
const doubled = num.map(n => n * 2);
console.log(doubled);

const filtered = num.filter(n => n > 2);
console.log(filtered);
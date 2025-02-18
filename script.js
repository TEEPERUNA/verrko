function calculateArea(radius) {
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

class car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
    return `${this.make} ${this.model} ${this.year}`;
    }

}

const car1 = new car("Toyota", "Corolla", 2021);
const car2 = new car("Honda", "Civic", 2022);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());

const user = {
    name: "Erik",
    email: "erik@erik.com",
    address: {
        country: "Finland",
        city: "Espoo",
        street: "Street"
    }
};

const { name, email, address: { city } } = user;
console.log(`User: ${name}, Email: ${email}, City: ${city}`);


const updatedUser = { ...user, email: "newemail@example.com" };
console.log(updatedUser);

document.getElementById("btn").addEventListener("click", function() {
    const inputValue = document.getElementById("userInput").value;
    document.getElementById("result").innerText = inputValue;
});

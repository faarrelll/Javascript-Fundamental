import Vehicle from "./vehicle.js";

// inherintance
class Car extends Vehicle {
  carName;
  carBrand;
  #owner;

  constructor(type, engine, isElectric, carName, carBrand, owner) {
    super(type, engine, isElectric);
    this.carBrand = carBrand;
    this.carName = carName;
    this.#owner = owner;
  }

  getOwner() {
    return this.#owner;
  }

  start() {
    console.log(`${this.carName} is starting`);
  }
}

const myCar = new Car("Car", "V8", false, "x4", "BMW", "aku");
const vehicle = new Vehicle("Car", "V9", true);
console.log(vehicle);
console.log(myCar);
console.log(myCar.getOwner());
myCar.start();

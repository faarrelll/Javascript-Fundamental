import Car from "./car.js";
import parking from "./parkingLot.js";


const car1 = new Car("N 2015 AG", "kuncoro");
const car2 = new Car("N 2016 AG", "aldo");
const car3 = new Car("N 2017 AG", "lucas");
const car4 = new Car("N 2018 AG", "balmond");
const car5 = new Car("N 2019 AG", "alucard");
const car6 = new Car("N 2029 AG", "alucard");
// console.log(car1);

(async () => {
  try {
    // const { park, leave, check } = await parkinglot("a"); // akan error karean input parameter bukan angka
    const { park, leave, check } = await parking(5);
    try {
      console.log(await park(car1));
      console.log(await park(car2));
      console.log(await park(car3));
      // console.log(await park(car4)); //error sudah ada mobil yang parkir dengan nopol yang sama
      console.log(await park(car4));
      try {
        console.log(await check());
      } catch (error) {
        console.log(error);
      }
      console.log(await park(car5));
      // console.log(await park(car6)); //error parking area penuh
    } catch (error) {
      console.log(error);
    }
    try {
      console.log(await check());
    } catch (error) {
      console.log(error);
    }

    try {
      console.log(await leave("N 1 AG")); // error karena tidak ada nopol ini di parking area
    } catch (error) {
      console.log(error.message);
    }

    try {
      console.log(await leave("N 2015 AG"));
    } catch (error) {
      console.log(error.message);
    }
    try {
      console.log(await check());
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
})();

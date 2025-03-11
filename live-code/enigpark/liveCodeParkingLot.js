function parkinglot(capacity) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const parkingArea = {
        capacity,
        data: [],
      };
      const park = (car) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (parkingArea.data.length === parkingArea.capacity) {
              reject("Parking Area Penuh");
            }

            if (
              parkingArea.data.find(
                (parkingCar) => parkingCar.nopol === car.nopol
              )
            ) {
              reject("Sudah ada mobil parkir dengan nopol sama");
            }
            parkingArea.data.push(car);
            resolve(`Mobil dengan nopol ${car.nopol} Berhasil Parkir`);
          }, 3000);
        });
      };

      const leave = (nopol) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const leaveCar = parkingArea.data.findIndex(
              (data) => data.nopol === nopol
            );
            // console.log(leaveCar)
            if (leaveCar === -1) {
              reject(`Mobil dengan nopol ${nopol} tidak ada diparkiran`);
            } else {
              parkingArea.data.splice(leaveCar, 1);
              resolve(`Mobil dengan nopol ${nopol}Berhasil keluar parkiran`);
            }
          }, 1500);
        });
      };

      const check = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              capacity: parkingArea.capacity,
              availableSlots: parkingArea.capacity - parkingArea.data.length,
              parkedCars: parkingArea.data,
            });
          }, 500);
        });
      };
      if (typeof capacity === "number") {
        console.log("Tempat Parkir Berhasil dibuat dengan kapasitas", capacity);
        resolve({ park, leave, check });
      } else {
        reject("Masukan angka untuk kapasitas parkir");
      }
    }, 5000);
  });
}

export default parkinglot;

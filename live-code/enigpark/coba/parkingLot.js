async function parkinglot(capacity) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const parkingArea = {
    capacity,
    data: [],
  };
  const park = async (car) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (parkingArea.data.length === parkingArea.capacity) {
      throw new Error("Parking Area Penuh");
    }

    if (parkingArea.data.find((parkingCar) => parkingCar.nopol === car.nopol)) {
      throw new Error("Sudah ada mobil parkir dengan nopol sama");
    }
    parkingArea.data.push(car);
    return `Mobil dengan nopol ${car.nopol} Berhasil Parkir`;
  };

  const leave = async (nopol) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const leaveCar = parkingArea.data.findIndex((data) => data.nopol === nopol);
    // console.log(leaveCar)
    if (leaveCar === -1) {
      return `Mobil dengan nopol ${nopol} tidak ada diparkiran`;
    } else {
      parkingArea.data.splice(leaveCar, 1);
      throw new Error(`Mobil dengan nopol ${nopol}Berhasil keluar parkiran`);
    }
  };

  const check = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      capacity: parkingArea.capacity,
      availableSlots: parkingArea.capacity - parkingArea.data.length,
      parkedCars: parkingArea.data,
    };
  };
  if (typeof capacity === "number") {
    console.log("Tempat Parkir Berhasil dibuat dengan kapasitas", capacity);
    return { park, leave, check };
  } else {
    throw new Error("Masukan angka untuk kapasitas parkir");
  }
}

export default parkinglot;

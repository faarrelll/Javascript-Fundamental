function waktu(input) {
  if ((input > 7 && input < 12) || (input > 12 && input < 18)) {
    console.log("Waktu Belajar");
  } else if (input == 12) {
    console.log("Waktu Istirahat");
  } else if (input >= 4 && input <= 5) {
    console.log("Waktu Bangun");
  } else if (input > 24) {
    console.log("Hanya ada waktu 24 jam dalam sehari");
  } else {
    console.log("Waktu Main");
  }
}

waktu(9);
waktu(12);
waktu(4);
waktu(25);
waktu(20);

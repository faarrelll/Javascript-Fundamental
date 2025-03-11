const janji = (waktu) =>
  new Promise((resolve, reject) => {
    if (waktu >= 7 && waktu <= 11) {
      resolve("Datang");
    } else {
      reject("Tidak Datang!");
    }
  });

janji(8)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

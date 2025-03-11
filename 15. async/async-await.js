const janji = async (waktu) => {
  try {
    if (waktu >= 7 && waktu <= 11) {
      return "Datang";
    } else {
      throw new Error("Tidak Datang!");
    }
  } catch (error) {
    throw error; 
  }
};

async function main(waktu) {
    try {
        const res = await janji(waktu)
        console.log(res)
    } catch (error) {
        console.error("error.message")
    }
}

main(12);

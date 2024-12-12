var restaurant = [250000, 710000, 125000];

const giveTips = (restaurant) => {
  // kode disini
  let totalTips = 0;
  for (let i = 0; i < restaurant.length; i++) {
    if (restaurant[i] > 500000) {
      totalTips += (restaurant[i] * 10) / 100;
    } else if (restaurant[i] >= 250000 && restaurant[i] <= 500000) {
      totalTips += (restaurant[i] * 15) / 100;
    } else if (restaurant[i] < 250000) {
      totalTips += (restaurant[i] * 20) / 100;
    }
  }
  return totalTips;
};

const payment = (restaurant) => {
  // kode disini
  let totalPay = 0;
  
  for (let i = 0; i < restaurant.length; i++) {
    totalPay += restaurant[i];
  }

  return totalPay;
};

const tips = giveTips(restaurant);
const bill = payment(restaurant);

console.log(`Total Tagihan : ${bill}`);
console.log(`Total Tips : ${tips}`);
console.log(`Total Tagihan dan Tips : ${bill + tips}`);

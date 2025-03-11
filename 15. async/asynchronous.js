function taskOne(callback) {
  setTimeout(() => {
    console.log("Task one is done");
    callback();
  }, 500);
}

function taskTwo(callback) {
  setTimeout(() => {
    console.log("Task two is donr");
    callback();
  }, 1200);
}

function taskThree() {
  setTimeout(() => {
    console.log("Task Three is done");
  }, 200);
}

// taskThree();
// taskOne();
// taskTwo();


// jika calllbacknya banyak akan menyebabkkan callback hell
taskOne(() => {
  taskTwo(() => {
    taskThree();
  });
});

class vehicle {
  type;
  engine;
  isElectric;

  constructor(type, engine, isElectric) {
    this.type = type;
    this.engine = engine;
    this.isElectric = isElectric;
  }

  start() {
    console.log("vehicle started");
  }
}

export default vehicle;

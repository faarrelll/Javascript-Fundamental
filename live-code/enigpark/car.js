class car {
  nopol;
  owner;

  constructor(nopol, owner) {
    this.nopol = nopol;
    this.owner = owner;
  }

  get nopol() {
    return this.nopol;
  }

  get owner() {
    return this.owner;
  }
}

export default car;

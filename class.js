class Nothing {
  constructor(name) {
    this.name = name;
  }

  valueOf() {
    return this.name
  }
}



let first = new Nothing("Dima");
//let second = first;
let second = new Nothing("Nastya");

function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
}

console.log(compare(first, second));
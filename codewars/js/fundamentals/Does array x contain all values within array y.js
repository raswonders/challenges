Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(arr) {
  return arr.every(item => this.includes(item));
}});

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(items.containsAll([1, 2, 3]));
// false 
console.log(items.containsAll([1, 2, 33]));
// true

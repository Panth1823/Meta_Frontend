let numbers = [1, 2, 3, 4, 5];

let [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

let colors=['pink', 'orange', 'green', 'blue', 'yellow']
for( let i of colors){
    console.log(i);
}
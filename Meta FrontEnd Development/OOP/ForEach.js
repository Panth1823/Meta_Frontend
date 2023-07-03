const fruits = ['apple', 'banana', 'orange'];

function append(fruit,index) {
    console.log(`${index}.${fruit}`);


}
fruits.forEach(append)

const veggies=['potato','tomato','cucumber']
veggies.forEach(function(veggie,index){
    console.log(`${index}.${veggie}`)
});
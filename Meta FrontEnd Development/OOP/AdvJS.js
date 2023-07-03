// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (props of dairy) {
        console.log(props)
    }
}
logDairy()
// Task 2
const animal = {
    canJump: true
}
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (props of Object.keys(bird)) {
        console.log(`${props}: `, bird[props])
    }
}
birdCan()
// Task 3
function animalCan() {
    for (props in bird) {
        console.log(`${props}: `, bird[props])
    }
}
animalCan()
let bird={
    hasWings:true,
canFly:true,
hasFeathers:true,
}
let eagle1=Object.create(bird);
console.log('wings',eagle1.hasWings);
console.log('fly',eagle1.canFly);
console.log('feathers',eagle1.hasFeathers);
// Functional Programming
let shoes = 3000;
let GST = 0.12;

const totalPrice = (shoes, TaxGST) => {
  return shoes * TaxGST;
};
let Topay = totalPrice(3000, 0.12);
console.log('GST when Shoe Price is',shoes+' ₹','=',Topay+' ₹');


//Object Oriented Programming(OOP)
 let p2={
  shoes:3000,
  GST:0.12,
  totalPrice:function(shoes,GST) {
    let tp=p2.shoes*p2.GST;
    console.log(tp);
 }
}
 p2.totalPrice();

let top3=["The Collosseum","The Great Wall","The Taj Mahal","The Pyramids","The Eiffel Tower","The Leaning Tower of Pisa","The Statue of Liberty","The Sydney Opera House","The Empire State Building","The Golden Gate Bridge",    "The Grand Canyon","The Great Barrier Reef","The Victoria Falls","The Aurora Borealis","The Great Barrier Reef","The Victoria Falls","The Aurora Borealis"];

function  Itenary(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16){
    console.log("Visit",p1);
    console.log("Then Visit",p2);
    console.log("Last finish with Visit",p3);
    console.log("Visit",p4);
    console.log("Then Visit",p5);
    console.log("Last finish with Visit",p6);
    console.log("Visit",p7);
    console.log("Then Visit",p8);
    console.log("Last finish with Visit",p9);
    console.log("Visit",p10);
    console.log("Then Visit",p11);
    console.log("Last finish with Visit",p12);
    console.log("Visit",p13);
    console.log("Then Visit",p14);
    console.log("Last finish with Visit",p15);
    console.log("Visit",p16);
   
}
// Itenary(top3[0],top3[1],top3[2]);

//  Instead of passing the array elements one by one, we can use the spread operator to pass the array elements as individual arguments to the function.

Itenary(...top3);
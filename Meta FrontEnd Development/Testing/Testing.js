const Concat=(str1,str2) =>{

    let str3=str1+str2;
    return str3;
   
}
console.log(Concat("Hello I am Panth ","and I am 20 years old"));


// Testing Functions

  expect(Concat("Hello","World")).toBe("HelloWorld");
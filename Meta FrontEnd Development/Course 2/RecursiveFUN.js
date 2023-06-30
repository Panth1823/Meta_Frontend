let counter=3;
function recursiveFun(){
    console.log(counter);
    counter=counter-1;
    if(counter === 0)return ;
    recursiveFun();
}
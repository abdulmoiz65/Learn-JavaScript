// syntax
// setTimeout(function, delay);

function add(num1 , num2 ){
    x = num1 + num2;
    console.log(x);
}

setTimeout(function(){
    add(5, 10);
},2000);



function name(){
    console.log("hello");
}
setTimeout(name, 2000);


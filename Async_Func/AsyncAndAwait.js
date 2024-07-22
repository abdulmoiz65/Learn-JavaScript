async function test(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
    return data;
    
}
test().then(()=>{
    console.log("hello2");
    }).catch(()=>{
        console.log("hello3");
        });


// Await more clearly 

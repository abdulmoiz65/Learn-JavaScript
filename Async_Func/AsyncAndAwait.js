 // Define an async function to fetch data
        async function fetchTodo() {
            try {
                // Await the response from the fetch call
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                // Await the response to be converted to JSON
                const data = await response.json();
                // Log the data to the console
                console.log(data);
                // Return the data
                return data;
            } catch (error) {
                // Log any errors that occur during the fetch
                console.error('Error:', error);
                // Re-throw the error to be caught by the .catch() method
                throw error;
            }
        }

        // Call the async function and handle the result
        fetchTodo()
            .then((data) => {
                // Log a success message to the console
                console.log("hello2");
            })
            .catch(() => {
                // Log an error message to the console
                console.log("hello3");
            });

// Await more clearly 

async function check(){
    console.log("A");
    console.log("B");
    await console.log("C");
    console.log("D");
}
check();

console.log("waiting");
console.log("waiting.......");

// Define a class named Person
class Person {
    
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    getInfo() {
        console.log(""+ this.name + " + is " + this.age + " years old.")
        
      }

}


const a = new Person("moiz" , 20);
a.getInfo();


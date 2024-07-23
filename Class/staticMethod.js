// Define a class named Person
class Person {
    
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    static check(){
        console.log("This is a static method");
    }

     getInfo() {
        console.log(""+ this.name + " + is " + this.age + " years old.")
        
      }

}

Person.check();

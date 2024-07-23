// access the private data members 

class Person {
    
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }
    
    print() {
        console.log(""+ this.name + " is " + this.age + " years old.")
        
      }
}
               


const a = new Person("moiz" , 20);
a.print();


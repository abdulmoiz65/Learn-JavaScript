class Person {
    
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    getInfo() {
        console.log(""+ this.name + " + is " + this.age + " years old.")
        
      }

}

class Person2 extends Person {
  constructor(name, age, name2) {
    super(name, age);
    this.name2 = name2;


}
  getInformation(){
    console.log("My name is " + this.name + " and i am " + this.age + " years old , what about you " + this.name2  );
  }
}

const a = new Person2("moiz" , 20 , "Amir"); 
a.getInformation();



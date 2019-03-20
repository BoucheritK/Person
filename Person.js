class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    tellMyname() {
        return(`I am ${this.name}`)
    }

    tellMyage() {
        return(`I am ${this.age} years olds`);
    }
}

const Person1 = new Person("Jonh", 40) 
console.log(Person1.tellMyname());
console.log(Person1.tellMyage());

const Person2 = new Person("Mary", 35)
console.log(Person2.tellMyname());
console.log(Person2.tellMyage());

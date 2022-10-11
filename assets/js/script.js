class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  ageComparison(person) {
    if (this.age > person.age) {
      console.log(`${this.name} è più vecchio di ${person.name}`);
    } else {
      console.log(`${this.name} è più giovane di ${person.name}`);
    }
  }
}

let p1 = new Person("Topolino", 25);
let p2 = new Person("Paperino", 30);
let p3 = new Person("Pippo", 20);

p1.ageComparison(p3);
p3.ageComparison(p2);

class User {
  // methods,properties,constractor
  userName: string;
  age: number;
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display() {
    console.log(`username:${this.userName}, age:${this.age}`);
  }
}
let user1 = new User("Arifa Islam", 23);
user1.display();
let user2 = new User("Anika Islam", 16);
user2.display();

// class onject

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
let user1  =  new User('arifa',20);
user1.display()

// class object
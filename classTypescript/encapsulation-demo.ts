//  provate,public,protected,readonly
class User {
  protected userName: string;
   age: number;
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(`${this.userName}`);
  }
}
class Student extends User {
  studentId: number;
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
   console.log(`username:${this.userName},`)
  }
}
let user1= new User("arisha",26);
user1.userName="pinky"
console.log("user1",user1);
// user1.userName()

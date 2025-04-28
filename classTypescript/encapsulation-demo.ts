//  provate,public,protected,readonly
class User {
  public userName: string;
  public age: number;
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log("hi");
  }
}
class Student extends User {
  studentId: number;
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log("hi");
  }
}
let user1= new User("arisha",26);
user1.display();

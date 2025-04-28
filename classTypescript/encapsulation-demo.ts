//  provate,public,protected,readonly
class User {
 readonly userName: string;
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
  private studentId: number;
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(`username:${this.userName},id:${this.studentId}`);
  }
  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }
  getStudentId():number{
    return this.studentId
  }
}
let student1 = new Student("minaj apu", 26, 9876);
student1.setStudentId(203)
let user1 = new User("arisha", 26);
 console.log(user1.userName)
// console.log("user1",user1);
// user1.userName()

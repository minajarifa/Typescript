abstract class User {
    userName: string;
    age: number;
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
 abstract   display(): void 
  }
 abstract class Student extends User {
    studentId: number;
    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
 abstract   display(): void 
  }
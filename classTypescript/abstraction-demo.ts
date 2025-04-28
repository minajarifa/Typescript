class User {
    userName: string;
    age: number;
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
    display(): void {
      console.log(`username:${this.userName},age${this.age}`);
    }
  }
  class Student extends User {
    studentId: number;
    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(`username:${this.userName},age${this.age},id:${this.studentId}`);
    }
  }
  let student1 = new Student("Keya", 25, 19277);
  student1.display();
  let user1 = new User("arifa islam", 20);
  user1.display();
  
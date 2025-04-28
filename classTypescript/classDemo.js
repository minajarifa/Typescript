var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username:".concat(this.userName, ", age:").concat(this.age));
    };
    return User;
}());
var user1 = new User("Arifa Islam", 23);
user1.display();
var user2 = new User("Anika Islam", 16);
user2.display();
// class onject

// built in data type: number,string,boolean, void, undefind,null
let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;
userId = 120;
firstName = "Arifa";
lastName = "  Islam";
isActivated = true;
fullName = firstName.concat(lastName);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.split("    "));
console.log(fullName);



function display():void{
    console.log("Hi i am display")
}
display();
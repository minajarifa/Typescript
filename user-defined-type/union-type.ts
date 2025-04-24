let userNum:number|string|boolean;
userNum=120;
userNum="120";
userNum=true

function displayUserInfo(userId:string|number){
    console.log(userId)
}
displayUserInfo("130");
displayUserInfo(130);
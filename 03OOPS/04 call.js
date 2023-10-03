function setUserName(username){
    this.username=username;
}
function user(username,age){
    setUserName.call(this,username);
    this.age=age;
}
const user1=new user("Prashant",22);
console.log(user1)
class User{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
  // ! getter and setter together
    // todo it seems like method but it act as property.
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }
}

const user1=new User("pkumars397@gmail.com","iksjkfjk");
console.log(user1.email)
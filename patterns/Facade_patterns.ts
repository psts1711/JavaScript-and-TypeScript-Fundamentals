// Class Topic: Facade Pattern

interface userType{
     username: string;
     age: number;
     email: string;
}


class User{
    protected username: string;
    protected age: number;
    protected email: string;

    constructor(data:userType)
    {
        this.username = data.username;
        this.age = data.age;
        this.email = data.email;
    }

   

    protected validateUser(){
        console.log('Validating User: ')
    }

    protected saveUser(){
        console.log('Save user using by axios to database');
    }

    protected notifyUser(){
        console.log('Notify that user is saved')
    }
    
}

class userFacade extends User{
    constructor (data:userType)
    {
        super(data)
    }
    validateUserSaveUserAndNotify(){
        this.validateUser();
        this.saveUser();
        this.notifyUser();
    }
}

const myuser = new userFacade({username:"prafful", age:27, email:"test@gmail.com"});
myuser.validateUserSaveUserAndNotify();

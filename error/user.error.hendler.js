module.exports = class UserErrorHendler extends  Error{
    constructor(status,message,error = []){
     super(message)
     this.status=status
     this.error=error
    }
static UserNotfound(message,error=[]){
 return new UserErrorHendler(401,message,error)
}
}
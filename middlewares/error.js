class Errorhandler extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode=statuscode;
    }
}

    //error handling
export const errorMiddleware=(err ,req,res,next)=>{
err.message=err.message || "Internal server error";
err.statuscode=err.statuscode || 500;

if(err.name === "CaseError"){
const message=`Resource not Found . Invalid ${err.path}`;
err = new Errorhandler(message,400);
}

if(err.name === 11000){
    const message=`Dupticate ${Object.keys(err.keyValue)} Entered`;
    err = new Errorhandler(message,400);
}

if(err.name === "JsonWebTokenError"){
    const message=`Json web token is invalid ,Try Again`;
    err = new Errorhandler(message,400);
}

if(err.name === "TokenExpiredError"){
    const message=`Json web token is exprired , Try Again`;
    err = new Errorhandler(message,400);
}

return res.status(statuscode).json({
    success:false,
    message: err.message,
})

};

export default Errorhandler;


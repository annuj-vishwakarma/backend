import { catchAsyncError } from "./catchAsyncError";

export const isAuthorized = catchAsyncError(async(req,res,next)=>{
    const {token}= req.cookies;
})
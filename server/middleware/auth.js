const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const JWT_SECRET = "aveznizaamqureshi";

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const {token}  = req.cookies;
  if (!token) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});


exports.authorizeRoles = (...roles) => {
    return(req,res,next)=>{
        if (!roles.includes(req.user.role)) {
         return next(  new ErrorHander(
                `Role: ${req.user.role} is not allowed to access this resource`,403
                ))
        }
        next();
    }
}
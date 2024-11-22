import jsonwebtoken from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId,res) => {
    const token = jsonwebtoken.sign({userId},process.env.JWT_SECRET,{
        expiresIn :'15d'
    });

    res.cookie("jsonwebtoken",token,{
        maxAge:15*24*60*60*1000,//MS
        httponly: true, // prevent XSS attacks cross site scripting attacks
        sameSite:"strict", //CSRF attacks cross-sites request forgery attacks
        secure: process.env.NODE_ENV !== "development",


    });

};
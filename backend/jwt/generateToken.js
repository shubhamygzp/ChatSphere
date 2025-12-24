import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_TOKEN, {
        expiresIn:"10d"
    });
    res.cookie("jwt", token,{
        httpOnly: true,  // it protect from xss attacks
        secure: true,    // 
        sameSite: "strict" // it protect from csrf
    })
}
export default createTokenAndSaveCookie;
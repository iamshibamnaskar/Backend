const verifyKey = (req, res, next) => {
    const token = req.header("Authorization");
    console.log(token);
    if(token == "joluluv69"){
        next();
    }else{
        res.status(400).json({
            error:"Api Key Not Matched",
            success:false,
        })
    }
};

module.exports = verifyKey;
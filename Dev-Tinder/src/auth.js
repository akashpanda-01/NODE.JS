const adminAuth = (req, res, next) => {
    const token = "xyz";
    const isAuth = token === "xyz";
    if(!isAuth){
        res.status(401).send("Unauthorized");
    } else {
        next();
    };
};


const userAuth = (req, res, next) => {
    const token = "xyz";
    const isAuth = token === "xyz";
    if(!isAuth){
        res.status(401).send("Unauthorized");
    } else {
        next();
    };
};


module.exports = {
    adminAuth,
    userAuth,
};
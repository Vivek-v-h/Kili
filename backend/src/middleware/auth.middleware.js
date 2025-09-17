export const protectRoute = (req, res, next) =>{
    if(!req.auth().isAuthenticated){
        res.status(401);
        throw new Error("Not authorized, please login");
    }
    next();
}
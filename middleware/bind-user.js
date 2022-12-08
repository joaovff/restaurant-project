module.exports = (req, res, next) => {
    console.log("req: ", req.session.currentUser)
    res.locals.user = req.session.currentUser;
    next();
 };
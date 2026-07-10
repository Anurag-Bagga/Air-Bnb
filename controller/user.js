const User = require("../models/user.js");

module.exports.signupRender = (req, res) => {
    res.render("user/signup.ejs");
};

module.exports.signUp =async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registerUser = await User.register(newUser, password);
        req.login(registerUser,(err)=>{
            if(err){
                next(err);
            }
            req.flash("success", "Welcome to WanderLust");
            res.redirect("/listings");
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.loginRender = (req, res) => {
    res.render("user/login.ejs");
};

module.exports.login = (req, res) => {
    req.flash("success","Welcome back to wanderlust You are logged in");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","user is logged out");
        res.redirect("/listings");
    })
};


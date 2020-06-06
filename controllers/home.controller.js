var User = require('../models/user.model');
 const getHome= function(req, res,next) {
  try{
    User.findOne({id:req.signedCookies.userId}).then(function (user ) {     
  res.render("home",{user:user});
     })}
  catch(error){
    res.render('error500',{error});
  }
};
module.exports={
getHome
}
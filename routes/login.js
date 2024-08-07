var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
  });

router.post("/",(req,res)=>{
    const {email , password} = req.body;
        res.send(`email: ${email}, Password: ${password}`);
    
       

})

module.exports = router;

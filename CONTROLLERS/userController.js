const User = require('../MODELS/usermodel')

exports.createUser = async (req,res) =>{
    console.log(req.body)
    var uu = await User.findOne({email:req.body.email})
    var uid;
    if(uu===null){
        var usern = await User.create(req.body);
        // console.log(usern.id);
        uid=usern.id;
    }else{
        var usernow = await User.findOneAndUpdate({email:req.body.email},req.body);
        // console.log(usernow.id);
        uid=usernow.id
    }
    
    res.status(200).json({success:true,id:uid})
}

exports.getUser = async (req,res) => {
    console.log(req.query.id)
    try {
        var user = await User.findById(req.query.id)
        console.log(user);
        if(user==null){
            res.status(400).json({success:false,user:null,error:null})
        }else{
            res.status(200).json({success:true,user:user,error:null})
        }
    } catch (error) {
        res.status(400).json({success:false,user:null,error:error})
    }
}
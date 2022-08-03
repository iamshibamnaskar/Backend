const Post = require('../MODELS/postModel')
const User = require('../MODELS/usermodel')
const Image = require('../MODELS/imageModel')
const Response = require('../MODELS/responsemodel')
const axios = require("axios");
const FormData = require('form-data');


exports.createPost = async (req, res) => {


    


        try {
            var postCreated = await Post.create(req.body);
            res.status(200).json({
                success: true,
                error: null,
                id: postCreated.id
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error: error,
                id: null
            })
        }
   

}

exports.getPosts = async (req,res) =>{
    var allposts = await Post.find({}).sort({ dateofcreation: 'desc'}).exec();

    res.send(allposts)
}

exports.getPostsById = async (req,res) =>{
    var allposts = await Post.find({user:req.body.user}).sort({ dateofcreation: 'desc'}).exec();
    // console.log(allposts)
    
    res.send(allposts)
}

exports.deletePost = async (req,res)=>{
    try {
        var ddd = await Post.findByIdAndDelete(req.body.id)
        res.status(200).json({
            success: true,
            error: null
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            error: error
        })
    }
}

exports.updatePost = async (req,res)=>{
    try {
        var ddd = await Post.findByIdAndUpdate(req.body.id,req.body.update)
        res.status(200).json({
            success: true,
            error: null
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            error: error
        })
    }
}

exports.CreateImage = async (req,res)=>{
    try {
        var ddd = await Image.create(req.body);
        res.status(200).json({
            success: true,
            error: null
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            error: error
        })
    }
}

exports.getImages = async (req,res)=>{
    console.log("hi")
    try {
        var ddd = await Image.find({}).sort({ dateofcreation: 'desc'}).exec();
        res.send(ddd)
    } catch (error) {
        res.status(400).json({
            success: true,
            error: error
        })
    }
}

exports.deleteImage = async (req,res)=>{
    try {
        var ddd = await Image.findByIdAndDelete(req.body.id)
        res.status(200).json({
            success: true,
            error: null
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            error: error
        })
    }
}

exports.createresponse = async(req,res)=>{
    try {
        var ddd = await Response.create(req.body)
        res.status(200).json({
            success: true,
            error: null
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            error: error
        })
    }
}

exports.getResponses = async(req,res)=>{
    try {
        var ddd = await Response.find({}).sort({ dateofcreation: 'desc'}).exec();
        res.send(ddd)
    } catch (error) {
        res.status(400).json({
            success: true,
            error: error
        })
    }
}


// exports.Cazzapost = async (req,res) =>{
//     var user = await User.findById(req.body.id)
//     if(user==null){
//         res.status(400).json({
//             success: false,
//             error: true,
//             id: null
//         })
//     }

//     var postfinal = await Post.findById(req.body.postId)




//     var cazzes = postfinal.cazcount;
//     if(cazzes.includes(user.id)){
//         res.status(400).json({
//             success: false,
//             error: true,
//             messege: 'User Already Cazed'
//         })
//     }
//     cazzes.push(user.id);

//     var pp = await Post.findByIdAndUpdate(req.body.postId,{cazcount:cazzes});


//     res.send("Noice")
// }

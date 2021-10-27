const db = require('../models');

module.exports.getAllUsers = (req,res)=> {
    const allUsers = db.User.findAll(). then(response=>{
    res.send(response)
    }).catch(()=>{
        res.send({
            error: "Something went wrong",
        })
    });
}

module.exports.createUser = async (req,res)=> {
    const {
        email,
        firstName,
        lastName,
    } = req.body
    try{
    const newUser = await db.User.create({
        email,
        firstName,
        lastName,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    
    res.status(201).send(newUser);
} catch(error){
    res.send({
        error:"Something went wrong"
    })
}
}

module.exports.getUserById = (req,res)=> {
    
}

module.exports.updateUser = (req,res)=> {
    
}

module.exports.deleteUser = (req,res)=> {
    
}
const db = require('../models');
const user = require('../models/user');

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

module.exports.getUserById = async ({params},res)=> {
    try{
    const key = params.id;
    const search = await db.User.findByPk(key);
    if (search === null) {
    res.send("Not found!")
    } else {
        res.send(search);
    }
    } catch(error){
        res.send({
            error:"Something went wrong"
        })      
    }
}

module.exports.updateUser = async (req,res)=> {
    const id = req.params.id
    const {
        email,
        firstName,
        lastName,
    } = req.body
    console.log(id+email)
    try{
    await db.User.update({
        email,
        firstName,
        lastName,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
    where:{
        id,
    }
    });
    res.send(await db.User.findByPk(id));
} catch(error){
    res.send({
        error:"Something went wrong"
    })
}
}

module.exports.deleteUser = async (req,res)=> {
    try{
    const id = req.params.id
    await db.User.destroy({
        where: {
          id,
        }
      });
      res.send("Success")
    } catch(error){
        res.send({
            error:"Something went wrong"
        })
    }
}
const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");



router.post("/register", async (req, res) => {
  // console.log(req.body);
  const { name, email, age, mobile, work, add, desc } = req.body;

  if (!name || !email || !age || !mobile || !work || !add || !desc) {
    res.status(422).json("plz fill the data");
  }

  try {
    const preuser = await users.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      res.status(422).json("this is user is already present");
    } else {
      const adduser = new users({
        name,
        email,
        age,
        mobile,
        work,
        add,
        desc,
      });

      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//get all users
router.get('/getdata',async (req,res)=>{
  try {
    const allUsers=await users.find();
    res.status(201).json(allUsers);

    
  } catch (error) {
    res.status(422).json(error);
  }

})

//get indivisual user
router.get('/getuser/:id',async(req,res)=>{
  try {
    const {id}=req.params
    const user=await users.findById({_id:id} );
    res.status(201).json(user);

    
  } catch (error) {
    res.status(422).json(error);
    
  }
})

//update user data

router.patch('/updateuser/:id',async (req,res)=>{
  try {
    const {id}=req.params;
    const updatedUser=await users.findByIdAndUpdate(id,req.body,{
      new:true
    })
    res.status(201).json(updatedUser)
  } catch (error) {
    res.status(422).json(error);
    
  }

})

//delete user
router.delete('/deleteuser/:id',async(req,res)=>{
  try {
    const {id}=req.params
    const deletedUser=await users.findByIdAndDelete({_id:id})
    res.status(201).json(deletedUser)
    
  } catch (error) {
    res.status(422).json(error);
    
  }

})

module.exports = router;

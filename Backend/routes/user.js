const express=require('express')
const router=express.Router()
const User=require('../models/user')

router.post('/signup',async(req,res)=>{
    const address=req.body.address
    const user=new User({
        account:address
    })
    try
    {
        const newUser=await user.save()
        return res.json(newUser).status(200)
    }
    catch(err)
    {
        console.log(err)
        return res.json(err).status(500)
    }
})
module.exports=router;
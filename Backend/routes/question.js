const express=require('express')
const router=express.Router()
const Question=require('../models/question')
const mongodb = require('mongodb');

router.post('/add-question',async(req,res)=>{
    const {userId,title,description,code,codeLanguage,image}=req.body
    
    const question=new Question({
        userId:new mongodb.ObjectId(userId),
        title:title,
        description:description,
        code:code,
        codeLanguage:codeLanguage,
        image:image  
    })
    try
    {
        const newQuestion=await question.save()
        return res.json(newQuestion).status(200)
    }
    catch(err)
    {
        return res.json(err).status(500)
    }
})


router.get('/get-question',async(req,res)=>{
    try {
    const res = await Question.find()
    return res.json(res).status(200)
}
    catch(err)
    {
        return res.json(err).status(500)
    }

})

router.get('/get-question/:id',async(req,res)=>{
    try {

        console.log(req.params.id);
    const res = await Question.find({"userId": new mongodb.ObjectId(req.params.id)})
    return res.json(res).status(200)
}
    catch(err)
    {
        return res.json(err).status(500)
    }
})

router.delete('/delete-question/:id',async(req,res)=>{
    try {
    const res = await Question.findByIdAndDelete(req.params.id)
    return res.json(res).status(200)
}
    catch(err)
    {
        return res.json(err).status(500)
    }
})

module.exports=router;
const Answer=require('../models/answer')
const express=require('express')
const router=express.Router()
router.post('/add-answer',async(req,res)=>{
    console.log("called")
    const {questionId,userId,content,upvotes,downvotes}=req.body
    const answer=new Answer({
        questionId:questionId,
        userId:userId,
        content:content,
        upvotes:upvotes,
        downvotes:downvotes
    })
    try
    {
        const newAnswer=await answer.save()
        return res.json(newAnswer).status(200)
    }
    catch(err)
    {
        return res.json(err).status(500)
    }
})

router.post('/upvote/:id', async (req, res) => {
    try {
        const answerId = req.params.id;
        const userId = req.body.userId; // assuming you're sending the userId in the request body
        const answer = await Answer.findById(answerId);
    
        // check if the user has already upvoted the answer
        const userUpvoted = answer.upvotes.some(upvote => upvote.upvote.toString() === userId);
        if (userUpvoted) {
          return res.status(400).json({ msg: 'User already upvoted this answer' });
        }
    
        // remove the user's downvote if they had downvoted earlier
        const userDownvotedIndex = answer.downvotes.findIndex(downvote => downvote.downvote.toString() === userId);
        if (userDownvotedIndex !== -1) {
          answer.downvotes.splice(userDownvotedIndex, 1);
        }
    
        // add the upvote to the answer document
        answer.upvotes.push({ upvote: userId });
        await answer.save();
    
        res.json(answer);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});
router.post('/downvote/:id', async (req, res) => {
    try {
      const answerId = req.params.id;
      const userId = req.body.userId; // assuming you're sending the userId in the request body
      const answer = await Answer.findById(answerId);
  
      // check if the user has already downvoted the answer
      const userDownvoted = answer.downvotes.some(downvote => downvote.downvote.toString() === userId);
      if (userDownvoted) {
        return res.status(400).json({ msg: 'User already downvoted this answer' });
      }
  
      // remove the user's upvote if they had upvoted earlier
      const userUpvotedIndex = answer.upvotes.findIndex(upvote => upvote.upvote.toString() === userId);
      if (userUpvotedIndex !== -1) {
        answer.upvotes.splice(userUpvotedIndex, 1);
      }
  
      // add the downvote to the answer document
      answer.downvotes.push({ downvote: userId });
      await answer.save();
  
      res.json(answer);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports=router;
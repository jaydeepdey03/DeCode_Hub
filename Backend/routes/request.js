const express = require('express')
const router = express.Router()
const Request = require('../models/request')

router.post('/add_request', async (req, res) => {
    const { address, nftType } = req.body.address
    const request = new Request({
        account: address,
        nftType: nftType,
        isApproved: false
    })
    try {
        const newRequest = await request.save()
        return res.json(newRequest).status(200)
    }
    catch (err) {
        console.log(err)
        return res.json(err).status(500)
    }
})

// router.update('/update_request/:id', async (req, res) => {
//     try {
//         console.log(req.params.id);
//         const question = await Request.find({ "_id": new mongodb.ObjectId(req.params.id) });
//         return res.json(question).status(200);
//     } catch (err) {
//         console.error(err);
//         return res.json(err).status(500);
//     }
// });

module.exports = router;
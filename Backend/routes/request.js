const express = require('express')
const router = express.Router()
const Request = require('../models/request')

router.post('/add-requests', async (req, res) => {
    const { address, nftType } = req.body.address

    const existingRequest = await Request.findOne({ account: address })
    if (existingRequest) {
        return res.status(400).json({ msg: "Request already exists" })
    }
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

router.put('/update-requests/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const request = await Request.find({ "_id": req.params.id });
        request.isApproved = true;
        const updatedRequest = await request.save();
        return res.json(updatedRequest).status(200);
    } catch (err) {
        console.error(err);
        return res.json(err).status(500);
    }
});

// get all non-approved requests
router.get('/get-requests', async (req, res) => {
    try {
        const req = await Request.find({ isApproved: false })
        return res.json(req).status(200)
    }
    catch (err) {
        return res.json(err).status(500)
    }
});

module.exports = router;
const express = require('express')
const router = express.Router();
const checkAuth = require('../../../middleware/check-auth')

router.post('/', checkAuth, async (req, res, next) => {
    try {
        const userId = req.userData.userId;
        res.status(200).json({
            message: "Balley Balley",
            userId
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})
module.exports = router;
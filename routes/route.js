const express = require('express')
const router = express.Router()

// const mummyLink = require('../controllers/likeController')
// router.get("/mummy",mummyLink)
// // router.get("/dummyRoute",dummyLink)
// const {dummyLink} = require('../controllers/postController')
const commentController = require('../controllers/commentController')
router.post("/comments/create",commentController)
module.exports = router
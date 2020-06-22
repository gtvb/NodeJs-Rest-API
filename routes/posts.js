const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//GET all Posts
router.get('/', async (req, res) => {
   try {
      const posts = await Post.find()
      res.json(posts)
   } catch(err) {
       res.json({ message: err })
   }
})


//Submit a Post
router.post('/', async (req, res) => {
   const { title, description } = req.body
   const post = new Post({
      title,
      description
   })

   try {
     const savedPost = await post.save()
      res.json(savedPost)
   } catch(err) {
       res.json({ message: err })
   }
   
})


//GET a specific Post
router.get('/:postId', async (req, res) => {
    try {
       const post = await Post.findById(req.params.postId)
       res.json(post)
    } catch(err) {
        res.json({ message: err })
    }
})

//DELETE a Post 

router.delete('/:postId', async (req, res) => {
    try {
       const removedPost = await Post.remove({ _id: req.params.postId })
       res.json(removedPost)
    } catch(err) {
        res.json({ message: err })
    }
})


//Update a Post

router.patch('/:postId', async (req, res) => {
    const { title } = req.body
    try {
       const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title } })
       res.json(updatedPost)
    } catch(err) {
        res.json({ message: err })
    }
})

module.exports = router

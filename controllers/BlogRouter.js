const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()


// GET: ALL BLOGS
router.get('/:id', async (req, res) => {
    try {
        const blogs = await BlogModel.find({})
        res.send(blogs)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot Get')
    }
})

// GET: Blog by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await BlogModel.findById(req.params.id)
        res.send(blog)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

//POST:  CREATE a NEW BLOG

router.post('/', async (req, res) => {
    try {
        const newBlog = await BlogModel.create(req.body)
        res.send(newBlog)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot create')
    }
    
})

//  PUT:    UPDATE BY ID

router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument': "after"})
        res.send(updatedBlog)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot put')
    }
    
})


// DELETE
router.delete ('/:id', async (req, res) => {
    try {
        await BlogModel.findByIdAndRemove(req.params.id)
        res.send('Blog Deleted')
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot delete')
    }
})


module.exports = router
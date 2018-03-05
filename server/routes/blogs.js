const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
const db = require('../db/models');

router.get('/', (req, res) => {
    db.Blog
    .findAll()
    .then(blogs => {
        res.status(200).json(blogs);
    })
     .catch(err => console.log(err))
});


router.get('/featured', (req, res) => {
    db.Blog
    .findAll({ where: { featured: true } })
    .then(blogs => {
        res.status(200).json(blogs);
    })
    .catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
    db.Blog
    .findById(req.params.id)
    .then(blogs => {
        if(!blogs) {
        return res.status(404).send();
        }
        res.status(200).json(blogs);
    })
     .catch(err => console.log(err))
});


router.post('/', (req, res) => {
    req.body.authorId = req.query.authorId;

    db.Blog
    .create(req.body)
    .then(blog => {
        res.status(201).json(blog);
    })
     .catch(err => console.log(err))
})







router.put('/:id', (req, res) => {
    db.Blog
    .findById(req.params.id)
    .then(blog => {
         blog.update(req.body)
        //I'm missing one line and it is to update te blog with the req.body
        return blog.save();
    })
    .then((blogs) => res.status(204).json(blogs))
    .catch(err => console.log(err))
})




router.delete('/:id', (req, res) => {
    db.Blog
    .findById(req.params.id)
    .then(blog => {
        return blog.destroy();
    })
    .then(() => res.status(200).send())
   .catch(err => console.log(err))
});



module.exports = router;
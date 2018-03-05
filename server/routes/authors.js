const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
const db = require('../db/models');

router.get('/', (req, res) => {
    db.Author
    .findAll()
    .then(authors => {
        res.status(200).json(authors);
    })
     .catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
    db.Author
    .findById(req.params.id)
    .then(authors => {
        if(!authors) {
        return res.status(404).send();
        }
        res.status(200).json(authors);
    })
     .catch(err => console.log(err))
});

router.get('/:id/blogs', (req, res) => {
    db.Blog
    .findAll({ where: { authorId: req.params.id }})
    .then(blogs => res.status(200).json(blogs))
    .catch(err => console.log(err))

});



router.post('/', (req, res) => {
    db.Author
    .create(req.body)
    .then(authors => {
        res.status(201).json(authors);
    })
     .catch(err => console.log(err))
});

router.put('/:id', (req, res) => {
    db.Author
    .findById(req.params.id)
    .then(author => {
         author.update(req.body)
        return author.save();
    })
    .then((authors) => res.status(204).json(authors))
    .catch(err => console.log(err))
})



router.delete('/:id', (req, res) => {
    db.Author
    .findById(req.params.id)
    .then(author => {
        return author.destroy();
    })
    .then(() => res.status(200).send())
   .catch(err => console.log(err))
});



module.exports = router;
const express = require('express');
const Child = require('../../models/Child');

const router = express.Router();

// GET
router.get('/', async (req, res) => {
  try {
    const posts = await Child.find();
    res.send(posts);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// POST
router.post('/', async (req, res) => {
  try {
    const newPost = new Child({
      text: req.body.text,
      gender: req.body.gender,
      fullname: req.body.fullname,
      momnumber: req.body.momnumber,
      dadnumber: req.body.dadnumber,
      group: req.body.group
    });

    const savedPost = await newPost.save();
    res.status(201).send(savedPost);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  try {
    const updated = await Child.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updated) return res.status(404).send({ message: '404 not found' });

    res.send(updated);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Child.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send({ message: '404 not found' });

    res.send(deleted);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;

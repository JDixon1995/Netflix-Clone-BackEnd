const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require('../verifyToken')

//Create

router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body)

    try {
      const savedMovie = await newMovie.save()
      res.status(201),json(savedMovie)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are not allowed!')
  }
})

//Update

router.put('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
          {
            $set: req.body,
          },
          { new: true }
      )
        res.status(201),json(updatedMovie)
      } catch (err) {
        res.status(500).json(err)
    }
    } else {
    res.status(403).json('You are not allowed!')
  }
})

//Delete

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//Get

//Get Random

//Get All

router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const movies = await Movie.find();
        res.status(200).json(movies.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });
  
  module.exports = router;
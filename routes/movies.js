const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require('../verifyToken')

//Create

//Update

//Delete

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
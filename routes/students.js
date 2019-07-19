const express = require('express');
const router = express.Router();
const Studen = require('../models/Students');

router.get("/mathew", (req, res, next) => {
  res.render("mathew");
});

router.get("/horacio", (req, res, next) => {
  res.render("horacio");
});


router.post('/newStudent', (req,res,next)=>{
  let {name, age} = req.body;
})

module.exports = router;
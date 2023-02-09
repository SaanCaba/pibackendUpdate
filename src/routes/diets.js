const express = require('express');
const Diet = require('../models/diet.model');
const router = express.Router()
// me guardo todas las dietas en Diets, con un get.
router.get("/", async (req, res) => {
    var apiDiets = [ 
      "gluten free",
      "dairy free",
      "ketogenic",
      "lacto ovo vegetarian",
      "vegan",
      "pescatarian",
      "paleolithic",
      "primal",
      "fodmap friendly",
      "whole 30",
    ];

    try {

    apiDiets.map(async (d)=> {
        await new Diet({
          name: d
         }).save()
    })

    //en dbDiets tengo un arreglo con todas las dietas.
      const dbDiets = await Diet.find({})
    //es lo que devuelvo.
      return res.status(200).json(dbDiets);
    } catch (error) {
      return res.json(error)
    }
  });



module.exports = router;
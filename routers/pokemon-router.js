const router = require('express').Router();
const Pokemon = require('../helpers/pokemon-model.js');
// const restricted = require('../middleware/restricted.js');
// const validatePlantId = require('../middleware/validate-plant-id.js');
// const checkForPlantData = require('../middleware/check-for-plant-data.js');

// *****************************************
// GET a list of pokemon
// *****************************************
router.get('/', (req, res) => {
  Pokemon.find()
    .then(pokemon => {
      res.status(200).json(pokemon);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Could not receive the list of pokemon' })
    })
})

module.exports = router;
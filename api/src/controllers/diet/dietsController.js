const {Diet} = require("../../db");
const ModelController = require('../modelController');
let dietsController = new ModelController(Diet)
module.exports = dietsController;
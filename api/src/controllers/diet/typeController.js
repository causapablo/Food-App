const {Diet} = require("../../db");
const ModelController = require('../index');
let typeController = new ModelController(Diet)
module.exports = typeController;
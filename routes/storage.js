const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage')
const { createItem ,getItems, getItem, deleteItems } = require('../controllers/storage')
const  { validatorGetItem } = require('../validators/storage')

// crud track

// **Listar Items **
router.get("/", getItems )

// **Obtener un solo Items **
router.get("/:id", validatorGetItem, getItem )

// **Crear Items **
router.post('/', uploadMiddleware.single('myfile'), createItem)
 
// **Eliminar **
router.delete("/:id", validatorGetItem, deleteItems )


module.exports = router
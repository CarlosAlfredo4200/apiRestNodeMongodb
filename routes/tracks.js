const express = require('express');
const router = express.Router()
const { getItems, getItem, createItem, updateItems, deleteItems } = require('../controllers/tracks')
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks')
// crud track

// **Listar Items **
router.get("/", getItems )

// **Obtener un solo Items **
router.get("/:id", validatorGetItem,  getItem )

// **Crear Items **
router.post("/", validatorCreateItem, createItem )

// **Eliminar **
router.put("/:id", validatorGetItem,validatorCreateItem, updateItems )

// **Actualizar **
router.delete("/:id", validatorGetItem , deleteItems )





module.exports = router
const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleError } = require("../utils/handleError");


// Obtener lista
const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR__GET_ITEMS");
}
};


// Obtener detalle
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({ data });
    } catch (error) {
        handleError(res, "ERROR__GET_ITEm");
        
    }
};




// Insertar registro
const createItem = async (req, res) => {
  try {

    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR__CREATE_ITEM");
  }
};



// Actualizar registro
const updateItems = async (req, res) => {
    try {

        const {id, ...body} = matchedData(req);
         
        const data = await tracksModel.findOneAndUpdate(
            id, body
        );
        res.send({ data });
      } catch (error) {
        handleError(res, "ERROR__UPDATE_ITEMS");
      }
};




// Eliminar registro
const deleteItems = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.delete({_id:id});
        res.send({ data });
    } catch (error) {
        handleError(res, "ERROR__DELETE_ITEm");
        
    }
};




module.exports = {
  getItem,
  getItems,
  createItem,
  updateItems,
  deleteItems,
};

const { storageModel } = require('../models');
const { handleError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
const fileSystems = require('fs')


const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

// Obtener lista
const getItems =async (req,res) => {
    try {
        const data = await storageModel.find({})
        res.send({data})
    } catch (error) {
        handleError(res, "ERROR__LIST_ITEMS");
    }
}

// Obtener detalle
const getItem = async (req,res) => {    
    try {
        const {id} = matchedData(req);
        const data = await storageModel.findById(id);
        res.send({data})
    } catch (error) {
        handleError(res, "ERROR__DETAIL_ITEMS");
    }
}

// Insertar registro
const createItem =async (req,res) => {

    try {
        const {body, file } = req;
        console.log(file);
    
        const fileData = {
            filename:file.filename,
            url:`${PUBLIC_URL}/${file.filename}`
        }
        const data = await storageModel.create(fileData)
        res.send({data})
    } catch (error) {
        handleError(res, "ERROR__DETAIL_ITEMS");
    }
   
}


 

// Eliminar registro
const deleteItems = async (req,res) => {
    try {
        const {id} = matchedData(req);
        const dataFile = await storageModel.findById(id);
        await storageModel.delete({_id: id}); 
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;
        fileSystems.unlinkSync(filePath);

        const data = {
            filePath,
            delete:1
        }
        res.send({data})
    } catch (error) {
        handleError(res, "ERROR__DETAIL_ITEMS");
    }
}


module.exports = {

getItem,
getItems,
createItem,
deleteItems
}
const express = require('express');
const fileSystem = require('fs')
const router = express.Router()

const PATH_ROUTERS = __dirname;//ruta absoluta de documento

const removeExtension = (filename) =>{
    return filename.split('.').shift()
}

fileSystem.readdirSync(PATH_ROUTERS).filter((file)=>{
    const name = removeExtension(file);
    if(name !== 'index'){
        console.log(`cargando ruta ${name}`) ;
        
        router.use(`/${name}`, require(`./${file}`));
    }
})



module.exports = router
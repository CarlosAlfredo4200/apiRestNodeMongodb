const customHeader = (req,res,next) => {
    try {
        const apikey = req.headers.api_key;
    } catch (error) {
        res.status(403)
        res.send({error: 'Algo ocurrio'})
    }
}

module.exports = customHeader
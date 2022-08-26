require('dotenv'). config()
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db')


app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

const port= process.env.PORT || 3000;

        // --app.use hace referencia al localhost--

app.use('/api', require('./routes'))

app.listen(port, () =>{
    console.log(`Esta corriendo por el puerto : ${port}`);
})

db()
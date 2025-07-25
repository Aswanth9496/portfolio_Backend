
const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')


const userRoutes = require('./src/routes/routes')

const app = express()

app.use(express.json())
app.use(cors('http://localhost:5173'))

dotenv.config()


app.use('/',userRoutes);


const PORT = process.env.PORT|| 3000


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});

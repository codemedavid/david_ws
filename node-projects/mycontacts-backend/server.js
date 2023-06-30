const express = require("express")
const errorHandler = require("./middleware/errorHandler")
const dotenv = require('dotenv').config()
const app = express()



const port = process.env.PORT || 8000


app.use(express.json())//middleware to send request from client
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errorHandler)
require('./routes/tutorial')(app)



app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
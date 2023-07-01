//load environment variables
if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const app = express()
//Server is now created

app.get("/hello", (req, res) => {
   res.send("Hello World")
})
//direct routes

app.use(express.json())
app.use(express.urlencoded())
//Server is now configured


require('./routes/tutorialRoutes')(app)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
   console.log(`Server is currently running in port ${PORT}`)
})
//Server is now running
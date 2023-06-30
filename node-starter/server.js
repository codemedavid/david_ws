const express = require('express')
const app = express()
//Server is now created
app.use(express.json())
app.use(express.urlencoded())
//Server is now configured
const PORT = 8000
app.listen(PORT, () => {
   console.log(`Server is currently running in port ${PORT}`)
})
//Server is now running
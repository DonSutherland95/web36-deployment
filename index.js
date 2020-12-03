// require('dotenv').config()
// at the top of the index.js

const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 4000

console.log("gang gang gang")
console.log(__dirname)
console.log(process.env.USERNAME)
console.log(process.env.PORT)
console.log(process.env.FOO)
console.log(process.env.LADY)

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/*', (_, res)=>{
    res.json({data: 'I am data, FEAR ME'})
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
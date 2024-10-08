const express = require('express')
const app = express()
const port = process.env.PORT | 8000
// const clientsRoutes = require('./routes/client.route')
const authRoutes = require('./routes/auth.route')
const categoryRoutes = require('./routes/category.route')
const jobRoutes = require('./routes/job.route')
const mongoose = require("mongoose");
const cors = require('cors')
const cookieParser = require('cookie-parser');
require('dotenv').config()




// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    credentials: true
}))
app.use(cookieParser())


// routes
// app.use("/clients",clientsRoutes)
app.use("/",authRoutes)
app.use("/categories",categoryRoutes)
app.use("/jobs",jobRoutes)


mongoose.connect(process.env.MONGOOSE_SECRET_KEY)
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Connection Failed"));


app.listen(port,() => {
    console.log("Server is running on port "+port)
})
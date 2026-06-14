// MVC
// models - done
// views - pending
// controllers - 50%
// connection - done
// routes - 50%
// index
// middlewares - pending

const express = require("express")
const port = 8000
const app = express()


// arch. files import
const { connectMongoDb } = require("./connection")
const employeeRoutes = require("./routes/employee")

app.use(express.json()) // json middleware
// custom middleware pending

connectMongoDb("mongodb://127.0.0.1:27017/company");

app.use("/api/employees", employeeRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

const express = require("express")
const {
    getAllEmployees,
    getEmployeeById,
    createNewUser,
    putEmployee,
    patchEmployee,
    deleteEmployee } = require("../controllers/employee")


const Employee = require("../models/employee")


const router = express.Router();


router.get("/", getAllEmployees);

router.get("/:id", getEmployeeById)

router.post("/", createNewUser)

router.put("/:id", putEmployee);

router.patch("/:id", patchEmployee)

router.delete("/:id", deleteEmployee)


module.exports = router


const Employee = require("../models/employee")

async function getAllEmployees(req, res) {
    const data = await Employee.find({});

    return res.status(200).json(data)
}

async function getEmployeeById(req, res) {
    const emp = await Employee.findById(req.params.id);

    if (!emp) {
        return res.status(400).json({
            msg: "Id invalid"
        })
    }

    return res.status(200).json(emp)
}


async function createNewUser(req, res) {
    const body = req.body;

    if (!body || !body.name || !body.email || !body.job_title) {
        return res.status(400).json({
            msg: "All fields are required"
        })
    }

    const result = await Employee.create({ ...body })
    return res.status(201).json({
        msg: "successful"
    })
}

async function putEmployee(req, res) {
    const id = req.params.id;
    const body = req.body
    const result = await Employee.findByIdAndUpdate(id, { ...body })
    // console.log(result);

    return res.json({
        msg: "success"
    })
}

async function patchEmployee(req, res) {
    const id = req.params.id;
    const body = req.body
    const result = await Employee.findByIdAndUpdate(id, { ...body })
    // console.log(result);

    return res.json({
        msg: "success"
    })
}

async function deleteEmployee(req, res) {
    const id = req.params.id

    const chunk = await Employee.findByIdAndDelete(id)

    return res.json({
        msg:"user deleted successfully",
        chunk:chunk
    })
}


module.exports = {
    getAllEmployees,
    getEmployeeById,
    createNewUser,
    putEmployee,
    patchEmployee,
    deleteEmployee
};

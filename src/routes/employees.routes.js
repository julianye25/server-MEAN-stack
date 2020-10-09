const { Router } = require("express");
const employessCtrl = require("../controllers/employees.controller");

const router = Router();




// CRUD = CREATE - READ- UPDATE - DELETE
// ==========================================

// GET
router.get('/', employessCtrl.getEmployess) 

// POST
router.post('/', employessCtrl.createEmployee )

// GET
// ==========================================
router.get('/:id', employessCtrl.getEmployee)

// PUT
router.put('/:id', employessCtrl.updateEmployee )

// DELETE
router.delete('/:id', employessCtrl.deleteEmployess )

module.exports = router
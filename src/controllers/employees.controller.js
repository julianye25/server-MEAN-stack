const employessCtrl = {}

employessCtrl.getEmployess = (req, res) =>{ 
    res.send('Get employeess');
}

employessCtrl.createEmployee = (req, res) => {
    res.send('Create employee');
}

employessCtrl.getEmployee = (req, res) => {
    res.send('Show employee');
}

employessCtrl.updateEmployee = (req, res) => {
    res.send('Update employee');
}

employessCtrl.deleteEmployess = (req, res) => {
    res.send('Delete employee');
}





module.exports = employessCtrl
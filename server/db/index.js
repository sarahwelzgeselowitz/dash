var Employee = require('./models/employee.js');
var Company = require('./models/company.js');
var db=require('./_db.js');

Company.hasMany(Employee);


module.exports = db;
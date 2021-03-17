// use strict is used so that you have to write clean code fo example you cant use undeclared variables.
'use strict';
//file reading module
var fs        = require('fs');
//path is used to...
var path      = require('path');
//sequelize is an orm 
var Sequelize = require('sequelize');
//pointes to the index file of the models file(file we are in...). which is the db.
var basename  = path.basename(module.filename);
//point to the development db
var env       = process.env.NODE_ENV || 'development';
//points to the connection file
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

//helps the req if the app is running locally or if it is deployed(development vs production)
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
//used to read all of the content of the models directory
  .readdirSync(__dirname)
  // returns the file making sure they are written right
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  //this 'keys' our files into the export object 
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

  // this is the db stored hashed passwords
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// making the connection
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

//https://stackoverflow.com/questions/49480021/sequelize-model-loading-in-nodejs

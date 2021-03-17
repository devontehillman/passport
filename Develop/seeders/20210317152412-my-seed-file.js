
var bcrypt = require("bcryptjs");

 var password = bcrypt.hashSync('Jojo2', bcrypt.genSaltSync(10), null)
 console.log(password)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',[{
      email: 'devontehiman@gmail.com',
      password: 'Jojo2',
      admin: true,
      //createdAt : new Date(),
      //updatedAt : new Date(),
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = await require('../data/data.json').map(el=>{
      el.createdAt = el.updatedAt = new Date();

      return el;
    })
   await queryInterface.bulkInsert('Logos', data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Logos', null);
  }
};

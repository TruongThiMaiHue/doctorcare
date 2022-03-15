const { Sequelize } = require('@sequelize/core')

const sequelize = new Sequelize('bôking', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci', 
    timestamps: true
  },
});

let connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}
module.exports = connectDB
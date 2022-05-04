const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
  {
    username: 'cade99',
    email: 'cade99@cade.com',
    password: 'pwpw'
  },
  {
    username: 'althea',
    email: 'althea@gd.com',
    password: 'pwpw'
  },
  {
    username: 'jimi09',
    email: 'jimi09@cbc.ca',
    password: 'pwpw'
  },
  {
    username: 'zappa77',
    email: 'zappa77@sogou.com',
    password: 'pwpw'
  },
  {
    username: 'paul44',
    email: 'paul44@last.fm',
    password: 'pwpw'
  },
  {
    username: 'danman1',
    email: 'danman1@gmail.com',
    password: 'pwpw'
  },
  {
    username: 'dirk44',
    email: 'dirk44@weather.com',
    password: 'pwpw'
  },
  {
    username: 'missmay66',
    email: 'missmay66@imdb.com',
    password: 'pwpw'
  },
  {
    username: 'ski4life',
    email: 'ski4life@feedburner.com',
    password: 'pwpw'
  },
  {
    username: 'pennies7',
    email: 'pennies7@china.com.cn',
    password: 'pwpw'
  },
  {
    username: 'jdilla',
    email: 'jdilla@epa.gov',
    password: 'pwpw'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
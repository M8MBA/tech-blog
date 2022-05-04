const { Post } = require('../models');

const postdata = [
  {
    title: 'Use bcryptjs when deploying to Heroku',
    content: 'https://www.npmjs.com/package/bcryptjs',
    user_id: 1,
  },
  {
    title: 'Really awesome websites',
    content: 'https://www.hellomonday.com/',
    user_id: 2,
  },
  {
    title: 'Useful icon library for projects',
    content: 'https://fontawesome.com/icons',
    user_id: 3,
  },
  {
    title: 'Build and test frontend code',
    content: 'https://codepen.io/',
    user_id: 4,
  },
  {
    title: 'Practice coding!',
    content: 'https://app.codesignal.com/login',
    user_id: 5,
  },
  {
    title: 'The WORST website of all time!',
    content: 'https://www.theworldsworstwebsiteever.com/',
    user_id: 6,
  },
  {
    title: 'The art of Debugging',
    content: 'https://remysharp.com/2015/10/14/the-art-of-debugging',
    user_id: 7,
  },
  {
    title: '15 Facts About Coding Every Kid Should Know In 2022',
    content: 'https://brightchamps.com/blog/kids-coding-facts/',
    user_id: 8,
  },
  {
    title: 'The History of CSS',
    content: 'https://css-tricks.com/look-back-history-css/',
    user_id: 9,
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
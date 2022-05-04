const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I know I am a handful but that is why you have got two hands.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Failure is the condiment that gives success its flavor.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'If you think you are too small to be effective, you have never been in the dark with a mosquito.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Taking naps sounds so childish. I prefer to call them horizontal life pauses.',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'I walk around like everything is fine, but deep down, inside my shoe, my sock is sliding off.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'The best thing about the future is that it comes one day at a time.',
    user_id: 1,
    post_id: 6
  },
  {
    comment_text: 'Always remember that you are unique, just like everybody else.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'I like long romantic walks down every aisle at Target.',
    user_id: 7,
    post_id: 8
  },
  {
    comment_text: 'I hate when I lose things at work, like pens, papers, sanity and dreams.',
    user_id: 6,
    post_id: 9
  },
  {
    comment_text: 'My keyboard must be broken, I keep hitting the escape key, but I am still at work.',
    user_id: 6,
    post_id: 8
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
# Tech Blog
  
  ## ![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)  

  ## Description
    AS A developer who writes about tech
    I WANT a CMS-style blog site
    SO THAT I can publish articles, blog posts, and my thoughts and opinions

  ### OPEN APP:https://warm-tundra-02579.herokuapp.com/

  <img width="1403" alt="Screen Shot 2022-05-06 at 3 11 33 PM" src="https://user-images.githubusercontent.com/97080366/167217197-9975618f-df5b-4687-876f-e22cc5769f8e.png">
  

  ## Table of Contents:
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [License](#license)
  ###  * [Contributors](#contributors)
  ###  * [Tests](#tests)
  ###  * [Questions](#questions)

  ## Installation
    npm install (installs dependencies listed in package.json)

    In mysql shell run:
    source db/schema.sql
    USE tech_blog_db

    npm run seed (seeds the database using seed file)

  ## Usage
    GIVEN a CMS-style blog site
    WHEN I visit the site for the first time
    THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
    WHEN I click on the homepage option
    THEN I am taken to the homepage
    WHEN I click on any other links in the navigation
    THEN I am prompted to either sign up or sign in
    WHEN I choose to sign up
    THEN I am prompted to create a username and password
    WHEN I click on the sign-up button
    THEN my user credentials are saved and I am logged into the site
    WHEN I revisit the site at a later time and choose to sign in
    THEN I am prompted to enter my username and password
    WHEN I am signed in to the site
    THEN I see navigation links for the homepage, the dashboard, and the option to log out
    WHEN I click on the homepage option in the navigation
    THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
    WHEN I click on an existing blog post
    THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
    WHEN I enter a comment and click on the submit button while signed in
    THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
    WHEN I click on the dashboard option in the navigation
    THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
    WHEN I click on the button to add a new blog post
    THEN I am prompted to enter both a title and contents for my blog post
    WHEN I click on the button to create a new blog post
    THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
    WHEN I click on one of my existing posts in the dashboard
    THEN I am able to delete or update my post and taken back to an updated dashboard
    WHEN I click on the logout option in the navigation
    THEN I am signed out of the site
    WHEN I am idle on the site for more than a set time
    THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


  ## Contributors
    Inquirer.js https://github.com/SBoudrias/Inquirer.js
    mysql2 https://www.npmjs.com/package/mysql2
    dotenv https://www.npmjs.com/package/dotenv
    sequelize https://www.npmjs.com/package/sequelize
    express https://www.npmjs.com/package/express

  ## License MIT  
    https://choosealicense.com/licenses/mit/

  ## Tests
    Run the following commands in your terminal to test this app:

    Invoke the app by running the command: npm start

  ## Questions
  ### If you have any questions, please contact me at
  ### Github: https://github.com/m8mba
  ### or
  ### Email: sauce.ix@gmail.com

Cade
sauce.ix@gmail.com
4thofjuly
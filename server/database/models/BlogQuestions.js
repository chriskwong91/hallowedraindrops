// Schema for Blog Questions
// this information will most likely be filled in by an admin/moderator

var sequelize = require('../config.js').sequelize;
var Sequelize = require('sequelize');

var BlogQuestions = sequelize.define('blog-questions', {
	name: Sequelize.STRING,
	linkedin: Sequelize.STRING,
	github: Sequelize.STRING,
	bootcamp: Sequelize.STRING,
	banner_img: Sequelize.STRING,
	Q1: Sequelize.TEXT,
	Q2: Sequelize.TEXT,
	Q3: Sequelize.TEXT,
	Q4: Sequelize.TEXT,
	Q5: Sequelize.TEXT,
	Q6: Sequelize.TEXT,
	page_comments: Sequelize.TEXT,
	views: Sequelize.INTEGER,
	likes: Sequelize.INTEGER,
	self_blurb: Sequelize.STRING,
	past: Sequelize.STRING,
});

module.exports = BlogQuestions;


/* schema:
- name
- linkedin
- github url
- bootcamp
- banner image
- Q1
- Q2
- Q3
- Q4
- Q5
- Q6
- profile_views
*/
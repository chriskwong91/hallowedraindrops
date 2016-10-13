var chai = require('chai');
var should = chai.should();

/* this file will replace older previous files:
 * fn.js , general.js , int.js , obj.js, string.js
 */
module.exports = {

	/*
	 * overall: we'll be testing two versions, with
	 * the first version being the submitted code made
	 * by the user, and the second version being the
	 * answer pulled from our answers db.
	 * 
	 * subm: the input submitted by the testee
	 * ans : the answer for that question
	*/

	// subm/ans should exist
	shouldExist : function (subm, ans) {
		should.exist(subm);
		should.exist(ans);
	},

	// subm/ans should not exist
	shouldNotExist : function (subm, ans) {
		should.not.exist(subm);
		should.not.exist(ans);
	},

	// subm/ans should Throw
	shouldThrow : function (subm, ans) {
		should.Throw(subm);
		should.Throw(ans);
	},

	// subm/ans should not throw
	shouldNotThrow : function (subm, ans) {
		should.not.Throw(subm);
		should.not.Throw(ans);
	},

	// subm should equal ans
	shouldEqual: function (subm, ans) {
		(subm).should.equal(ans);
	}

}
import Ember from 'ember';

export default Ember.Component.extend({

	titleStrNonMobile: function titleStrNonMobile(){
		var testString = 'This is a test for text.';
		return testString;
	},
	titleRegion: true

});

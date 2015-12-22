import Ember from 'ember';

export default Ember.Component.extend({
	isCurrentPage: false,
	actions: {
		currentPage(){
			this.set('isCurrentPage', true);
		},
		notCurrentPage(){
			this.set('isCurrentPage', false);
		}
	}
});

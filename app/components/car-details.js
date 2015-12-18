import Ember from 'ember';

export default Ember.Component.extend({
	isDetailsLoaded: false,
	actions: {
		detailsShow(){
			this.set('isDetailsLoaded', true);
		},
		detailsHide() {
			this.set('isDetailsLoaded', false);
		}
	}
});

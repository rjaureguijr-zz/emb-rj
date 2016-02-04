import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return Ember.$.getJSON('http://terminal2.expedia.com/x/cars/search?pickupdate=2016-02-13T10%3A00&dropoffdate=2016-02-15T16%3A30&pickuplocation=SFO&dropofflocation=SFO&sort=price&limit=10&apikey=P6xP6GRASTqwsQdYKXmpBBnwuSGUTwJH')
		.then(function(data){
		return data.CarInfoList.CarInfo;
		});
	}
});

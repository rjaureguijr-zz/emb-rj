import Ember from 'ember';

var userHistory = [
			{
				"product": "CAR",
				"type": "SEARCH",
				"carSearch": {
					"id": "1-7910baa5-efe2-44a9-903e-0905d22c76d2-1453480200000-1453998600000-6000403-Chicago, IL, United States (MDW-Midway Intl.)-6000403-Chicago, IL, United States (MDW-Midway Intl.)",
					"pickupDate": "Fri, Jan 22",
					"dropOffDate": "Thu, Jan 28",
					"pickupLocation": "MDW Airport",
					"dropOffLocation": "MDW Airport",
					"deepLink": "/carsearch?time1=1030AM&time2=1030AM&date1=01/22/2016&date2=01/28/2016&rdus=10&view=pickup&locn=Chicago Airport (MDW)&loc2=Chicago Airport (MDW)&dpln=6000403&drid1=6000403",
					"pickupRegionType": "AIRPORT",
					"dropoffRegionType": "AIRPORT",
					"price": "$36",
					"lastSeenDate": "8:42AM",
					"dateTimeFormatType": "SHORT_TIME"
				}
			},
			{
				"product": "CAR",
				"type": "SEARCH",
				"carSearch": {
					"id": "1-7910baa5-efe2-44a9-903e-0905d22c76d2-1453314600000-1454178600000-800132-Bellevue, Washington, United States of America-800132-Bellevue, Washington, United States of America",
					"pickupDate": "Wed, Jan 20",
					"dropOffDate": "Sat, Jan 30",
					"pickupLocation": "Bellevue, Washington, United States of America",
					"dropOffLocation": "Bellevue, Washington, United States of America",
					"deepLink": "/carsearch?time1=1030AM&time2=1030AM&date1=01/20/2016&date2=01/30/2016&rdus=10&view=pickup&locn=Bellevue, Washington, United States of America&loc2=Bellevue, Washington, United States of America&dpln=800132&drid1=800132",
					"pickupRegionType": "NEIGHBORHOOD",
					"dropoffRegionType": "NEIGHBORHOOD",
					"price": "$20",
					"lastSeenDate": "Dec 11",
					"dateTimeFormatType": "MEDIUM_DATE"
				}
			},
			{
				"product": "CAR",
				"type": "SEARCH",
				"carSearch": {
					"id": "1-7910baa5-efe2-44a9-903e-0905d22c76d2-1452105000000-1454178600000-800132-Bellevue, Washington, United States of America-800132-Bellevue, Washington, United States of America",
					"pickupDate": "Wed, Jan 6",
					"dropOffDate": "Sat, Jan 30",
					"pickupLocation": "Bellevue, Washington, United States of America",
					"dropOffLocation": "Bellevue, Washington, United States of America",
					"deepLink": "/carsearch?time1=1030AM&time2=1030AM&date1=01/06/2016&date2=01/30/2016&rdus=10&view=pickup&locn=Bellevue, Washington, United States of America&loc2=Bellevue, Washington, United States of America&dpln=800132&drid1=800132",
					"pickupRegionType": "NEIGHBORHOOD",
					"dropoffRegionType": "NEIGHBORHOOD",
					"price": "$23",
					"lastSeenDate": "Dec 11",
					"dateTimeFormatType": "MEDIUM_DATE"
				}
			},
			{
				"product": "CAR",
				"type": "SEARCH",
				"carSearch": {
					"id": "1-7910baa5-efe2-44a9-903e-0905d22c76d2-1452796200000-1454005800000-800132-Bellevue, Washington, United States of America-800132-Bellevue, Washington, United States of America",
					"pickupDate": "Thu, Jan 14",
					"dropOffDate": "Thu, Jan 28",
					"pickupLocation": "Bellevue, Washington, United States of America",
					"dropOffLocation": "Bellevue, Washington, United States of America",
					"deepLink": "/carsearch?time1=1030AM&time2=1030AM&date1=01/14/2016&date2=01/28/2016&rdus=10&view=pickup&locn=Bellevue, Washington, United States of America&loc2=Bellevue, Washington, United States of America&dpln=800132&drid1=800132",
					"pickupRegionType": "NEIGHBORHOOD",
					"dropoffRegionType": "NEIGHBORHOOD",
					"price": "$22",
					"lastSeenDate": "Dec 9",
					"dateTimeFormatType": "MEDIUM_DATE"
				}
			},
			{
				"product": "AIR",
				"type": "SEARCH",
				"flight": {
					"id": "1-7910baa5-efe2-44a9-903e-0905d22c76d2-ORD-IAD-ROUND_TRIP-2016-02-23-2016-03-01",
					"routeType": "ROUND_TRIP",
					"departureAirportCode": "ORD",
					"arrivalAirportCode": "IAD",
					"departureDate": "Tue, Feb 23",
					"returnDate": "Tue, Mar 1",
					"deepLinkUrl": "/Flights-Search?mode=search&trip=roundtrip&leg1=from:ORD,to:IAD,departure:2/23/2016T&leg2=from:IAD,to:ORD,departure:3/1/2016T&passengers=adults:1,seniors:0,infantinlap:N,children:0[]&options=sortby=price",
					"price": "$196.20",
					"lastSeen": "Dec 3",
					"dateTimeFormatType": "MEDIUM_DATE"
				}
			}
];

export default Ember.Route.extend({
	model(){
	return userHistory;
	/*return Ember.$.getJSON('http://api.github.com/repos/emberjs/ember.js/pulls').then(function(data){
		return data.splice(0,5);
	});*/
	/*return Ember.$.getJSON('http://terminal2.expedia.com/x/cars/search?pickupdate=2015-12-21T10:00&dropoffdate=2015-12-28T16:30&pickuplocation=LAX&dropofflocation=LAX&sort=price&limit=10&apikey=P6xP6GRASTqwsQdYKXmpBBnwuSGUTwJH').then(function(data){
		console.log(data);
	});*/
}
});

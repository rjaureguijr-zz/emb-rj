import Ember from 'ember';

/*var userHistory = [
		{
			"CarMakeModel": "Ford Mustang Convertible",
			"CarClass": "Standard Convertible",
			"TransmissionDriveCode": "1",
			"FuelACCode": "1",
			"SupplierID": "19",
			"SupplierName": "Fox Rental Cars",
			"PickupInfo": {
				"DateTime": "2015-12-22T10:00:00",
				"Location": {
					"Code": "SFO",
					"ShuttleCategory": "ShuttleToCounter",
					"StreetAddress": "780 N Mcdonnell Road",
					"City": "San Francisco",
					"Province": "CA",
					"Country": "USA",
					"GeoLocation": {
						"Latitude": "37.629635",
						"Longitude": "-122.401128"
					}
				}
			},
			"DropOffInfo":{
				"DateTime": "2015-12-29T16:30:00",
				"Location": {
					"Code": "SFO",
					"StreetAddress": "780 N Mcdonnell Road",
					"City": "San Francisco",
					"Province": "CA",
					"Country": "USA",
					"GeoLocation": {
						"Latitude": "37.629635",
						"Longitude": "-122.401128"
					}
				}
			},
			"Capacity": {
				"AdultCount": "4",
				"ChildCount": "0",
				"SmallLuggageCount": "0",
				"LargeLuggageCount": "3"
			},
			"DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQExhVIAAoADD4sl843oRgQAFIAVCpCJAB1i6YAd-iBKAB2wGoAdsBsAED&totalprice=446.48&currency=USD&styp=1&locn=SFO&dtyp=1&loc2=SFO&date1=12%2F22%2F2015&date2=12%2F29%2F2015&time1=1000&time2=1630",
			"RatePeriodCode": "Weekly",
			"Price": {
				"BaseRate": {
					"Value": "295.09",
					"Currency": "USD"
				},
				"TotalRate": {
					"Value": "446.48",
					"Currency": "USD"
				}
			},
			"PrePay": "false",
			"Mileage": {
				"FreeDistance": {
					"UnitCount": "-1"
				}
			},
			"ThumbnailUrl": "https://images.trvl-media.com/cars/19/star_FX_USA_20141106_t.jpg"},
		{
			"CarMakeModel": "Ford Mustang",
			"CarClass": "Standard Convertible",
			"TransmissionDriveCode": "1",
			"FuelACCode": "1",
			"SupplierID": "6",
			"SupplierName": "Alamo Rent A Car",
			"PickupInfo": {
				"DateTime": "2015-12-22T10:00:00",
				"Location": {
					"Code": "SFO",
					"ShuttleCategory": "ShuttleToCar",
					"StreetAddress": "San Francisco Intl Arpt",
					"City": "San Francisco",
					"Province": "CA",
					"Country": "USA",
					"GeoLocation": {
						"Latitude": "37.618934",
						"Longitude": "-122.375882"
					}
				}
			},
			"DropOffInfo": {
				"DateTime": "2015-12-29T16:30:00",
				"Location": {
					"Code": "SFO",
					"StreetAddress": "San Francisco Intl Arpt",
					"City": "San Francisco",
					"Province": "CA",
					"Country": "USA",
					"GeoLocation": {
						"Latitude": "37.618934",
						"Longitude": "-122.375882"
					}
				}
			},
			"Capacity": {
				"AdultCount": "4",
				"ChildCount": "0",
				"SmallLuggageCount": "0",
				"LargeLuggageCount": "0"
			},
			"DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQBhhVIAAoADD4sl843oRgQAFIAVD-HpAB1i6YAb-TBKABigKoAYoCsAED&totalprice=461.94&currency=USD&styp=1&locn=SFO&dtyp=1&loc2=SFO&date1=12%2F22%2F2015&date2=12%2F29%2F2015&time1=1000&time2=1630", "RatePeriodCode": "Weekly", "Price": {"BaseRate": {"Value": "304.22", "Currency": "USD"}, "TotalRate": {"Value": "461.94", "Currency": "USD"}}, "PrePay": "false", "Mileage": {"FreeDistance": {"UnitCount": "-1"}}, "ThumbnailUrl": "https://images.trvl-media.com/cars/6/STARFordMustang_AL_USA_20150217_t.jpg"},
		{
			"CarMakeModel": "Dodge Charger",
			"CarClass": "Premium 2/4Door Car",
			"TransmissionDriveCode": "1",
			"FuelACCode": "1", "SupplierID": "19", "SupplierName": "Fox Rental Cars", "PickupInfo": {"DateTime": "2015-12-22T10:00:00", "Location": {"Code": "SFO", "ShuttleCategory": "ShuttleToCounter", "StreetAddress": "780 N Mcdonnell Road", "City": "San Francisco", "Province": "CA", "Country": "USA", "GeoLocation": {"Latitude": "37.629635", "Longitude": "-122.401128"}}},
			"DropOffInfo": {"DateTime": "2015-12-29T16:30:00", "Location": {"Code": "SFO", "StreetAddress": "780 N Mcdonnell Road", "City": "San Francisco", "Province": "CA", "Country": "USA", "GeoLocation": {"Latitude": "37.629635", "Longitude": "-122.401128"}}}, "Capacity": {"AdultCount": "5", "ChildCount": "0", "SmallLuggageCount": "0", "LargeLuggageCount": "4"}, "DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQExgtIAAoADD4sl843oRgQAFIAVCpCJAB1i6YAd-iBKAB2wGoAdsBsAED&totalprice=462.73&currency=USD&styp=1&locn=SFO&dtyp=1&loc2=SFO&date1=12%2F22%2F2015&date2=12%2F29%2F2015&time1=1000&time2=1630", "RatePeriodCode": "Weekly", "Price": {"BaseRate": {"Value": "306.33", "Currency": "USD"}, "TotalRate": {"Value": "462.73", "Currency": "USD"}}, "PrePay": "false", "Mileage": {"FreeDistance": {"UnitCount": "-1"}}, "ThumbnailUrl": "https://images.trvl-media.com/cars/19/pcar_FX_USA_20141106_t.jpg"},
		{
			"CarMakeModel": "Chrysler 300",
			"CarClass": "Premium 2/4Door Car",
			"TransmissionDriveCode": "1",
			"FuelACCode": "1", "SupplierID": "6", "SupplierName": "Alamo Rent A Car", "PickupInfo": {"DateTime": "2015-12-22T10:00:00", "Location": {"Code": "SFO", "ShuttleCategory": "ShuttleToCar", "StreetAddress": "San Francisco Intl Arpt", "City": "San Francisco", "Province": "CA", "Country": "USA", "GeoLocation": {"Latitude": "37.618934", "Longitude": "-122.375882"}}},
			"DropOffInfo": {"DateTime": "2015-12-29T16:30:00", "Location": {"Code": "SFO", "StreetAddress": "San Francisco Intl Arpt", "City": "San Francisco", "Province": "CA", "Country": "USA", "GeoLocation": {"Latitude": "37.618934", "Longitude": "-122.375882"}}}, "Capacity": {"AdultCount": "5", "ChildCount": "0", "SmallLuggageCount": "0", "LargeLuggageCount": "0"}, "DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQBhgtIAAoADD4sl843oRgQAFIAVDgH5AB1i6YAb-TBKABigKoAYoCsAED&totalprice=464.99&currency=USD&styp=1&locn=SFO&dtyp=1&loc2=SFO&date1=12%2F22%2F2015&date2=12%2F29%2F2015&time1=1000&time2=1630", "RatePeriodCode": "Weekly", "Price": {"BaseRate": {"Value": "306.33", "Currency": "USD"}, "TotalRate": {"Value": "464.99", "Currency": "USD"}}, "PrePay": "false", "Mileage": {"FreeDistance": {"UnitCount": "-1"}}, "ThumbnailUrl": "https://images.trvl-media.com/cars/6/PCARChrysler300_AL_USA_20150217_t.jpg"},
		{
			"CarMakeModel": "Hyundai Accent",
			"CarClass": "Economy 2/4Door Car",
			"TransmissionDriveCode": "1",
			"FuelACCode": "1", "SupplierID": "3", "SupplierName": "Advantage Rent-A-Car", "PickupInfo": {"DateTime": "2015-12-22T10:00:00", "Location": {"Code": "SFO", "ShuttleCategory": "ShuttleToCounter", "StreetAddress": "1288 Old Bayshore Highway", "City": "Burlingame", "Province": "CA", "Country": "USA", "GeoLocation": {"Latitude": "37.592267", "Longitude": "-122.362756"}}},
			"DropOffInfo": {"DateTime": "2015-12-29T16:30:00", "Location": {"Code": "SFO", "StreetAddress": "1288 Old Bayshore Highway", "City": "Burlingame", "Province": "CA", "Country": "USA", "GeoLocation": {"Latitude": "37.592267", "Longitude": "-122.362756"}}}, "Capacity": {"AdultCount": "2", "ChildCount": "3", "SmallLuggageCount": "1", "LargeLuggageCount": "1"}, "DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQAxg2IAAoADD4sl843oRgQAFIAVCaIpAB1i6YAf-jBKABiwKoAYsCsAED&totalprice=475.70&currency=USD&styp=1&locn=SFO&dtyp=1&loc2=SFO&date1=12%2F22%2F2015&date2=12%2F29%2F2015&time1=1000&time2=1630", "RatePeriodCode": "Weekly", "Price": {"BaseRate": {"Value": "310.00", "Currency": "USD"}, "TotalRate": {"Value": "475.70", "Currency": "USD"}}, "PrePay": "false", "Mileage": {"FreeDistance": {"UnitCount": "-1"}}, "ThumbnailUrl": "https://images.trvl-media.com/cars/3/HyundaiAccent_AD_USA_20150312_t.jpg"},
		{
			"CarMakeModel": "Hyundai Accent",
			"CarClass": "Economy 2/4Door Car",
			"TransmissionDriveCode": "1",
			"FuelACCode": "1", "SupplierID": "17", "SupplierName": "EZ Rent-A-Car", "PickupInfo": {"DateTime": "2015-12-22T10:00:00", "Location": {"Code": "SFO", "ShuttleCategory": "ShuttleToCounter"}}, "DropOffInfo": {"DateTime": "2015-12-29T16:30:00", "Location": {"Code": "SFO"}}, "Capacity": {"AdultCount": "4", "ChildCount": "0", "SmallLuggageCount": "2", "LargeLuggageCount": "0"}, "DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQERg2IAAoADD4sl843oRgQAFIAVCaIpAB1i6YAbLqA6ABiwKoAYsCsAED&totalprice=477.99&currency=USD&styp=1&locn=SFO&dtyp=1&loc2=SFO&date1=12%2F22%2F2015&date2=12%2F29%2F2015&time1=1000&time2=1630", "RatePeriodCode": "Weekly", "Price": {"BaseRate": {"Value": "311.57", "Currency": "USD"}, "TotalRate": {"Value": "477.99", "Currency": "USD"}}, "PrePay": "false", "Mileage": {"FreeDistance": {"UnitCount": "-1"}}, "ThumbnailUrl": "https://images.trvl-media.com/cars/17/hyundai-accent_EZ_USA_20140221_t.jpg"},
		{
			"CarMakeModel": "Kia Soul",
			"CarClass": "Compact 2/4Door Car",
			"TransmissionDriveCode": "1",
			"FuelACCode": "1", "SupplierID": "3", "SupplierName": "Advantage Rent-A-Car", "PickupInfo": {"DateTime": "2015-12-22T10:00:00", "Location": {"Code": "SFO", "ShuttleCategory": "ShuttleToCounter", "StreetAddress": "1288 Old Bayshore Highway", "City": "Burlingame", "Province": "CA", "Country": "USA", "GeoLocation": {"Latitude": "37.592267", "Longitude": "-122.362756"}}},
			"DropOffInfo": {"DateTime": "2015-12-29T16:30:00", "Location": {"Code": "SFO", "StreetAddress": "1288 Old Bayshore Highway", "City": "Burlingame", "Province": "CA", "Country": "USA", "GeoLocation": {"Latitude": "37.592267", "Longitude": "-122.362756"}}}, "Capacity": {"AdultCount": "4", "ChildCount": "1", "SmallLuggageCount": "2", "LargeLuggageCount": "1"}, "DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQAxghIAAoADD4sl843oRgQAFIAVCaIpAB1i6YAf-jBKABiwKoAYsCsAED&totalprice=483.00&currency=USD&styp=1&locn=SFO&dtyp=1&loc2=SFO&date1=12%2F22%2F2015&date2=12%2F29%2F2015&time1=1000&time2=1630", "RatePeriodCode": "Weekly", "Price": {"BaseRate": {"Value": "315.00", "Currency": "USD"}, "TotalRate": {"Value": "483.00", "Currency": "USD"}}, "PrePay": "false", "Mileage": {"FreeDistance": {"UnitCount": "-1"}}, "ThumbnailUrl": "https://images.trvl-media.com/cars/3/KiaSoul_AD_USA_20150312_t.jpg"},
		{
			"CarMakeModel": "Ford Focus",
			"CarClass": "Compact 2/4Door Car",
			"TransmissionDriveCode": "1",
			"FuelACCode": "1", "SupplierID": "17", "SupplierName": "EZ Rent-A-Car", "PickupInfo": {"DateTime": "2015-12-22T10:00:00", "Location": {"Code": "SFO", "ShuttleCategory": "ShuttleToCounter"}}, "DropOffInfo": {"DateTime": "2015-12-29T16:30:00", "Location": {"Code": "SFO"}}, "Capacity": {"AdultCount": "5", "ChildCount": "0", "SmallLuggageCount": "2", "LargeLuggageCount": "0"}, "DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQERghIAAoADD4sl843oRgQAFIAVCaIpAB1i6YAbLqA6ABiwKoAYsCsAED&totalprice=485.28&currency=USD&styp=1&locn=SFO&dtyp=1&loc2=SFO&date1=12%2F22%2F2015&date2=12%2F29%2F2015&time1=1000&time2=1630", "RatePeriodCode": "Weekly", "Price": {"BaseRate": {"Value": "316.57", "Currency": "USD"}, "TotalRate": {"Value": "485.28", "Currency": "USD"}}, "PrePay": "false", "Mileage": {"FreeDistance": {"UnitCount": "-1"}}, "ThumbnailUrl": "https://images.trvl-media.com/cars/17/ford-focus_EZ_USA_20140221_t.jpg"},
		{
			"CarMakeModel": "Hyundai Elantra",
			"CarClass": "Midsize 2/4Door Car",
			"TransmissionDriveCode": "1",
			"FuelACCode": "1", "SupplierID": "3", "SupplierName": "Advantage Rent-A-Car", "PickupInfo": {"DateTime": "2015-12-22T10:00:00", "Location": {"Code": "SFO", "ShuttleCategory": "ShuttleToCounter", "StreetAddress": "1288 Old Bayshore Highway", "City": "Burlingame", "Province": "CA", "Country": "USA", "GeoLocation": {"Latitude": "37.592267", "Longitude": "-122.362756"}}},
			"DropOffInfo": {"DateTime": "2015-12-29T16:30:00", "Location": {"Code": "SFO", "StreetAddress": "1288 Old Bayshore Highway", "City": "Burlingame", "Province": "CA", "Country": "USA", "GeoLocation": {"Latitude": "37.592267", "Longitude": "-122.362756"}}}, "Capacity": {"AdultCount": "4", "ChildCount": "1", "SmallLuggageCount": "1", "LargeLuggageCount": "2"}, "DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQAxg1IAAoADD4sl843oRgQAFIAVCaIpAB1i6YAf-jBKABiwKoAYsCsAED&totalprice=493.21&currency=USD&styp=1&locn=SFO&dtyp=1&loc2=SFO&date1=12%2F22%2F2015&date2=12%2F29%2F2015&time1=1000&time2=1630", "RatePeriodCode": "Weekly", "Price": {"BaseRate": {"Value": "322.00", "Currency": "USD"}, "TotalRate": {"Value": "493.21", "Currency": "USD"}}, "PrePay": "false", "Mileage": {"FreeDistance": {"UnitCount": "-1"}}, "ThumbnailUrl": "https://images.trvl-media.com/cars/3/HyundaiElantra_AD_USA_20150312_t.jpg"},
		{
			"CarMakeModel": "Hyundai Elantra",
			"CarClass": "Midsize 2/4Door Car",
			"TransmissionDriveCode": "1",
			"FuelACCode": "1", "SupplierID": "17", "SupplierName": "EZ Rent-A-Car", "PickupInfo": {"DateTime": "2015-12-22T10:00:00", "Location": {"Code": "SFO", "ShuttleCategory": "ShuttleToCounter"}}, "DropOffInfo": {"DateTime": "2015-12-29T16:30:00", "Location": {"Code": "SFO"}}, "Capacity": {"AdultCount": "5", "ChildCount": "0", "SmallLuggageCount": "3", "LargeLuggageCount": "0"}, "DetailsUrl": "http://www.expedia.com/carsearch?piid=AQAQAQERg1IAAoADD4sl843oRgQAFIAVCaIpAB1i6YAbLqA6ABiwKoAYsCsAED&totalprice=495.49&currency=USD&styp=1&locn=SFO&dtyp=1&loc2=SFO&date1=12%2F22%2F2015&date2=12%2F29%2F2015&time1=1000&time2=1630", "RatePeriodCode": "Weekly", "Price": {"BaseRate": {"Value": "323.56", "Currency": "USD"}, "TotalRate": {"Value": "495.49", "Currency": "USD"}}, "PrePay": "false", "Mileage": {"FreeDistance": {"UnitCount": "-1"}}, "ThumbnailUrl": "https://images.trvl-media.com/cars/17/hyundai-elantra_EZ_USA_20140221_t.jpg"}
];*/

export default
Ember.Route.extend({
	model(){
	//return userHistory;
	return Ember.$.getJSON('http://terminal2.expedia.com/x/cars/search?pickupdate=2015-12-22T10%3A00&dropoffdate=2015-12-29T16%3A30&pickuplocation=SFO&dropofflocation=SFO&sort=price&limit=10&apikey=P6xP6GRASTqwsQdYKXmpBBnwuSGUTwJH')
		.then(function(data){
			console.log(data);
		});
	}
});

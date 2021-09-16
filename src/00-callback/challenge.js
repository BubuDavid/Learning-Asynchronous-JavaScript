let XMLHttpRquest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';


function fetchData(url_api, callback) {
	let xhttp = new XMLHttpRquest();
	// We open page with GET method
	// Remember we need this to be async
	// so we pass the async argument as true.
	xhttp.open('GET', url_api, async=true);
	// Listen to any changes on the state of our xhttp request.
	xhttp.onreadystatechange = (e) => {
		// Check the state of our api call
		// There are 5 states, 0->initialize
		// 1->loading, 2->loaded, 3-> Download
		// 4 -> Complete! We want this one.
		if(xhttp.readyState === 4) {
			// If it is complete we need to know
			// the request status (200, 500) state.
			if (xhttp.status === 200) {
			// Now we call our callback function
			// convention says callback(error, response)
			// And the response has to be on JSON format
			callback(null, JSON.parse(xhttp.responseText));
			} else {
			// If we got an error then send the error
			const error = new Error('Error ' + url_api);
			return callback(error, null)
			}
		}
	}
	// We need to send the request, all the above lines
	// are for initialize and set up our xhttp object
	// this is the actual execution request line.
	xhttp.send();
}

// Lets call the api!
fetchData(API, (error1, data1) => {
	// Validate if there is no errors
	if(error1) return console.error(error1);
	// We need another call
	// We already know the structure because we did it on postman
	fetchData(API + data1.results[0].id, (error2, data2) => {
		if(error2) return console.error(error2);

		fetchData(data2.origin.url, (error3, data3) => {
			if(error3) return console.error(error3);

			console.log(data1.info.count);
			console.log(data2.name);
			console.log(data3.dimension);
		});
	});
});
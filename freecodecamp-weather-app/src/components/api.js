export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c20156c78msh152cda901f846b7p103ce7jsna94c9511cf1b',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', geoApiOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
var map = L.map('mapid').setView([38.627, -90.199], 12);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

var marker = L.marker([38.64609159524114, -90.26150473914255]).addTo(map);
var marker2 = L.marker([38.635170846347506, -90.22401682117703]).addTo(map);
var marker3 = L.marker([38.5945750393188, -90.33855777034898]).addTo(map);
var marker4 = L.marker([38.595394090074805, -90.23166593014328]).addTo(map);
var marker5 = L.marker([38.5989987517414, -90.27123544161336]).addTo(map);

marker.bindPopup("<b>Resturant 1 </b><br> Taste of Lebanon").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>Pappy's").openPopup();
marker3.bindPopup("<b>Resturant 3</b><br>Balkan Treat Box").openPopup();
marker4.bindPopup("<b>Resturant 4</b><br>Diana's Bakery").openPopup();
marker5.bindPopup("<b>Resturant 5</b><br>Uncle Bill's Pancakes").openPopup();


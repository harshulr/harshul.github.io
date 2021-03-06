function logClicks(a, b) {
	clickLocations.push({
		x : a,
		y : b
	}), console.log("x location: " + a + "; y location: " + b)
}
function initializeMap() {
	function a() {
		var a = [];
		for ( var b in bio.contacts)
			a.push(bio.contacts[b].location);
		for ( var c in education.schools)
			a.push(education.schools[c].location);
		for ( var d in work.jobs)
			a.push(work.jobs[d].location);
		return a
	}
	function b(a) {
		var b = a.geometry.location.lat(), c = a.geometry.location.lng(), d = a.formatted_address, e = window.mapBounds, f = new google.maps.Marker(
				{
					map : map,
					position : a.geometry.location,
					title : d
				}), g = new google.maps.InfoWindow({
			content : d
		});
		google.maps.event.addListener(f, "click", function() {
			g.open(map, f)
		}), e.extend(new google.maps.LatLng(b, c)), map.fitBounds(e), map
				.setCenter(e.getCenter())
	}
	function c(a, c) {
		c == google.maps.places.PlacesServiceStatus.OK && b(a[0])
	}
	function d(a) {
		var b = new google.maps.places.PlacesService(map);
		for ( var d in a) {
			var e = {
				query : a[d]
			};
			b.textSearch(e, c)
		}
	}
	var e, f = {
		disableDefaultUI : !1
	};
	map = new google.maps.Map(document.querySelector("#map"), f),
			window.mapBounds = new google.maps.LatLngBounds, e = a(), d(e)
}
var HTMLheaderName = '<h1 id="name">%data%</h1>', HTMLheaderRole = "<span>%data%</span><hr/>", HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>', HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>', HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>', HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>', HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>', HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>', HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>', HTMLbioPic = '<img src="%data%" class="biopic">', HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>', HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>', HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>', HTMLworkStart = '<div class="work-entry"></div>', HTMLworkEmployer = '<a href="#" target="_blank">%data%', HTMLworkTitle = " - %data%</a>", HTMLworkDates = '<div class="date-text">%data%</div>', HTMLworkLocation = '<div class="location-text">%data%</div>', HTMLworkDescription = "<p><br>%data%</p>", HTMLprojectStart = '<div class="project-entry"></div>', HTMLprojectTitle = '<a href="#" target="_blank">%data%</a>', HTMLprojectDates = '<div class="date-text">%data%</div>', HTMLprojectDescription = "<p><br>%data%</p>", HTMLprojectImage = '<img src="%data%" width=20%>', HTMLprojectNoImage = "<h4>No Image Available - or dispaly a default image - or just add line-space</h4>", HTMLschoolStart = '<div class="education-entry"></div>', HTMLschoolName = '<a href="#" target="_blank">%data%', HTMLschoolDegree = " -- %data%</a>", HTMLschoolDates = '<div class="date-text">%data%</div>', HTMLschoolLocation = '<div class="location-text">%data%</div>', HTMLschoolMajor = "<em><br>Major: %data%</em>", HTMLonlineClasses = "<h3>Online Classes</h3>", HTMLonlineTitle = '<a href="#" target="_blank">%data%', HTMLonlineSchool = " - %data%</a>", HTMLonlineDates = '<div class="date-text">%data%</div>', HTMLonlineURL = '<br><a href="#" target="_blank">%data%</a>', internationalizeButton = "<button>Internationalize</button>", googleMap = '<div id="map"></div>';
$(document).ready(function() {
	$("button").click(function() {
		var a = inName() || function() {
		};
		$("#name").html(a)
	})
}), clickLocations = [], $(document).click(function(a) {
	logClicks(a.pageX, a.pageY)
});
var map;
window.addEventListener("load", initializeMap), window.addEventListener(
		"resize", function(a) {
			map.fitBounds(mapBounds)
		});
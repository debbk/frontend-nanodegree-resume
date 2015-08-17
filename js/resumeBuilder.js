//Biography object
var bio = {
	"name": "Deborah King",
	"role": "Entrepreneur",
	"contacts": [{
		"mobile": "416-555-5555",
		"email": "lyamblear@gmail.com",
		"location": "Toronto, Ontario",
		"twitter": "@lyambear",
		"github": "debbk"
	}],
	"welcomeMsg": "I'm a cat or a dog.  I have an identity crisis.  If you really want to see me you'll make an effort to call me, wait very patiently for me and then pet me affectionately for hours.  Bring catnip.",
	"skills": ["Project Management", "Strategic Planning", "Contact Management", "Six Sigma and Lean"],
	"bioPic": "images/lyam.jpg"
};

//Work Object
var work ={
	"places": [
		{
			"title": "Quality Improvement Analyst",
			"employer": "Halton Region",
			"location": "Oakville, Ontario",
			"dates": "September 2012 - Present",
			"description":"Fancy government stuff"
		},
		{
			"title": "Project Manager",
			"employer": "Purolator Inc.",
			"location": "Mississagua, Ontario",
			"dates": "April 2011 - September 2012",
			"description":"Fancy purolator stuff"
		}
	]
};

//Project object
var projects={
	"item": [
	{
		"title": "Upgrade WAN, LAN and BCM system",
		"description": "Worked with CGI, Bell, Innovapost and Canada Post to upgrade applicable systems",
		"dates": "May 2011",
		"institute": "Purolator",
		"image":"images/pro1.jpg"
	},
	{
		"title": "Implement a document management system",
		"description": "Worked with 5 internal stakeholders to implement a document management system",
		"dates": "May 2011",
		"institute": "Purolator",
		"image":"images/pro2.jpg"
	},
	{
		"title": "Create an online portfolio",
		"description": "Apply HTML and CSS best practices to produce an online portfolio",
		"dates": "July 2015",
		"institute": "Udacity",
		"image":"images/pro3.jpg"
	}
	]
}

//Education object
var education = {
	"schools": [
		{
			"name": "University of Toronto",
			"location": "Toronto, Ontario",
			"degree": "BA",
			"date": "2006",
			"major": "Industrial Engineering"
		},
		{
			"name": "University of Cats",
			"location": "Toronto, Ontario",
			"degree": "Masters",
			"date": "2009",
			"major": "Cattitude"
		}
	],
	"online": [
		{
			"school": "Udacity",
			"title": "Front End Web Developer Nanodegree",
			"date": "2016",
			"URL": "https://www.udacity.com/"
		}
	]
};

//Display Bio Object
bio.display = function() {
	//Format Name, Role, Bio Pic and Welcome Message
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedpic = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
	$("#header").prepend(formattedName,formattedRole).append(formattedpic,formattedMsg);
	//Include Contact information
	for (contact in bio.contacts) {
		var formattedmobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedemail= HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedgit = HTMLgithub.replace("%data%",bio.contacts[contact].github);
		var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts[contact].twitter);
		var formattedlocation = HTMLlocation.replace("%data%",bio.contacts[contact].location);
		$("#topContacts").append(formattedmobile,formattedemail,formattedlocation);//,formattedgit,formattedtwitter);
		$("#footerContacts").append(formattedmobile,formattedemail,formattedgit,formattedtwitter,formattedlocation);
	}
	//Check for and format any skills
	if (bio.skills!==0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}
bio.display();

//Display Work Object
work.display = function() {
	for (place in work.places){
		$("#workExperience").append(HTMLworkStart);
		//Format employer, title, location, dates and description
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.places[place].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.places[place].title);
		var formattedEmployerTitle = formattedEmployer +formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%",work.places[place].location);
		var formattedDates = HTMLworkDates.replace("%data%",work.places[place].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.places[place].description);
		//Append formatted data
		$(".work-entry:last").append(formattedEmployerTitle,formattedLocation,formattedDates,formattedDescription);
	}
}
work.display();

//Display projects object
projects.display = function () {
	//Append project info
	for (items in projects.item){
		$("#projects").append(HTMLprojectStart);
		//Format project title, dates and description
		var formattedprotitle = HTMLprojectTitle.replace("%data%",projects.item[items].title);
		var formatteddates = HTMLprojectDates.replace("%data%",projects.item[items].dates);
		var formatteddescrip = HTMLprojectDescription.replace("%data%",projects.item[items].description);
		var formattedpic = HTMLprojectImage.replace("%data%",projects.item[items].image);
		//Append project entries
		$(".project-entry:last").append(formattedprotitle,formatteddates,formatteddescrip);
		$(".project-entry:last").append(formattedpic);
	}
}
projects.display();

//Display Education object
education.display = function() {
	for (schools in education.schools){
		$("#education").append(HTMLschoolStart);
		//Format Name, City, Degree and Major
		var formattedName = HTMLschoolName.replace("%data%",education.schools[schools].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[schools].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[schools].date);
		var formattedlocation = HTMLschoolLocation.replace("%data%",education.schools[schools].location);
		var formattedmajor = HTMLschoolMajor.replace("%data%",education.schools[schools].major);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedlocation,formattedmajor);
	};
	//check for and format any online courses
	if (education.online!==0) {
		$(".education-entry:last").append(HTMLonlineClasses);
		for (item in education.online){
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.online[item].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.online[item].school);
			var formattedDates = HTMLonlineDates.replace("%data%",education.online[item].date);
			var formattedURL = HTMLonlineURL.replace("%data%",education.online[item].URL);
			$(".education-entry:last").append(formattedTitle + formattedSchool, formattedDates,formattedURL);
		}
	}
}
education.display();

//Display x and y coordinates of mouse click in console
$(document).click(function(loc){
	var x = loc.pageX;  //or clientX
	var y = loc.pageY;  //or clientY
	logClicks(x,y);
})

/*--Internationalize Button Code--*/
//Function to Capitalize first letter of first name
//and Capitalize all letters of last name
function inName(){
	var finalName = bio.name.trim().split(" ");
	finalName[0] = finalName[0].charAt(0).toUpperCase()+finalName[0].substr(1).toLowerCase();
	finalName[1] = finalName[1].toUpperCase();
	finalName = finalName.toString();
	finalName = finalName.replace(",", " ");
	return(finalName);
}
//Append an internationalize button to the main div
$("#main").append(internationalizeButton);

//Display a map
$("#mapDiv").append(googleMap);
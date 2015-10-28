var work={
	"jobs":[
		{
			"employer":"HomeLane",
			"title":"Software Engineer Intern",
			"location":"Bangalore",
			"dates":"December 2014 - May 2015",
			"description":"Programmed and maintained an internal web application used for interior designing. Built modules for automatic generation of reports, quotations which facilitated quicker deliveries and increase in sales"
		}
	]
}

var projects={
	"projects":[
		{
			"title":"Business Process Automation",
			"dates":"December 2014 - May 2015",
			"description":"Created an web application which allows the company to quickly automate their tasks like creating quotation, reports and many more."
		},	
		{
			"title":"A website for technical symposium",
			"dates":"December 2013 - January 2014",
			"description":"Created and maintained a website for my College's national level technical symposium Cyberfest 2014."
		}

	]
}

var bio ={
	"name": "Meenakshi Sundar",
	"role": "Software Developer",
	"contacts":{
		"email": "mnkshsundar1@gmail.com",
		"github": "sundar-m",
		"location": "Bangalore, Karnataka, India"
	},
	"welcomeMessage":"Welcome to my page",
	"skills": ["JS","PHP","Java","Software Development"]
}

var education ={
	"schools":[
		{
			"name": "Sri Ramakrishna Engineering College",
			"city": "Coimbatore",
			"degree": "B.Sc",
			"major": ["Computer Technology"],
			"dates": 2010,
			"url": "www.srec.ac.in"
		},
		{
			"name": "Coimbatore Institute Of Technology",
			"city" :"Coimbatore",
			"degree": "Masters",
			"major": ["Computer Application"],
			"dates": 2015,
			"url": "www.cit.edu.in"
		}
	]
}


		var formattedName= HTMLheaderName.replace("%data%",bio.name);
		var formattedRole= HTMLheaderRole.replace("%data%",bio.role);
		var formattedEmail= HTMLemail.replace("%data%",bio.email);
		var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedMsg);
	
var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork(){

	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle=HTMLEmployerTitle=formattedEmployer+formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

function displayProjects(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		
	}
}
displayProjects();

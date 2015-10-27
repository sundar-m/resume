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
			"dates":"Decemeber 2014 - May 2015",
			"description":"Created an web application which allows the company to quickly automate their tasks like creating quotation, reports and many more."
		},	
		{
			"title":"A website for technical symposium",
			"dates":"Decemeber 2013 - January 2014",
			"description":"Created and maintained a website for my department's national level techmical symposium."
		}

	]
}

var bio ={
	"name": "Meenakshi Sundar",
	"role": "Developer",
	"welcomeMessage":"Welcome to my page",
	"contacts":{
		"email": "mnkshsundar1@gmail.com",
		"location": "Bangalore"
	},
	"skills": ["JS","PHP","Java"]
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

projects.display=function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle=HTMLProjectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription=HTMLprojectDecription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		
	}
}
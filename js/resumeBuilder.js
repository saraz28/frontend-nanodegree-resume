var bio = {
    "name": "Sara Alzeer",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+966503302077",
        "email": "saramoha288@gmail.com",
        "github": "saraz28",
        "location": "Riyadh"
    },
    "welcomeMessage": "Hello, I'm available for work.",
    "skills": [
        "Microsoft Office", "Adobe Photoshop", "java", "HTML", "CSS", "Javascript", "Team Worker", "Communication"
    ],
    "biopic": "images/Profile.jpg"
};

var education = {
    "schools": [{
        "name": "Princess Norah bint Abdulrhman Univercity",
        "location": "Al Imam Abdullah Ibn Saud Ibn Abdul Aziz Road، King Khalid International Airport, Riyadh",
        "degree": "BA",
        "majors": ["CS"],
        "dates": "2012",
        "url": "http://www.pnu.edu.sa",
    }],
    "onlineCources": [{
        "title": "Front-End Developer Nanodegree Program",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://sa.udacity.com/",
    }]
};

var work = {
    "jobs": [{
            "employer": "Deanship of E-Learning and Distance Education",
            "title": "Analyst systems and Database Designer Trainee",
            "location": "Al Imam Abdullah Ibn Saud Ibn Abdul Aziz Road، King Khalid International Airport, Riyadh",
            "dates": "Feb 2017 - Apr 2017",
            "description": "Create a database of courses and workshops provided by the deanship and preparing reports. After that designing interfaces for admin which will have full Permissions and users one for extract report and the other for coordinators"
        },

    ]
};

var projects = {
    "projects": [{
        "title": "Mobile App for Meal Ordering",
        "dates": "2016",
        "description": "This paper reveals the process that have been adopted " +
            "in the establishment of a mobile application for meal ordering in the food" +
            "court of our university Princess Noura Bint AbdulRahman." +
            "The application currently mainly serves the faculty and administration of our college the Computer and Information Science College." + "The application allows users to order from all existing restaurants" +
            "in the food court and choose the time of delivery to their office." +
            "It saves time by avoiding standing in lines as well as other features presented in the paper." +
            "The history of online food ordering in general from 1996 to 2015 has been studied and briefly listed in our work" +
            "as part of the background. We have chosen some of the best online ordering applications to compare in the related work section." + "The application is called “Food on the Road” and has been tested by different college employees." +
            "We then conducted a survey and collected the results." +
            "The result show many of the users enjoyed the features the application serves" +
            "and there some additional features acquired to be done in the future work.",

        "images": [
            "images/signup.png",
            "images/foodlist.png"
        ]
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    //header contacts information     
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedmobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedemail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);
    //Footer contacts information     
    $("#footerContacts").append(formattedmobile);
    $("#footerContacts").append(formattedemail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedlocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();


education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedlocation);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
    }
    if (education.onlineCources.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for (onlineCource = 0; onlineCource < education.onlineCources.length; onlineCource++) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCources[onlineCource].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCources[onlineCource].school);
            var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedTitleSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCources[onlineCource].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCources[onlineCource].url);
            $(".education-entry:last").append(formattedOnlineUrl);

        }
    }
};

education.display();


work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDesription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDesription);
    }
};
work.display();

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var fotmattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(fotmattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

function locationizer(work_obj) {
    var locationArray = [];
    for (job = 0; job < work_obj.jobs.length; job++) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}
console.log(locationizer(work));

$("#mapDiv").append(googleMap);
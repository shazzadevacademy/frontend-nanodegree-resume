//Bio

var bio = {
        "name" : "Sharon Rumsey",
        "role" : "Web Developer",
        "welcomeMessage" : "Hire Me!",
        "contacts" : {
            "mobile" : "Mobile: 027-240-1705 ",
            "email" : "Email: sharon@rumsey.nz ",
            "github" :"Github: shazzadevacademy ",
            "twitter" : "@DevShazza",
            "location" : "Location: Wellington, New Zealand "},
        "bioPic" : "./images/sharon.jpg", 
        "skills" : ["Awesome" , " Hope to be Programmer", "JavaScript Wannabe", "Wife & Mummy"]
  }

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedName + formattedRole);
  $("#header").prepend(formattedName + formattedName);

//Header Info
  // var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  // $("#header").append(formatedEmail);

  // var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  // $("#header").append(formatedGithub);

  // var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  // $("#header").append(formatedmobile);

  // var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
  // $("#header").append(formattedLocation);

  // var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  // $("#header").append(formattedbioPic);

  // var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome);
  // $("#header").append(formattedwelcomeMess);

// displayBio();


//skills
if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);
    }



var work = {
  "jobs" : [
    {
      "employer"    : "Watkins Group Limited",
      "title"       : "Allocations and Accounts Manager",
      "location"    : "Company located in Christchurch, New Zealand although I worked from home in Wellington",
      "dates"       : "From June 2015 to January 2016",
      "description" : "Contract with Watkins Group to process building consents and certificates of acceptance for allocation with Christchurch City Council, as well as provide accounts management using Xero and WorkFlowMax for Regulatory, Consultancy and Design departments."
    },
    {
      "employer"    : "On Networks Limited",
      "title"       : "Accounts Manager",
      "location"    : "Business ISP in Wellington, New Zealand",
      "dates"       : "From 2012 to 2015",
      "description" : "Managed the On Networks accounts using Xero and performed payroll, invoicing and management of business contracts."
    },
    {
      "employer"    : "Ministry of Fisheries and Marine Resources Development",
      "title"       : "Help Desk and Systems Analyst",
      "location"    : "Wellington, New Zealand",
      "dates"       : "From 1997 to 2001",
      "description" : "Provided testing review of in-house coded software prior to release to end users.  Documented bugs in software and reported to IT to be fixed.  Wrote documentation for end users once testing completed. Also, provided Help Desk backup and support and wrote Help Desk documentation / manual."
    },
    {
      "employer"    : "Juneau Alliance for Mental Health",
      "title"       : "Case Manager II",
      "location"    : "Juneau, Alaska USA",
      "dates"       : "From 1991 to 1996",
      "description" : "Worked with individuals with chronic mental illness in an out-patient setting.  Assisted individuals with linkage to community services and housing.  Worked to help people laive in the community and to assist them during periods of acute episodes in hopes that a psychiatric hospitalization may be avoided.  Provided testimony in court for individuals requiring extended hospital stays.  Oversaw the medication clinic with psychiatrist.  Acted as Clinical Supervisor during periods when supervisor of case management was away.  Assigned hospital privliges to review and assess clients being treated in hospital and over view of other case management documentation while client on mental health unit."
    },
    {
      "employer"    : "Kitsap Mental Health Services",
      "title"       : "Case Manager",
      "location"    : "Bremerton, Washington USA",
      "dates"       : "From 1990 to 1991",
      "description" : "Provided community support to help stabilize individuals with chronic mental illness in the community.  Attended psychiatric consults to review and discuss caseload.  Assisted in helping to obtain housing, medical follow up and benefits support."
    },
    {
      "employer"    : "Sunmount Developmental Disabilities",
      "title"       : "Psychology Assistant III",
      "location"    : "Tupper Lake, New York USA",
      "dates"       : "From 1988 to 1990",
      "description" : "Worked at a developmental disabilities facility for New York State. Provided assessment profiles through intelligence testing and through review of rehabilitation programming. Developed programs to modify behaviours as well as to improve daily living skills. attended psychiatric consults and trained direct care staff on each individual program as well as consulted daily with staff as problems occurred."
    },
    {
      "employer"    : "Hillcrest Washington Youth Home",
      "title"       : "Houseparent",
      "location"    : "Evansville, Indiana USA",
      "dates"       : "From 1985 to 1987",
      "description" : "Worked with sexually abused and neglected youth in their daily activities and caring for them as a surrogate parent."
    },
  ]
};

function displayWork() {
for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);  
    }
}
displayWork();

var education = {
  "schools": [
    {
      "name"    : "University of Evansville",
      "dates"   : "1981 to 1987",
      "major"   : "Psychology",
      "degree"  : "Master's in Clinical Psychology",
      "location": "Evansville, Indiana USA",
      "url"     : "https://www.evansville.edu/"
    },
  ]
};

function displayEducation() {
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);    
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedName);    
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);  
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedSchoolDates);     
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);     
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedDegree);    
      var formattedURL = HTMLonlineURL.replace("%data%", education.schools[school].url);
      $(".education-entry:last").append(formattedURL);
   } 
 };   
displayEducation();

var project = {
  "projects" : [
    {
    "title" : "Stained Glass",
    "dates" : "2000 - 2001",
    "description" : "Attended course with Wellington High School Community Course in stained glass."
    },
    {
    "title" : "Evan rumsey",
    "dates" : "6th October 2001",
    "description" : "Gave birth to my wonderful son."
    },
  ]
};

function displayProjects() {
     for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
          for (image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
      }
    } 
};
displayProjects();

// Map
$("#mapDiv").append(googleMap);

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
};

// function inName(name) {
//     name = name.trim().split(" ");
//     console.log(name);
//     name[1] = name[1].toUpperCase();
//     name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase;

//     return name[0] + " " + name[1];
// }
// $('#main').append(internationalizeButton);
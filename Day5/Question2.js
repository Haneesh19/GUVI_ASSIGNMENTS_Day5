// iterate over all for loops (for, for in, for of, forEach)
const resume = {
    "name": "HANEESH P",
    "contact": {
      "email": "haneesh1901@gmail.com",
      "phone": "+919750706646",
      "address": "muthallamman koil street,chunampte village,chengalpattu(Dis),603401"
    },
    "summary": " I’m a Final-year Computer Science major at Veltech University, Chennai, I’ve always been passionate about cybersecurity and knowledge seeker and hard worker who is trying to make his place in software industry and will surely be a good software engineer for the company as well as to the society",
    
    "education": [
      {
        "degree": "B.Tech in Computer Science",
        "institution": "VEL TECH UNIVERSITY",
        "location": "Avadi, Tamil nadu",
      },
    ],
    "skills": [
      "JavaScript",
      "Node.js",
      "React.js",
      "HTML5",
      "Python",
      "Java",
      "Git",
    ],
    "languages": ["Tamil","English","Hindi","Telugu"]
  };

  //using 'for' loop
  console.log("using 'for' loop")
  for (let i = 0; i < resume.skills.length; i++) {
    console.log(resume.skills[i]);
}

//using'for in loop
console.log("using'for in loop")
for (let key in resume.contact) {
    console.log(key + ": " + resume.contact[key]);
}

//using 'for of' loop
console.log("using'for of' loop")
for (const education of resume.education) {
    console.log("Degree: " + education.degree);
    console.log("Institution: " + education.institution);
  }
  
//using 'for each' loop
console.log("using 'for each' loop")
resume.education.forEach(function(education) {
    console.log("Degree: " + education.degree);
    console.log("Institution: " + education.institution);

});





  
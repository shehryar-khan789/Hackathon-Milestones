// get references to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//handle for submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // collect input values
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email1').value;
    var phone = document.getElementById('phn').value;
    var education = document.getElementById('education').value;
    var expereince = document.getElementById('exp').value;
    var skills = document.getElementById('ski').value;
    //generate the resume content dynamically
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>FirstNname:</b> ".concat(firstname, "</p>\n    <p><b>lastNname:</b> ").concat(lastname, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</P>\n\n\n    <h3>Experience</h3>\n    <p>").concat(expereince, "</p>\n\n    <h3>Skills<h3>\n    <p>").concat(skills, "</p>");
    //display generated resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('the resume display element is missing.');
    }
});

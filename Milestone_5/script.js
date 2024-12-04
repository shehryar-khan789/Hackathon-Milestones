// get references to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable link");
var downloadPdfButton = document.getElementById("download-pdf");
//handle for submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // collect input values
    var username = document.getElementById("username").value;
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email1').value;
    var phone = document.getElementById('phn').value;
    var education = document.getElementById('education').value;
    var expereince = document.getElementById('exp').value;
    var skills = document.getElementById('ski').value;
    // save form data in local storage with the username  as the key
    var resumedata = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        education: education,
        expereince: expereince,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumedata)); // saving the data locally
    //generate the resume content dynamically
    var resumeHtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3><b>Personal Information<b></h3>\n    <p><b>Firstname:</b><span contenteditable=\"true\"> ".concat(firstname, "</span></p>\n    <p><b>lastName:</b> <span contenteditable=\"true\">").concat(lastname, "</span</p>\n    <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</P>\n\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(expereince, "</p>\n\n    <h3>Skills<h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>");
    //display generated resume 
    resumeDisplayElement.innerHTML = resumeHtml;
    //generata a shareable url with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    //display the shareable link 
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
//handle pdf download
downloadPdfButton.addEventListener("click", function () {
    window.print(); // this will open the print dialog and allow  the user to save as pdf
});
//prefill the form based on the username in the url
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('Firstname').value = resumeData.firstname;
            document.getElementById('lastname').value = resumeData.lastname;
            document.getElementById('email1').value = resumeData.email;
            document.getElementById('phn').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('exp').value = resumeData.experience;
            document.getElementById('ski').value = resumeData.skills;
        }
    }
});

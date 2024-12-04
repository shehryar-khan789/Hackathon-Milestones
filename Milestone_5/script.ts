// get references to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement= document.getElementById("resume-display") as HTMLDivElement;

const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement;
const shareableLinkElement = document.getElementById("shareable link") as HTMLAnchorElement;
const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;

//handle for submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();//prevent page reload

    // collect input values
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const firstname=(document.getElementById('firstname')as HTMLInputElement).value
    const lastname=(document.getElementById('lastname')as HTMLInputElement).value
    const email=(document.getElementById('email1')as HTMLInputElement).value
    const phone=(document.getElementById('phn')as HTMLInputElement).value
    const education=(document.getElementById('education')as HTMLTextAreaElement).value
    const expereince=(document.getElementById('exp')as HTMLTextAreaElement).value
    const skills=(document.getElementById('ski')as HTMLTextAreaElement).value

    // save form data in local storage with the username  as the key

    const resumedata = {
        firstname,
        lastname,
        email,
        phone,
        education,
        expereince,
        skills,
    };

    localStorage.setItem(username, JSON.stringify(resumedata)); // saving the data locally

    //generate the resume content dynamically
    const resumeHtml = `
    <h2><b>Editable Resume</b></h2>
    <h3><b>Personal Information<b></h3>
    <p><b>Firstname:</b><span contenteditable="true"> ${firstname}</span></p>
    <p><b>lastName:</b> <span contenteditable="true">${lastname}</span</p>
    <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${education}</P>


    <h3>Experience</h3>
    <p contenteditable="true">${expereince}</p>

    <h3>Skills<h3>
    <p contenteditable="true">${skills}</p>`;

    //display generated resume 
    resumeDisplayElement.innerHTML = resumeHtml;

    //generata a shareable url with the username only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    //display the shareable link 
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;

});

//handle pdf download
downloadPdfButton.addEventListener(`click`,()=>{
    window.print(); // this will open the print dialog and allow  the user to save as pdf
});

//prefill the form based on the username in the url
window.addEventListener('DOMContentLoaded',()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if(username){
        const savedResumeData = localStorage.getItem(username);
    

    if(savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);
        (document.getElementById('username') as HTMLInputElement).value = username;
        (document.getElementById('Firstname')as HTMLInputElement).value = resumeData.firstname;
        (document.getElementById('lastname')as HTMLInputElement).value = resumeData.lastname;
        (document.getElementById('email1')as HTMLInputElement).value = resumeData.email;
        (document.getElementById('phn')as HTMLInputElement).value = resumeData.phone;
        (document.getElementById('education')as HTMLInputElement).value = resumeData.education;
        (document.getElementById('exp')as HTMLInputElement).value = resumeData.experience;
        (document.getElementById('ski')as HTMLInputElement).value = resumeData.skills;
     } }
});
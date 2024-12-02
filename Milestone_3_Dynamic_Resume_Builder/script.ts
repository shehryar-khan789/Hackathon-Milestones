// get references to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement= document.getElementById("resume-display") as HTMLDivElement;

//handle for submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();//prevent page reload

    // collect input values
    const firstname=(document.getElementById('firstname')as HTMLInputElement).value
    const lastname=(document.getElementById('lastname')as HTMLInputElement).value
    const email=(document.getElementById('email1')as HTMLInputElement).value
    const phone=(document.getElementById('phn')as HTMLInputElement).value
    const education=(document.getElementById('education')as HTMLTextAreaElement).value
    const expereince=(document.getElementById('exp')as HTMLTextAreaElement).value
    const skills=(document.getElementById('ski')as HTMLTextAreaElement).value
    //generate the resume content dynamically
    const resumeHtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>FirstNname:</b> ${firstname}</p>
    <p><b>lastNname:</b> ${lastname}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</P>


    <h3>Experience</h3>
    <p>${expereince}</p>

    <h3>Skills<h3>
    <p>${skills}</p>`;

    //display generated resume 
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml;
    }else{
        console.error('the resume display element is missing.')
    }
}

);
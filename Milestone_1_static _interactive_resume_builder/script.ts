const toggles = document.getElementById("toogle") as HTMLButtonElement
const skill = document.getElementById("ski")  as HTMLElement 


toggles.addEventListener("click",()=>{
    if(skill.style.display === "none"){
        skill.style.display = 'block'
    } else{
        skill.style.display ='none'
    }
});
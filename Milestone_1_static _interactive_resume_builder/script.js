var toggles = document.getElementById("toogle");
var skill = document.getElementById("ski");
toggles.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = 'block';
    }
    else {
        skill.style.display = 'none';
    }
});

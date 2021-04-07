const skills = document.getElementById("skills");

const mySkills = ["ES6", "UX Design", "Git"];

mySkills.push("Dev Ops");

console.log(mySkills);


//Cara 1
function showSkill(mySkill){
    console.log(mySkill);
}

mySkills.forEach(showSkill);
console.log("------------");


//Cara 2
mySkills.forEach((mySkill) => {
    console.log(mySkill)
})
console.log("------------");

//Cara 3
const showSkill2 = (mySkill) => {
    console.log(mySkill);
}

mySkills.forEach(showSkill2);


//Ditampilin di HTML
let parent = '<ul>';

mySkills.forEach((mySkill) => {
    parent += `<li>${mySkill}</li>`;
});

parent += "</ul>";
skills.innerHTML = parent;


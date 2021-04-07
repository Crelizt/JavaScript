const skills = document.getElementById("skills");
const primarySkill = document.getElementById("primarySkill");

const mySkills = ["ES6", "Git", "Web Development"]


//Map untuk pindahin isi array ke suatu array baru dengan isinya yang uda di modif (jika ada)
const printSkills = mySkills.map((skill) => {
    return skill;
})

skills.innerHTML = printSkills;


//Filter untuk pindahin isi array ke suatu array baru dengan ada constraint yang isinya sesuai constraint.
const printPrimarySkill = mySkills.filter((skill) => {
    return skill != "ES6";
})

primarySkill.innerHTML = printPrimarySkill;
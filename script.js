"use strict";
var _a;
document.addEventListener('DOMContentLoaded', () => {
    // Get buttons and sections by ID
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    const skillsSection = document.getElementById('skillsSection');
    const eduBtn = document.getElementById('toggleEducationBtn');
    const EduSec = document.getElementById('EducationSection');
    const Resume = document.getElementById('Resume');
    const hide = document.getElementById('hide');
    const show = document.getElementById('show');
    const generateResume = document.getElementById('generateResume');
    if (generateResume) {
        // Add an event listener to the button
        generateResume.addEventListener('click', () => {
            // Change the button's text content
            generateResume.textContent = 'Update Resume';
        });
    }
    // Toggle visibility function
    function showhide() {
        if (hide.style.display === 'none') {
            hide.style.display = 'block';
            show.style.display = 'none';
            Resume.textContent = 'Generate Resume';
        }
        else {
            hide.style.display = 'none';
            show.style.display = 'block';
            Resume.textContent = 'Back';
        }
    }
    function Skills_Btn() {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsBtn.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleSkillsBtn.textContent = 'Show Skills';
        }
    }
    function Edu_Btn() {
        if (EduSec.style.display === 'none') {
            EduSec.style.display = 'block';
            eduBtn.textContent = 'Hide Education';
        }
        else {
            EduSec.style.display = 'none';
            eduBtn.textContent = 'Show Education';
        }
    }
    // Add event listeners to buttons
    toggleSkillsBtn.addEventListener('click', Skills_Btn);
    eduBtn.addEventListener('click', Edu_Btn);
    Resume.addEventListener('click', showhide);
});
//  generate resume
function generateResume() {
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const companyname = document.getElementById('companynmae').value;
    const designation = document.getElementById('designation').value;
    const workexp = document.getElementById('workexp').value;
    const degree = document.getElementById('degree').value;
    const college = document.getElementById('college').value;
    const year = document.getElementById('year').value;
    const skill = document.getElementById('skill').value;
    const skill1 = document.getElementById('skill1').value;
    const skill2 = document.getElementById('skill2').value;
    // Construct the resume content
    const resumeContent = `
        <div class="">
      <header class="d-flex justify-content-between">
        <div>
          <h1>${name}</h1>
          <p class="lead">${roll}</p>
          <p>Email: ${email} | Phone: ${number}</p>
        </div>

      </header>

<!-- Experience -->

      <section>
        <h2 class="section-title">Experience</h2>
        <div class="mb-4">
          <h3>${companyname}</h3>
          <h5>${designation}</h5>
          <p><strong>${workexp}</strong></p>
        </div>
      </section>

<!-- Education -->


      
      <section id="EducationSection">
        <h2 class="section-title">Education</h2>
        <div class="mb-4">
          <h3>${degree}</h3>
          <h5>${college}</h5>
          <p><strong>${year}</strong></p>
        </div>
      </section>

<!-- Skills -->


      <section id="skillsSection">
        <h2 class="section-title">Skills</h2>

        <ul>
          <li>${skill}</li>
          <li>${skill1}</li>
          <li>${skill2}</li>

        </ul>
    </section>


    </div>
    `;
    if (!name || !roll || !email || !number || !companyname || !designation || !workexp || !degree || !college || !year || !skill) {
        alert("Plese Fill Full Form");
    }
    else {
        alert("Resume Generated Successfully");
    }
    // Display the resume
    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = resumeContent;
}
// Attach the event listener to the button
let gen = (_a = document.getElementById('generateResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateResume);
function printCV() {
    window.print();
}

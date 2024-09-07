document.addEventListener('DOMContentLoaded', () => {
    // Get buttons and sections by ID
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
    const skillsSection = document.getElementById('skillsSection') as HTMLElement;

    const eduBtn = document.getElementById('toggleEducationBtn') as HTMLButtonElement;
    const EduSec = document.getElementById('EducationSection') as HTMLElement;

    const Resume = document.getElementById('Resume') as HTMLButtonElement;
    const hide = document.getElementById('hide') as HTMLElement;
    const show = document.getElementById('show') as HTMLElement;



    // Toggle visibility function

    function showhide(): void {
        if (hide.style.display === 'none') {
            hide.style.display = 'block';
            show.style.display = 'none';
            Resume.textContent = 'Generate Resume';
        } else {
            hide.style.display = 'none';
            show.style.display = 'block';
            Resume.textContent = 'Back';
        }
    }
    function Skills_Btn(): void {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsBtn.textContent = 'Hide Skills';
        } else {
            skillsSection.style.display = 'none';
            toggleSkillsBtn.textContent = 'Show Skills';
        }
    }
    function Edu_Btn(): void {
        if (EduSec.style.display === 'none') {
            EduSec.style.display = 'block';
            eduBtn.textContent = 'Hide Education';
        } else {
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


function generateResume(): void {

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const roll = (document.getElementById('roll') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const number = (document.getElementById('number') as HTMLInputElement).value;
    const companyname = (document.getElementById('companynmae') as HTMLTextAreaElement).value;
    const designation = (document.getElementById('designation') as HTMLTextAreaElement).value;
    const workexp = (document.getElementById('workexp') as HTMLTextAreaElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const college = (document.getElementById('college') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const skill = (document.getElementById('skill') as HTMLInputElement).value;
    const skill1 = (document.getElementById('skill1') as HTMLInputElement).value;
    const skill2 = (document.getElementById('skill2') as HTMLInputElement).value;


    // Construct the resume content
    const resumeContent = `
        <div class="container my-5">
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

      <button id="toggleEducationBtn" class="btn btn-primary mb-3">Hide Education</button>
      
      <section id="EducationSection">
        <h2 class="section-title">Education</h2>
        <div class="mb-4">
          <h3>${degree}</h3>
          <h5>${college}</h5>
          <p><strong>${year}</strong></p>
        </div>
      </section>

<!-- Skills -->

      <button id="toggleSkillsBtn" class="btn btn-primary mb-3">Hide Skills</button>
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

    if (!name || !roll || !email || !number || !companyname || !designation || !workexp || !degree || !college || !year || !skill){
        alert("Plese Fill Full Form")
    } else {
        alert("Resume Generated Successfully")
    }

    // Display the resume
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    resumeOutput.innerHTML = resumeContent;
    
}

// Attach the event listener to the button
document.getElementById('generateResume')?.addEventListener('click', generateResume);

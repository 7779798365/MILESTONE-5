document
  .getElementById("resumeform")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;
    const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;

    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillsElement &&
      usernameElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      const username = usernameElement.value;

      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      const resumeOutPut = `
      <h2>Resume</h2>
      ${
        profilePictureURL
          ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture" style="width: 100px; height: 100px;">`
          : ""
      }
      <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
      <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
      <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
      <h3>Education</h3>
      <p id="edit-education" class="editable">${education}</p>
      <h3>Experience</h3>
      <p id="edit-experience" class="editable">${experience}</p>
      <h3>Skills</h3>
      <p id="edit-skills" class="editable">${skills}</p>
    `;

      const resumeOutPutElement = document.getElementById("resumeOutPut");

      if (resumeOutPutElement) {
        resumeOutPutElement.innerHTML = resumeOutPut;
        resumeOutPutElement.classList.remove("hidden");

        // Create buttons container
        let buttonsContainer = document.getElementById("buttonsContainer");
        if (!buttonsContainer) {
          buttonsContainer = document.createElement("div");
          buttonsContainer.id = "buttonsContainer";
          resumeOutPutElement.appendChild(buttonsContainer);
        }

        // Create download button
        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download as PDF";
        downloadButton.addEventListener("click", () => {
          window.print(); // Trigger the print dialog
        });

        buttonsContainer.appendChild(downloadButton);

        // Create shareable link button
        const shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "Copy Link";
        shareLinkButton.addEventListener("click", async () => {
          try {
            const shareableLink = `https://yourdomain.com/resumes/${username.replace(
              /\s+/g,
              "_"
            )}_cv.html`;
            await navigator.clipboard.writeText(shareableLink);
            alert("Shareable link copied to clipboard");
          } catch (err) {
            console.error("Failed to copy link", err);
            alert("Failed to copy link to clipboard, please try again.");
          }
        });

        buttonsContainer.appendChild(shareLinkButton);
      } else {
        console.error("Resume output container not found.");
      }
    } else {
      console.error("Form elements are missing.");
    }
  });

// downLoad link
// Function to trigger download
function downloadResumeAsFile(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  // Create an anchor element and trigger the download
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = filename;
  downloadLink.click();

  // Clean up the URL object after download
  URL.revokeObjectURL(url);
}

// Example usage: Generate a downloadable resume
const resumeContent = `
  <h2>Resume</h2>
  <p><strong>Name:</strong> John Doe</p>
  <p><strong>Email:</strong> johndoe@example.com</p>
  <h3>Education</h3>
  <p>Bachelor of Science in Computer Science</p>
  <h3>Experience</h3>
  <p>Software Engineer at XYZ Company</p>
  <h3>Skills</h3>
  <p>JavaScript, TypeScript, HTML, CSS</p>
`;

// Create and append download link to the resume output container
const downloadButton = document.createElement("button");
downloadButton.textContent = "Download Resume";
downloadButton.addEventListener("click", () => {
  downloadResumeAsFile(resumeContent, "resume.html");
});

const resumeOutPutElement = document.getElementById("resumeOutPut");
if (resumeOutPutElement) {
  resumeOutPutElement.appendChild(downloadButton);
} else {
  console.error("Resume output container not found.");
}
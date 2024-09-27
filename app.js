// document.getElementById("resumeform")?.addEventListener("submit", function (event) {
//   event.preventDefault();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
//   // Type assertion for input fields
//   const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
//   const nameElement = document.getElementById("name") as HTMLInputElement;
//   const emailElement = document.getElementById("email") as HTMLInputElement;
//   const phoneElement = document.getElementById("phone") as HTMLInputElement;
//   const educationElement = document.getElementById("education") as HTMLTextAreaElement;
//   const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
//   const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
//   //**URL work */
//   const usernameElement = document.getElementById('username') as HTMLInputElement;
//   // Check if all elements exist
//   if (
//     profilePictureInput &&
//     nameElement &&
//     emailElement &&
//     phoneElement &&
//     educationElement &&
//     experienceElement &&
//     skillsElement &&
//     usernameElement
//   ) {
//     const name = nameElement.value;
//     const email = emailElement.value;
//     const phone = phoneElement.value;
//     const education = educationElement.value;
//     const experience = experienceElement.value;
//     const skills = skillsElement.value;
//     const username = usernameElement.value;
//     const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`
//     // Handle profile picture
//     const profilePictureFile = profilePictureInput.files?.[0];
//     const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
//     // Create output for the resume
//     const resumeOutPut = `
//       <h2>Resume</h2>
//       ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture" style="width: 100px; height: 100px;">` : ''}
//       <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
//       <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
//       <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
//       <h3>Education</h3>
//       <p id="edit-education" class="editable">${education}</p>
//       <h3>Experience</h3>
//       <p id="edit-experience" class="editable">${experience}</p>
//       <h3>Skills</h3>
//       <p id="edit-skills" class="editable">${skills}</p>
//     `;
//     //////////////////////////////Generate pdf//////////////////////////////////
//     // display resume in output container
//     const resumeOutPutElement = document.getElementById("resumeOutPut");
//     if(resumeOutPutElement){
//       resumeOutPutElement.innerHTML = resumeOutPut;
//       resumeOutPutElement.classList.remove("hidden");
//       // creat button container
//       const buttonsContainer = document.createElement("div");
//       buttonsContainer.id = "buttonsContainer";
//       resumeOutPutElement.appendChild(buttonsContainer);
//       // creat doenload pdf button
//       const downloadButton = document.createElement("button");
//       downloadButton.textContent = "Download as pdf";
//       downloadButton.addEventListener('click' , () => {
//         window.print();  //for open the print box
//       });
//       buttonsContainer.appendChild(downloadButton);
//       // add shareable link here
//       const shareLinkButton = document.createElement("button");
//       shareLinkButton.textContent = "copy Link";
//       shareLinkButton.addEventListener('click', async () => {
//         try{
//           //creat shareable unique link
//           const shareableLink = `https://yourdomain.com/resumes/${username.replace(/\s+/g,'_')}_cv.html`;
//           //creat API
//           await navigator.clipboard.writeText(shareableLink);
//           alert("shareableLink copy to clipboard")
//         }catch(err){
//           console.error("Failed to copy link", err);
//           alert("Failed to copy link to cilpboard please rty again ");
//         }
//       });
//       buttonsContainer.appendChild(shareLinkButton);
//     }else{
//       console.error("resume output container not found");
//     }
//   }else{
//     console.error("form elements are missing");
//   }
// });
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById('username');
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username_1 = usernameElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var resumeOutPut = "\n      <h2>Resume</h2>\n      ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\" style=\"width: 100px; height: 100px;\">") : '', "\n      <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n      <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n      <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n      <h3>Education</h3>\n      <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n      <h3>Experience</h3>\n      <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n    ");
        var resumeOutPutElement_1 = document.getElementById("resumeOutPut");
        if (resumeOutPutElement_1) {
            resumeOutPutElement_1.innerHTML = resumeOutPut;
            resumeOutPutElement_1.classList.remove("hidden");
            // Create buttons container
            var buttonsContainer = document.getElementById("buttonsContainer");
            if (!buttonsContainer) {
                buttonsContainer = document.createElement("div");
                buttonsContainer.id = "buttonsContainer";
                resumeOutPutElement_1.appendChild(buttonsContainer);
            }
            // Create download button
            var downloadButton_1 = document.createElement("button");
            downloadButton_1.textContent = "Download as PDF";
            downloadButton_1.addEventListener("click", function () {
                window.print(); // Trigger the print dialog
            });
            buttonsContainer.appendChild(downloadButton_1);
            // Create shareable link button
            var shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Link";
            shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resumes/".concat(username_1.replace(/\s+/g, '_'), "_cv.html");
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            _a.sent();
                            alert("Shareable link copied to clipboard");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to copy link", err_1);
                            alert("Failed to copy link to clipboard, please try again.");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonsContainer.appendChild(shareLinkButton);
        }
        else {
            console.error("Resume output container not found.");
        }
    }
    else {
        console.error("Form elements are missing.");
    }
});
// downLoad link
// Function to trigger download
function downloadResumeAsFile(content, filename) {
    var blob = new Blob([content], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    // Create an anchor element and trigger the download
    var downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.click();
    // Clean up the URL object after download
    URL.revokeObjectURL(url);
}
// Example usage: Generate a downloadable resume
var resumeContent = "\n  <h2>Resume</h2>\n  <p><strong>Name:</strong> John Doe</p>\n  <p><strong>Email:</strong> johndoe@example.com</p>\n  <h3>Education</h3>\n  <p>Bachelor of Science in Computer Science</p>\n  <h3>Experience</h3>\n  <p>Software Engineer at XYZ Company</p>\n  <h3>Skills</h3>\n  <p>JavaScript, TypeScript, HTML, CSS</p>\n";
// Create and append download link to the resume output container
var downloadButton = document.createElement("button");
downloadButton.textContent = "Download Resume";
downloadButton.addEventListener("click", function () {
    downloadResumeAsFile(resumeContent, "resume.html");
});
var resumeOutPutElement = document.getElementById("resumeOutPut");
if (resumeOutPutElement) {
    resumeOutPutElement.appendChild(downloadButton);
}
else {
    console.error("Resume output container not found.");
}
//     const downLoadLink = document.createElement('a')
//     downLoadLink.href = `data:text/html;charset=utf-8,` + encodeURIComponent(resumeOutPut);
//     downLoadLink.download = uniquePath;
//     downLoadLink.textContent = 'Download Your Resume';
//     // Insert the output into the resume output element
//     const resumeOutPutElement = document.getElementById("resumeOutPut");
//     if (resumeOutPutElement) {
//       resumeOutPutElement.innerHTML = resumeOutPut;
//       resumeOutPutElement.appendChild(downLoadLink)
//       makeEditable();
//     }
//   } else {
//     console.error("One or more form elements are missing.");
//   }
// });
// function makeEditable() {
//   const editableElements = document.querySelectorAll(".editable");
//   editableElements.forEach((element) => {
//     element.addEventListener("click", function () {
//       const currentElement = element as HTMLElement;
//       const currentValue = currentElement.textContent || "";
//       // Replace the content with an input field for editing
//       if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
//         const input = document.createElement("input");
//         input.type = "text";
//         input.value = currentValue;
//         input.classList.add("editing-input");
//         input.addEventListener("blur", function () {
//           currentElement.textContent = input.value;
//           currentElement.style.display = "inline";
//           input.remove();
//         });
//         currentElement.style.display = "none";
//         currentElement.parentNode?.insertBefore(input, currentElement);
//         input.focus();
//       }
//     });
//    });
// }
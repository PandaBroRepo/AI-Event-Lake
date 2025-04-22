
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//   and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let rsvpButton = document.getElementById("rsvp-button");
let count = 3;


const addParticipant = (person) => {

  // Create new paragraph element
  const newParticipant = document.createElement("p");
  
  // Use person object properties instead of getting values from form
  newParticipant.textContent = `✅ ${person.name} from ${person.homeState} has RSVP'd.`;
  
  // Find the participants container and add the new participant
  const participantsContainer = document.querySelector(".rsvp-participants");

  // Find and remove the current count display
  const countDisplay = document.getElementById("rsvp-count");

  // Insert the new participant before the count display
  participantsContainer.insertBefore(newParticipant, countDisplay);

  // Increment the count
  count = count + 1;
  
  // Update the count display text
  countDisplay.textContent = `🐼 ${count} people have RSVP'd to this event!`;
  
}

// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;

  let person = {
    name: rsvpInputs[0].value, 
    homeState: rsvpInputs[1].value,
    email: rsvpInputs[2].value
  }

  // Validate name
  if (person.name.trim().length < 2) {
    containsErrors = true;
    rsvpInputs[0].classList.add("error");
  } else {
    rsvpInputs[0].classList.remove("error");
  }
  
  // Validate homeState
  if (person.homeState.trim().length < 2) {
    containsErrors = true;
    rsvpInputs[1].classList.add("error");
  } else {
    rsvpInputs[1].classList.remove("error");
  }
  
  // Validate email (both length and @ symbol)
  if (person.email.trim().length < 2 || !person.email.includes("@")) {
    containsErrors = true;
    rsvpInputs[2].classList.add("error");
  } else {
    rsvpInputs[2].classList.remove("error");
  }
    
  // If no errors, call addParticipant with person object and clear fields
  if (containsErrors == false) {
    // Change this line to pass person instead of event
    addParticipant(person);
    
    // Clear the inputs
    rsvpInputs[0].value = "";
    rsvpInputs[1].value = "";
    rsvpInputs[2].value = "";
  }
  // If no errors, call addParticipant with person object and clear fields
  if (containsErrors == false) {
    // Change this line to pass person instead of event
    addParticipant(person);
    
    // Add this line to show the modal
    toggleModal(person);
    
    // Clear the inputs
    rsvpInputs[0].value = "";
    rsvpInputs[1].value = "";
    rsvpInputs[2].value = "";
  }
}
  
    // Email validation
    const email = document.getElementById("email");
    if (!email.value.includes("@")) {
      containsErrors = true;
      email.classList.add("error");
    } else {
      // Only remove error class if it was added due to missing @ symbol
      // This prevents overriding the length validation
      if (email.value.trim().length >= 2) {
        email.classList.remove("error");
      }
    }
    
  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors == false) {
    addParticipant(event);
    
    // Loop through all inputs again to clear them
    for (let i = 0; i < rsvpInputs.length; i++) {
      // Only clear input elements (not buttons)
      if (rsvpInputs[i].tagName === "INPUT") {
        rsvpInputs[i].value = "";
      }
    }
  }


// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/


  const toggleModal = (person) => {
    let modal = document.getElementById("success-modal");
    let modalText = document.getElementById("modal-text");
    
    // Update modal display to flex
    modal.style.display = "flex";
  
    // Update modal text to personalized message
    modalText.textContent = `✅ Thanks for RSVPing, ${person.name}! We can't wait to see you at the AI Event Lake!`;
  
    // Save the interval ID globally
    window.currentAnimationInterval = setInterval(animateImage, 500);
    
    // Set modal timeout to 5 seconds and clear the interval when hiding the modal
    setTimeout(() => {
      modal.style.display = "none";
      clearInterval(window.currentAnimationInterval);
    }, 5000);
  }


// Animation variables and animateImage() function
let rotateFactor = 0;
let modalImage = document.querySelector("#success-modal img");

function animateImage() {
  // Toggle between 0 and -10 degrees
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }
  
  // Apply the rotation to the image
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}


// Select the close button
let closeModalButton = document.getElementById("close-modal-button");

// Function to close the modal
function closeModal() {
  let modal = document.getElementById("success-modal");
  modal.style.display = "none";
  
  // If there's an active animation interval, clear it
  if (window.currentAnimationInterval) {
    clearInterval(window.currentAnimationInterval);
  }
}

// Add event listener to the close button
closeModalButton.addEventListener("click", closeModal);


// Global variable to track motion preference
let motionReduced = false;

// Select the reduce motion button
let reduceMotionButton = document.getElementById("reduce-motion-button");

// Function to toggle motion reduction
function reduceMotion() {
  motionReduced = !motionReduced;
  
  if (motionReduced) {
    // Add the reduced-motion class to the body
    document.body.classList.add("reduced-motion");
    reduceMotionButton.textContent = "Enable Motion";
  } else {
    // Remove the reduced-motion class from the body
    document.body.classList.remove("reduced-motion");
    reduceMotionButton.textContent = "Reduce Motion";
  }
}

// Add event listener to the reduce motion button
reduceMotionButton.addEventListener("click", reduceMotion);

// Modify the animateImage function to respect motion preference
function animateImage() {
  if (motionReduced) {
    // Don't animate if motion is reduced
    return;
  }
  
  // Toggle between 0 and -10 degrees
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }
  
  // Apply the rotation to the image
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}






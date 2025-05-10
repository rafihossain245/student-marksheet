function result() {
  try {
    // Get student information
    const stuName = document.getElementById("studnetName")?.value || '';
    const rollNum = document.getElementById("rollNumber")?.value || '';
    const board = document.getElementById("board")?.value || '';
    const regNum = document.getElementById("regNumber")?.value || '';

    // Get subject marks
    const bfpaper = parseFloat(document.getElementById("bfpaper")?.value) || 0;
    const blpaper = parseFloat(document.getElementById("blpaper")?.value) || 0;
    const efpaper = parseFloat(document.getElementById("efpaper")?.value) || 0;
    const elpaper = parseFloat(document.getElementById("elpaper")?.value) || 0;
    const physic = parseFloat(document.getElementById("physic")?.value) || 0;
    const chemistry = parseFloat(document.getElementById("chemistry")?.value) || 0;
    const biology = parseFloat(document.getElementById("biology")?.value) || 0;
    const heigher = parseFloat(document.getElementById("heigher")?.value) || 0;

    // Show popup and overlay
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("background-overlay");
    
    if (!popup || !overlay) {
      console.error("Popup or overlay elements not found");
      return;
    }

    popup.style.display = "block";
    overlay.style.display = "block";

    // Helper function to safely set innerHTML
    const setInnerHTML = (elementId, content) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = content;
      }
    };

    // Display student information
    setInnerHTML("nam", `Student Name: ${stuName}`);
    setInnerHTML("brd", `Board: ${board}`);
    setInnerHTML("stu_roll", `Roll Number: ${rollNum}`);
    setInnerHTML("stu_reg", `Registration Number: ${regNum}`);

    // Display subject results with grades
    setInnerHTML("ban1st", `Bangla 1st Paper: ${calculateGrade(bfpaper)}`);
    setInnerHTML("ban2nd", `Bangla 2nd Paper: ${calculateGrade(blpaper)}`);
    setInnerHTML("en1st", `English 1st Paper: ${calculateGrade(efpaper)}`);
    setInnerHTML("en2nd", `English 2nd Paper: ${calculateGrade(elpaper)}`);
    setInnerHTML("phy", `Physics: ${calculateGrade(physic)}`);
    setInnerHTML("che", `Chemistry: ${calculateGrade(chemistry)}`);
    setInnerHTML("bio", `Biology: ${calculateGrade(biology)}`);
    setInnerHTML("hm", `Higher Math: ${calculateGrade(heigher)}`);

  } catch (error) {
    console.error("Error in result calculation:", error);
    alert("An error occurred while calculating the result. Please try again.");
  }
}

function calculateGrade(marks) {
  if (isNaN(marks) || marks < 0 || marks > 100) {
    return "Invalid";
  }
  
  if (marks >= 0 && marks <= 32) {
    return "fail";
  } else if (marks >= 33 && marks <= 39) {
    return "D";
  } else if (marks >= 40 && marks <= 49) {
    return "C";
  } else if (marks >= 50 && marks <= 59) {
    return "B";
  } else if (marks >= 60 && marks <= 69) {
    return "A-";
  } else if (marks >= 70 && marks <= 79) {
    return "A";
  } else if (marks >= 80 && marks <= 100) {
    return "A+";
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("background-overlay");
  
  if (popup && overlay) {
    popup.style.display = "none";
    overlay.style.display = "none";
  }
}

// Add event listener to close popup when clicking outside
document.addEventListener('click', function(event) {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("background-overlay");
  
  if (event.target === overlay) {
    closePopup();
  }
});

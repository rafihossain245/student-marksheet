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
    const ict = parseFloat(document.getElementById("ict")?.value) || 0;
    const islam = parseFloat(document.getElementById("islam")?.value) || 0;
    const math = parseFloat(document.getElementById("math")?.value) || 0;
    const physic = parseFloat(document.getElementById("physic")?.value) || 0;
    const chemistry = parseFloat(document.getElementById("chemistry")?.value) || 0;
    const biology = parseFloat(document.getElementById("biology")?.value) || 0;
    const heigher = parseFloat(document.getElementById("heigher")?.value) || 0;

    // Calculate total marks and GPA
    const totalMarks = bfpaper + blpaper + efpaper + elpaper + ict + islam + math + physic + chemistry + biology + heigher;
    const averageMarks = totalMarks / 11;

    // Show popup and overlay
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("background-overlay");
    
    if (!popup || !overlay) {
      console.error("Popup or overlay elements not found");
      return;
    }

    popup.style.display = "block";
    overlay.style.display = "block";

    // Clear previous results
    const resultInfo = document.querySelector('.result-info');
    if (resultInfo) {
      resultInfo.innerHTML = '';
    }

    // Helper function to safely set innerHTML
    const setInnerHTML = (elementId, content) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = content;
      }
    };

    // Display student information
    setInnerHTML("nam", `<strong>Student Name:</strong> ${stuName}`);
    setInnerHTML("brd", `<strong>Board:</strong> ${board}`);
    setInnerHTML("stu_roll", `<strong>Roll Number:</strong> ${rollNum}`);
    setInnerHTML("stu_reg", `<strong>Registration Number:</strong> ${regNum}`);

    // Display subject results with grades
    setInnerHTML("ban1st", `Bangla 1st Paper: ${bfpaper} (${calculateGrade(bfpaper)})`);
    setInnerHTML("ban2nd", `Bangla 2nd Paper: ${blpaper} (${calculateGrade(blpaper)})`);
    setInnerHTML("en1st", `English 1st Paper: ${efpaper} (${calculateGrade(efpaper)})`);
    setInnerHTML("en2nd", `English 2nd Paper: ${elpaper} (${calculateGrade(elpaper)})`);
    setInnerHTML("ict", `ICT: ${ict} (${calculateGrade(ict)})`);
    setInnerHTML("islam", `Islam: ${islam} (${calculateGrade(islam)})`);
    setInnerHTML("math", `Math: ${math} (${calculateGrade(math)})`);
    setInnerHTML("phy", `Physics: ${physic} (${calculateGrade(physic)})`);
    setInnerHTML("che", `Chemistry: ${chemistry} (${calculateGrade(chemistry)})`);
    setInnerHTML("bio", `Biology: ${biology} (${calculateGrade(biology)})`);
    setInnerHTML("hm", `Higher Math: ${heigher} (${calculateGrade(heigher)})`);

    // Add total marks and GPA
    if (resultInfo) {
      const totalMarksElement = document.createElement('p');
      totalMarksElement.innerHTML = `<strong>Total Marks:</strong> ${totalMarks.toFixed(2)}`;
      const averageMarksElement = document.createElement('p');
      averageMarksElement.innerHTML = `<strong>Average Marks:</strong> ${averageMarks.toFixed(2)}`;
      const finalGradeElement = document.createElement('p');
      finalGradeElement.innerHTML = `<strong>Final Grade:</strong> ${calculateGrade(averageMarks)}`;
      
      resultInfo.appendChild(totalMarksElement);
      resultInfo.appendChild(averageMarksElement);
      resultInfo.appendChild(finalGradeElement);
    }
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
    return "F (Fail)";
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

function result() {
  var stuName = document.getElementById("studnetName").value;
  var rollNum = document.getElementById("rollNumber").value;
  var board = document.getElementById("board").value;
  var regNum = document.getElementById("regNumber").value;

  //result
  var bfpaper = document.getElementById("bfpaper").value;
  var blpaper = document.getElementById("blpaper").value;
  var efpaper = document.getElementById("efpaper").value;
  var elpaper = document.getElementById("elpaper").value;
  var ict = document.getElementById("ict").value;
  var islam = document.getElementById("islam").value;
  var math = document.getElementById("math").value;
  var physic = document.getElementById("physic").value;
  var physic = document.getElementById("physic").value;
  var chemistry = document.getElementById("chemistry").value;
  var biology = document.getElementById("biology").value;
  var heigher = document.getElementById("heigher").value;

  //popup
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  var overlay = document.getElementById("background-overlay");
  overlay.style.display = "block";

  document.getElementById("nam").innerHTML = "Student Name: " + stuName;
  document.getElementById("brd").innerHTML = "Board: " + board;
  document.getElementById("stu_roll").innerHTML = "Roll Number: " + rollNum;
  document.getElementById("stu_reg").innerHTML =
    "Registration Number: " + regNum;
  document.getElementById("ban1st").innerHTML =
    "Bangla 1st Paper: " + Bfpaper(bfpaper);
  document.getElementById("ban2nd").innerHTML =
    "Bangla 2nd Paper: " + Blpaper(blpaper);
  document.getElementById("en1st").innerHTML =
    "English 1st Paper: " + Efpaper(efpaper);
  document.getElementById("en2nd").innerHTML =
    "English 2nd Paper: " + Elpaper(elpaper);
  document.getElementById("ict").innerHTML = "Ict: " + Ict(ict);
  document.getElementById("islam").innerHTML = "Islam: " + Islam(islam);
  document.getElementById("math").innerHTML = "Math: " + Math(math);
  document.getElementById("phy").innerHTML = "Physic: " + Physic(physic);
  document.getElementById("che").innerHTML =
    "Chemistry: " + Chemistry(chemistry);
  document.getElementById("bio").innerHTML = "Biology: " + Biology(biology);
  document.getElementById("hm").innerHTML = "Heigher: " + Heigher(heigher);

  function mainFunction(marks) {
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

  function Bfpaper(marks) {
    return mainFunction(marks);
  }

  function Blpaper(marks) {
    return mainFunction(marks);
  }

  function Efpaper(marks) {
    return mainFunction(marks);
  }

  function Elpaper(marks) {
    return mainFunction(marks);
  }

  function Ict(marks) {
    return mainFunction(marks);
  }

  function Islam(marks) {
    return mainFunction(marks);
  }

  function Math(marks) {
    return mainFunction(marks);
  }

  function Physic(marks) {
    return mainFunction(marks);
  }

  function Chemistry(marks) {
    return mainFunction(marks);
  }

  function Biology(marks) {
    return mainFunction(marks);
  }

  function Heigher(marks) {
    return mainFunction(marks);
  }
}

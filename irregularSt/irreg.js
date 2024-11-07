function logout() {
    window.location.href = '../index.html';
    alert("Logged out successfully!");
  }
  
  document.getElementById("enterButton").addEventListener("click", function() {
    const selectedSubject = document.getElementById("subjectSelect").value;

  
    switch (selectedSubject) {
        case "perdev":
            window.location.href = "pages/personal_development.html";
            break;
        case "eapp":
            window.location.href = "pages/eapp.html";
            break;
        case "philo":
            window.location.href = "pages/philosophy.html";
            break;
        default:
            alert("Please select a valid subject.");
    }
});


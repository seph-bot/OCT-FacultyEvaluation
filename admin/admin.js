function logout() {
    window.location.href = '../index.html';
    alert("Logged out successfully!");
  }
  


  let teachers = [
    {name: "Angelica Digno", subject:"Practical Research 2"}
];

function addTeacher(event) {
    event.preventDefault();
    const name = document.getElementById("teacherName").value;
    const subject = document.getElementById("subject").value;
    teachers.push({ name, subject });
    displayTeachers();
}

function displayTeachers() {
    const teacherTable = document.getElementById("teacherTable").getElementsByTagName("tbody")[0];
    teacherTable.innerHTML = "";
    teachers.forEach((teacher, index) => {
        const row = teacherTable.insertRow();
        row.insertCell(0).textContent = teacher.name;
        row.insertCell(1).textContent = teacher.subject;
        const actionCell = row.insertCell(2);
        actionCell.innerHTML = `<button onclick="removeTeacher(${index})">Remove</button>`;
    });
}

function removeTeacher(index) {
    teachers.splice(index, 1);
    displayTeachers();
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("teacherTable")) {
        displayTeachers();
    }
});


let students = [
    { name: "Jan", strand: "ICT", section: "LYRA" },
    { name: "Tristan", strand: "ICT", section: "LYRA" },
    { name: "Joseph", strand: "ICT", section: "LYRA" }
];

function displayStudents() {
    const studentTable = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    studentTable.innerHTML = "";
    students.forEach((student, index) => {
        const row = studentTable.insertRow();
        row.insertCell(0).textContent = student.name;
        row.insertCell(1).textContent = student.strand;
        row.insertCell(2).textContent = student.section;
        const actionCell = row.insertCell(3);
        actionCell.innerHTML = `<button onclick="removeStudent(${index})">Remove</button>`;
    });
}


function addStudent(event) {
    event.preventDefault();
    const name = document.getElementById("studentName").value;
    const strand = document.getElementById("strand").value;
    const section = document.getElementById("section").value;
    students.push({ name, strand, section });
    displayStudents();
}


function removeStudent(index) {
    students.splice(index, 1);
    displayStudents();
}


let evaluations = [
    { teacher: "Cherry Escava", subject: "Personal Development", points: 90 },
    { teacher: "Francis Aviñante", subject: "CSS", points: 89 },
    { teacher: "Angelica Digno", subject: "PR", points: 89 }
];


function displayEvaluations() {
    const evaluationTable = document.getElementById("evaluationTable").getElementsByTagName("tbody")[0];
    evaluationTable.innerHTML = "";

    const sortedEvaluations = evaluations.slice().sort((a, b) => b.points - a.points);

    sortedEvaluations.forEach((evaluation, index) => {
        const row = evaluationTable.insertRow();
        row.insertCell(0).textContent = evaluation.teacher;
        row.insertCell(1).textContent = evaluation.subject;
        row.insertCell(2).textContent = evaluation.points;
        row.insertCell(3).textContent = index + 1;  
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("studentTable")) {
        displayStudents();
    }
    if (document.getElementById("evaluationTable")) {
        displayEvaluations();
    }
});


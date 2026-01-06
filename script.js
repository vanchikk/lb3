let students = [];

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const surname = document.getElementById('surname').value.trim();
    const grades = Array.from(document.querySelectorAll('.grade')).map(input => parseInt(input.value));

    let category = '';
    if (grades.includes(2)) {
        category = 'неуспішний';
    } else if (grades.every(g => g === 5)) {
        category = 'відмінник';
    } else if (grades.every(g => g >= 4)) {
        category = 'хорошист';
    } else {
        category = 'середній'; 
    }

    students.push({ surname, grades, category });


    this.reset();
    alert(`Студент ${surname} доданий як "${category}"`);
});

document.getElementById('showSummary').addEventListener('click', function() {
    const summaryDiv = document.getElementById('summary');

    const counts = {
        'відмінник': 0,
        'хорошист': 0,
        'неуспішний': 0,
        'середній': 0
    };

    const failedStudents = [];

    students.forEach(student => {
        counts[student.category]++;
        if (student.category === 'неуспішний') {
            failedStudents.push(student.surname);
        }
    });

    summaryDiv.innerHTML = `
        Відмінники: ${counts['відмінник']}<br>
        Хорошисти: ${counts['хорошист']}<br>
        Середні: ${counts['середній']}<br>
        Неуспішні: ${counts['неуспішний']}<br>
        Прізвища неуспішних: ${failedStudents.join(', ')}
    `;
});

document.getElementById('generateRandom').addEventListener('click', function() {
    const gradeInputs = document.querySelectorAll('.grade');
    gradeInputs.forEach(input => {
        input.value = Math.floor(Math.random() * 4) + 2; 
    });
});


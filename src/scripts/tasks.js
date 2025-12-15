fetch('tasks/task1.json')
  .then((response) => response.text())
  .then((code) => {
    document.getElementById('task1Code').textContent = code;
  });

fetch('tasks/task2.js')
  .then((response) => response.text())
  .then((code) => {
    document.getElementById('task2Code').textContent = code;
  });

fetch('tasks/task3.js')
  .then((response) => response.text())
  .then((code) => {
    document.getElementById('task3Code').textContent = code;
  });

fetch('tasks/task4.js')
  .then((response) => response.text())
  .then((code) => {
    document.getElementById('task4Code').textContent = code;
  });

fetch('tasks/task5.html')
  .then((response) => response.text())
  .then((code) => {
    document.getElementById('task5CodeHTML').textContent = code;
  });

fetch('tasks/task5.js')
  .then((response) => response.text())
  .then((code) => {
    document.getElementById('task5CodeJS').textContent = code;
  });

fetch('tasks/task6.js')
  .then((response) => response.text())
  .then((code) => {
    document.getElementById('task6Code').textContent = code;
  });

fetch('tasks/task7.sql')
  .then((response) => response.text())
  .then((code) => {
    document.getElementById('task7Code').textContent = code;
  });

fetch('tasks/task8.js')
  .then((response) => response.text())
  .then((code) => {
    document.getElementById('task8Code').textContent = code;
  });

const tasks = [
  ['task1.json', 'task1Code'],
  ['task2.js', 'task2Code'],
  ['task3.js', 'task3Code'],
  ['task4.js', 'task4Code'],
  ['task5.html', 'task5CodeHTML'],
  ['task5.js', 'task5CodeJS'],
  ['task6.js', 'task6Code'],
  ['task7.sql', 'task7Code'],
  ['task8.js', 'task8Code'],
];

tasks.forEach(([file, targetId]) => {
  fetch(`${import.meta.env.BASE_URL}tasks/${file}`)
    .then((res) => res.text())
    .then((code) => {
      const el = document.getElementById(targetId);
      if (el) el.textContent = code;
    })
    .catch((err) => console.error(`Error loading ${file}`, err));
});

import './styles/main.css';
import './scripts/task1';
import './scripts/task2';
import './scripts/task3';
import './scripts/task4';
import './scripts/task5';
import './scripts/task6';
import './scripts/task8';
import './scripts/tasks';

document.addEventListener('click', (e) => {
  const button = e.target.closest('.copy-button');
  if (!button) return;

  const codeId = button.dataset.target;
  const codeEl = document.getElementById(codeId);

  if (!codeEl) return;

  navigator.clipboard.writeText(codeEl.textContent).then(() => {
    const originalText = button.textContent;
    button.textContent = 'Скопійовано';

    setTimeout(() => {
      button.textContent = originalText;
    }, 1000);
  });
});

console.log('BASE_URL =', import.meta.env.BASE_URL);
console.log('Тестовий запит');

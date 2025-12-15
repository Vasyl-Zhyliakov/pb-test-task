/*
***Для коректної роботи запитів попередньо потрібно налаштувати proxy в проекті. В цьому проекті proxy вже налаштовано, тому і перевіряти роботу коду краще в ньому, а не в компіляторах коду
1. Створюємо функцію getCourse(url), яка робить запит до API за вказанною адресою.
  Якщо відповідь успішна - повертаємо отримані дані у форматі JSON.
  Якщо запит неуспішний - викликаємо помилку.

2. У функції getExchangeData() отримуємо дані курсів валют на сьогодніній день за допомогою getCourse(todayUrl). До отриманих даних додаємо дату та формуємо
об’єкт preparedToday. Цей об’єкт додається у масив statistics, який буде містити дані за кожен день тижня.

3. Створюємо допоміжну функцію getPastCourse(date). Вона отримує архівний курс за вказаний день, відфільтровує в ньому тільки курси 'USD' та 'EUR' та повертає у форматі, подібному до preparedToday.

4. За допомогою циклу знаходимо дати попередніх шести днів. Для кожної з дат, за допомогою getPastCourse(date), отримуємо дані курсів обміну та наповнюємо масив statistics

5. Опціонально сортуємо копію масиву statistics за необхідними параметрами (я обрав курс продажу 'USD') за зростанням та зберігаємо в sortedByUSD.

6. Готуємо і повертаємо дані в результаті виконання функції getExchangeData():
 6.1 today - масив курсів валют з першого елементу statistics
 6.2 yesterday - масив курсів валют з другого елементу statistics
 6.3 weakStatistics - тижнева вибірка: 
   - minUSD - перший елемент sortedByUSD (мінімальний курс продажу USD)
   - maxUSD - останній елемент sortedByUSD (максимальний курс продажу USD)
*/

async function getCourse(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const dataWrapped = await res.json();
  return JSON.parse(dataWrapped.contents);
}

async function getPastCourse(date) {
  const pastUrl =
    `https://api.allorigins.win/get?url=` +
    `https://api.privatbank.ua/p24api/exchange_rates?date=${date}`;
  const pastData = await getCourse(pastUrl);

  const filteredData = pastData.exchangeRate.filter(
    (item) => item.currency === 'USD' || item.currency === 'EUR'
  );

  const preparedData = filteredData.map((item) => ({
    ccy: item.currency,
    base_ccy: item.baseCurrency,
    buy: item.purchaseRate.toString(),
    sale: item.saleRate.toString(),
  }));

  return {
    date: date,
    courses: preparedData,
  };
}

async function getExchangeData() {
  const todayUrl =
    `https://api.allorigins.win/get?url=` +
    'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5';
  const today = await getCourse(todayUrl);
  const preparedToday = {
    date: new Date().toLocaleDateString('uk-UA'),
    courses: [...today],
  };

  const statistics = [preparedToday];

  for (let i = 1; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const preparedDate = date.toLocaleDateString('uk-UA');

    const dateData = await getPastCourse(preparedDate);
    statistics.push(dateData);
  }

  const sortedByUSD = [...statistics].sort((a, b) => {
    const usdA = a.courses.find((item) => item.ccy === 'USD');
    const usdB = b.courses.find((item) => item.ccy === 'USD');

    return +usdA.sale - +usdB.sale;
  });

  return {
    today: statistics[0].courses,
    yesterday: statistics[1].courses,
    weakStatistics: {
      minUSD: sortedByUSD[0],
      maxUSD: sortedByUSD[sortedByUSD.length - 1],
    },
  };
}

const resultDiv = document.getElementById('result8');
const result = JSON.stringify(await getExchangeData(), null, 2);
resultDiv.textContent = result;

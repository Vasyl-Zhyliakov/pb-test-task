<details>
<summary>Завдання 1</summary>

[Посилання на скріншот](https://i.ibb.co/pvKNfntM/Screenshot-182.png)

<details>
  <summary>Скріншот схеми (локальний файл)</summary>

![Схема](src/images/Screenshot.png)

</details>

<details>
  <summary>JSON схеми (його можна імпортувати в Node-Red)</summary>

```JSON
[
  {
    "id": "37aa61a05580be90",
    "type": "tab",
    "label": "Поток 1",
    "disabled": false,
    "info": "",
    "env": []
  },
  {
    "id": "e507470033b7c9b2",
    "type": "inject",
    "z": "37aa61a05580be90",
    "name": "Старт (картку вставлено у банкомат)",
    "props": [
      {
        "p": "topic",
        "vt": "str"
      }
    ],
    "repeat": "",
    "crontab": "",
    "once": false,
    "onceDelay": 0.1,
    "topic": "",
    "x": 170,
    "y": 60,
    "wires": [["a7706aa54461b951"]]
  },
  {
    "id": "a7706aa54461b951",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Перевірка валідності картки",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 500,
    "y": 60,
    "wires": [["baaf724720cd10df"]]
  },
  {
    "id": "baaf724720cd10df",
    "type": "switch",
    "z": "37aa61a05580be90",
    "name": "Карта валідна?",
    "property": "cardValid",
    "propertyType": "msg",
    "rules": [
      {
        "t": "eq",
        "v": "false",
        "vt": "str"
      },
      {
        "t": "eq",
        "v": "true",
        "vt": "str"
      }
    ],
    "checkall": "true",
    "repair": false,
    "outputs": 2,
    "x": 740,
    "y": 60,
    "wires": [["1f41b812441a1fa6"], ["c71a8e08e1ac17d9"]]
  },
  {
    "id": "c71a8e08e1ac17d9",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Карта валідна, ввести PIN",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 160,
    "y": 180,
    "wires": [["bee484508e75926d"]]
  },
  {
    "id": "1f41b812441a1fa6",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Карта не валідна. Завершення роботи",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 1100,
    "y": 40,
    "wires": [[]]
  },
  {
    "id": "bee484508e75926d",
    "type": "switch",
    "z": "37aa61a05580be90",
    "name": "Введення PIN",
    "property": "payload",
    "propertyType": "msg",
    "rules": [
      {
        "t": "eq",
        "v": "false",
        "vt": "str"
      },
      {
        "t": "eq",
        "v": "true",
        "vt": "str"
      }
    ],
    "checkall": "true",
    "repair": false,
    "outputs": 2,
    "x": 400,
    "y": 180,
    "wires": [["fa2b91bcdc0666d3"], ["1a4953cc173ba277"]]
  },
  {
    "id": "fa2b91bcdc0666d3",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "PIN не правильний, збільшуємо лічильник спроб",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 730,
    "y": 160,
    "wires": [["5f61b9bc5c24b648"]]
  },
  {
    "id": "5f61b9bc5c24b648",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Лічильник спроб > 3, блокування картки, завершення роботи",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 1170,
    "y": 140,
    "wires": [[]]
  },
  {
    "id": "1a4953cc173ba277",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Доступ до опції зняття готівки",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 170,
    "y": 300,
    "wires": [["155b5590b046f43e"]]
  },
  {
    "id": "155b5590b046f43e",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Введення суми ",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 480,
    "y": 300,
    "wires": [["77ef95dfb71b053e"]]
  },
  {
    "id": "77ef95dfb71b053e",
    "type": "switch",
    "z": "37aa61a05580be90",
    "name": "Перевірка коштів на рахунку і в банкоматі",
    "property": "payload",
    "propertyType": "msg",
    "rules": [
      {
        "t": "eq",
        "v": "false",
        "vt": "str"
      },
      {
        "t": "eq",
        "v": "true",
        "vt": "str"
      }
    ],
    "checkall": "true",
    "repair": false,
    "outputs": 2,
    "x": 790,
    "y": 300,
    "wires": [["e8da3504b4773c66"], ["341d72742ece81f0"]]
  },
  {
    "id": "341d72742ece81f0",
    "type": "switch",
    "z": "37aa61a05580be90",
    "name": "Коштів достатньо, перевірка наявних купюр",
    "property": "payload",
    "propertyType": "msg",
    "rules": [
      {
        "t": "eq",
        "v": "false",
        "vt": "str"
      },
      {
        "t": "eq",
        "v": "true",
        "vt": "str"
      }
    ],
    "checkall": "true",
    "repair": false,
    "outputs": 2,
    "x": 220,
    "y": 400,
    "wires": [["70e8248fa9c30291"], ["3adc4b21a1f2fd99"]]
  },
  {
    "id": "70e8248fa9c30291",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Немає необхідних купюр, відповідне повідомлення та повернення до вводу даних",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 920,
    "y": 400,
    "wires": [[]]
  },
  {
    "id": "e8da3504b4773c66",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Коштів недостатньо, відповідне повідомлення та поверненя до введення суми",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 1090,
    "y": 240,
    "wires": [[]]
  },
  {
    "id": "3adc4b21a1f2fd99",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Списання коштів",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 130,
    "y": 500,
    "wires": [["7c348672a429b46b"]]
  },
  {
    "id": "7c348672a429b46b",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Видача готівки",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 360,
    "y": 500,
    "wires": [["8bc5c6171ec2d096"]]
  },
  {
    "id": "8bc5c6171ec2d096",
    "type": "switch",
    "z": "37aa61a05580be90",
    "name": "Видавати чек",
    "property": "payload",
    "propertyType": "msg",
    "rules": [
      {
        "t": "eq",
        "v": "false",
        "vt": "str"
      },
      {
        "t": "eq",
        "v": "true",
        "vt": "str"
      }
    ],
    "checkall": "true",
    "repair": false,
    "outputs": 2,
    "x": 560,
    "y": 500,
    "wires": [["a8177afea6d31f54"], ["508a4c4940f5ac24"]]
  },
  {
    "id": "508a4c4940f5ac24",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Так. Друк чеку",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 540,
    "y": 580,
    "wires": [["a8177afea6d31f54"]]
  },
  {
    "id": "a8177afea6d31f54",
    "type": "switch",
    "z": "37aa61a05580be90",
    "name": "Продовжити роботу?",
    "property": "payload",
    "propertyType": "msg",
    "rules": [
      {
        "t": "eq",
        "v": "true",
        "vt": "str"
      },
      {
        "t": "eq",
        "v": "false",
        "vt": "str"
      }
    ],
    "checkall": "true",
    "repair": false,
    "outputs": 2,
    "x": 900,
    "y": 580,
    "wires": [["fdef78815ef4a573"], ["ede2d26742290fcc"]]
  },
  {
    "id": "fdef78815ef4a573",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Якщо так - перехід до введення PIN",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 1190,
    "y": 540,
    "wires": [[]]
  },
  {
    "id": "ede2d26742290fcc",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Якщо ні, завершення роботи",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 270,
    "y": 680,
    "wires": [["e0f8a07d0f430c68"]]
  },
  {
    "id": "e0f8a07d0f430c68",
    "type": "function",
    "z": "37aa61a05580be90",
    "name": "Повернення картки",
    "func": "\nreturn msg;",
    "outputs": 1,
    "timeout": 0,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "libs": [],
    "x": 600,
    "y": 680,
    "wires": [[]]
  }
]
```

</details>

</details>

<details>
<summary>Завдання 2</summary>

```JavaScript
function getTriangleValue(a, b, c) {
  const first = Number(a);
  const second = Number(b);
  const third = Number(c);

  if (!Number.isFinite(first) || !Number.isFinite(second) || !Number.isFinite(third)) {
    return -1;
  }

  if (first + second <= third || first + third <= second || second + third <= first) {
    return -1;
  }

  const p = (first + second + third) / 2;
  return Math.sqrt(p * (p - first) * (p - second) * (p - third));
}
```

</details>

<details>
<summary>Завдання 3</summary>

```JavaScript
function createRandomUser() {
  const statuses = ['vip', 'gold', 'usual'];

  const status = statuses[Math.floor(Math.random() * statuses.length)];

  const start = new Date('1950-01-01').getTime();
  const end = Date.now();
  const randomDate = new Date(Math.random() * (end - start) + start);

  return {
    status,
    date: randomDate,
  };
}

function randomUserList() {
  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push(createRandomUser());
  }

  const orders = {
    vip: 1,
    gold: 2,
    usual: 3,
  };

  users.sort((a, b) => {
    if (orders[a.status] !== orders[b.status]) {
      return orders[a.status] - orders[b.status];
    }

    return b.date - a.date;
  });

  return users;
}
```

</details>

<details>
<summary>Завдання 4</summary>

```JavaScript
function isNotEmptyArray(data) {
  if (Array.isArray(data) && data.length > 0) {
    return data;
  }

  return false;
}
```

</details>

<details>
<summary>Завдання 5</summary>

[Demo](https://vasyl-zhyliakov.github.io/pb-test-task/)

<details>
<summary>Масив даних із викликами ботів</summary>

```JavaScript
const callBotsArr = [
  {
    sessionId: 'f4465250-1066-11eb-a1ba-333704aff6af',
    channelId: '543ea1f0-81d8-11e8-99e2-75a22f922020',
    companyId: 'i14778026796',
    botName: 'moneybox',
    time: 1602677158,
    numderBot: 1,
  },
  {
    sessionId: '74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5',
    channelId: 'd79ad580-8432-11e8-8ccb-47a5457db1b2',
    companyId: 'i14778026796',
    botName: 'changecrlim',
    time: 1602933008,
    numderBot: 2,
  },
  {
    sessionId: '74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5',
    channelId: 'd79ad580-8432-11e8-8ccb-47a5457db1b2',
    companyId: 'i14778026796',
    botName: 'changecrlim',
    time: 1602930478,
    numderBot: 3,
  },
  {
    sessionId: '74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5',
    channelId: 'd79ad580-8432-11e8-8ccb-47a5457db1b2',
    companyId: 'i14778026796',
    botName: 'partpaym',
    time: 1602929458,
    numderBot: 4,
  },
  {
    sessionId: 'eeae0530-1067-11eb-a1ba-333704aff6af',
    channelId: '70fff320-42d9-11ea-ac8e-33aee523fe76',
    companyId: 'i14778026796',
    botName: 'mainformcurr',
    time: 1602835558,
    numderBot: 5,
  },
  {
    sessionId: 'eeae0530-1067-11eb-a1ba-333704aff6af',
    channelId: '70fff320-42d9-11ea-ac8e-33aee523fe76',
    companyId: 'i14778026796',
    botName: 'formcurr',
    time: 1602835258,
    numderBot: 6,
  },
];
```

</details>

#### HTML vs inline styles

```HTML
<section style="width: 80%; margin: 80px auto 0">
  <h2>CallBots</h2>

  <label>
    Фільтр за botName:
    <select id="botFilter" style="margin-bottom: 20px">
      <option value="all">Всі</option>
    </select>
  </label>

  <table class="table" style="border-collapse: collapse">
    <thead>
      <tr>
        <th style="padding: 6px 10px; border: 1px solid #000; text-align: center">
          sessionId
        </th>
        <th style="padding: 6px 10px; border: 1px solid #000; text-align: center">
          channelId
        </th>
        <th style="padding: 6px 10px; border: 1px solid #000; text-align: center">
          companyId
        </th>
        <th style="padding: 6px 10px; border: 1px solid #000; text-align: center">botName</th>
        <th style="padding: 6px 10px; border: 1px solid #000; text-align: center">time</th>
        <th
          id="sortNum"
          style="
            padding: 6px 10px;
            border: 1px solid #000;
            text-align: center;
            cursor: pointer;
          "
        >
          numderBot
        </th>
      </tr>
    </thead>

    <tbody id="tableBody"></tbody>
  </table>
/section>
```

#### JavaScript

```JavaScript
const tableBody = document.getElementById('tableBody');
const botFilter = document.getElementById('botFilter');
const sortNumBtn = document.getElementById('sortNum');

let filteredBots = [...callBotsArr];
const sortedAsc = [...callBotsArr].sort((a, b) => a.numderBot - b.numderBot);
let sortAsc = !(
  filteredBots.map((b) => b.numderBot).toString() === sortedAsc.map((b) => b.numderBot).toString()
);

function renderTable(data) {
  tableBody.innerHTML = '';
  const style = 'padding: 6px 10px; border: 1px solid #000; text-align: center';
  data.forEach((item) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
          <td style="${style}">${item.sessionId}</td>
          <td style="${style}">${item.channelId}</td>
          <td style="${style}">${item.companyId}</td>
          <td style="${style}">${item.botName}</td>
          <td style="${style}">${item.time}</td>
          <td style="${style}">${item.numderBot}</td>
        `;
    tableBody.appendChild(tr);
  });
}

function fillSelect() {
  const names = [...new Set(callBotsArr.map((i) => i.botName))];

  names.forEach((name) => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    botFilter.appendChild(option);
  });
}

botFilter.addEventListener('change', () => {
  const value = botFilter.value;
  filteredBots =
    value === 'all' ? [...callBotsArr] : callBotsArr.filter((i) => i.botName === value);

  renderTable(filteredBots);
});

sortNumBtn.addEventListener('click', () => {
  filteredBots.sort((a, b) => (sortAsc ? a.numderBot - b.numderBot : b.numderBot - a.numderBot));
  sortAsc = !sortAsc;
  renderTable(filteredBots);
});

fillSelect();
renderTable(filteredBots);
```

</details>

<details>
<summary>Завдання 6</summary>

<details>
<summary>Масив даних діалогів та Масив даних із викликами ботів</summary>

```JavaScript
const sesInfoArr = [
  {
    sessionId: '74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5',
    channelId: 'd79ad580-8432-11e8-8ccb-47a5457db1b2',
    companyId: 'i14778026796',
    ekbId: '111111',
  },
  {
    sessionId: 'eeae0530-1067-11eb-a1ba-333704aff6af',
    channelId: '70fff320-42d9-11ea-ac8e-33aee523fe76',
    companyId: 'i14778026796',
    ekbId: '222222',
  },
  {
    sessionId: 'f4465250-1066-11eb-a1ba-333704aff6af',
    channelId: '543ea1f0-81d8-11e8-99e2-75a22f922020',
    companyId: 'i14778026796',
    ekbId: '333333',
  },
];

const callBotsArr = [
{
sessionId: 'f4465250-1066-11eb-a1ba-333704aff6af',
channelId: '543ea1f0-81d8-11e8-99e2-75a22f922020',
companyId: 'i14778026796',
botName: 'moneybox',
time: 1602677158,
numderBot: 1,
},
{
sessionId: '74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5',
channelId: 'd79ad580-8432-11e8-8ccb-47a5457db1b2',
companyId: 'i14778026796',
botName: 'changecrlim',
time: 1602933008,
numderBot: 2,
},
{
sessionId: '74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5',
channelId: 'd79ad580-8432-11e8-8ccb-47a5457db1b2',
companyId: 'i14778026796',
botName: 'changecrlim',
time: 1602930478,
numderBot: 3,
},
{
sessionId: '74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5',
channelId: 'd79ad580-8432-11e8-8ccb-47a5457db1b2',
companyId: 'i14778026796',
botName: 'partpaym',
time: 1602929458,
numderBot: 4,
},
{
sessionId: 'eeae0530-1067-11eb-a1ba-333704aff6af',
channelId: '70fff320-42d9-11ea-ac8e-33aee523fe76',
companyId: 'i14778026796',
botName: 'mainformcurr',
time: 1602835558,
numderBot: 5,
},
{
sessionId: 'eeae0530-1067-11eb-a1ba-333704aff6af',
channelId: '70fff320-42d9-11ea-ac8e-33aee523fe76',
companyId: 'i14778026796',
botName: 'formcurr',
time: 1602835258,
numderBot: 6,
},
];

```

</details>

```JavaScript
function getUnicData(data) {
  const result = {};

  data.forEach((item) => {
    const key = `${item.botName}__${item.sessionId}`;

    if (!result[key] || result[key].time < item.time) {
      result[key] = item;
    }
  });

  return Object.values(result);
}

function getCombinedData(sesInfoArr, callBotsArr) {
  const combinedData = getUnicData([...callBotsArr]).map((bot) => {
    const session = sesInfoArr.find((item) => item.sessionId === bot.sessionId);

    return {
      ...bot,
      ekbId: session ? session.ekbId : null,
    };
  });

  return combinedData.sort((a, b) => b.time - a.time);
}
```

</details>

<details>
<summary>Завдання 7</summary>

#### SQL

```SQL
CREATE TABLE sesInfoArr (sessionId VARCHAR(50), channelId VARCHAR(50), companyId VARCHAR(20),
ekbId VARCHAR(20));

CREATE TABLE callBotsArr (sessionId VARCHAR(50), channelId VARCHAR(50), companyId VARCHAR(20),
botName VARCHAR(50), time BIGINT, numderBot INT);

INSERT INTO sesInfoArr (sessionId, channelId, companyId, ekbId)
VALUES
('74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5', 'd79ad580-8432-11e8-8ccb-47a5457db1b2', 'i14778026796', '111111'),
('eeae0530-1067-11eb-a1ba-333704aff6af', '70fff320-42d9-11ea-ac8e-33aee523fe76', 'i14778026796', '222222'),
('f4465250-1066-11eb-a1ba-333704aff6af', '543ea1f0-81d8-11e8-99e2-75a22f922020', 'i14778026796', '333333');

INSERT INTO callBotsArr (sessionId, channelId, companyId, botName, time, numderBot)
VALUES
('f4465250-1066-11eb-a1ba-333704aff6af', '543ea1f0-81d8-11e8-99e2-75a22f922020', 'i14778026796', 'moneybox', 1602677158, 1),
('74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5', 'd79ad580-8432-11e8-8ccb-47a5457db1b2', 'i14778026796', 'changecrlim', 1602933008, 2),
('74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5', 'd79ad580-8432-11e8-8ccb-47a5457db1b2', 'i14778026796', 'changecrlim', 1602930478, 3),
('74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5', 'd79ad580-8432-11e8-8ccb-47a5457db1b2', 'i14778026796', 'partpaym', 1602929458, 4),
('eeae0530-1067-11eb-a1ba-333704aff6af', '70fff320-42d9-11ea-ac8e-33aee523fe76', 'i14778026796', 'mainformcurr', 1602835558, 5),
('eeae0530-1067-11eb-a1ba-333704aff6af', '70fff320-42d9-11ea-ac8e-33aee523fe76', 'i14778026796', 'formcurr', 1602835258, 6);

SELECT \*
FROM callBotsArr
WHERE numderBot > 3
ORDER BY numderBot ASC;
```

</details>

<details>
<summary>Завдання 8</summary>

#### Опис

1. Створюємо функцію getCourse(url), яка робить запит до API за вказанною адресою
   Якщо відповіді успішна — повертаємо отримані дані у форматі JSON.
   Якщо запит неуспішний — викликаємо помилку.

2. У функції getExchangeData() отримуємо дані курсів валют на сьогодніній день за допомогою getCourse(todayUrl). До отриманих даних додаємо дату та формуємо
   об’єкт preparedToday. Цей об’єкт додається у масив statistics, який буде містити дані за кожен день тижня.

3. Створюємо допоміжну функцію getPastCourse(date). Вона отримує архівний курс за вказаний день, відфільтровує в ньому тільки курси 'USD' та 'EUR' та повертає у форматі, подібному до preparedToday.

4. За допомогою циклу знаходимо дати попередніх шести днів. Для кожної з дат За допомогою getPastCourse(date) дотримуємо дані курсів обміну та наповнюємо масив statistics

5. Опціонально сортуємо копію масиву statistics за необхідними параметрами (я обрав курс продажу 'USD') за зростанням та зберігаємо в sortedByUSD.

6. Готуємо і повертаємо дані в результаті виконання функції getExchangeData():
   6.1 today - масив курсів валют з першого елементу statistics
   6.2 yesterday - масив курсів валют з другого елементу statistics
   6.3 weakStatistics - тижнева вибірка:
   - minUSD - перший елемент sortedByUSD (мінімальний курс продажу USD)
   - maxUSD - останній елемент sortedByUSD (максимальний курс продажу USD)

\*\*\*Для коректної роботи запитів попердньо потрібно налаштувати proxy в проекті. В цьому проекті proxy вже налаштовано, тому і перевіряти роботу коду краще в ньому, а не в компіляторах коду

#### JavaScript

```JavaScript
async function getCourse(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error();
  }
  return res.json();
}

async function getPastCourse(date) {
  const pastUrl = `/api/p24api/exchange_rates?date=${date}`;
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
  const todayUrl = '/api/p24api/pubinfo?exchange&coursid=5';
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
```

</details>

### Для запуску проекту локально, необхідно виконати наступні кроки:

- Клонувати репозиторій:
  git clone https://github.com/Vasyl-Zhyliakov/pb-test-task.git
- Перейдіть в директорію проекту:
  cd pb-test-task
- Встановіть залежності (Переконайтесь що встановлено Node.js):
  npm install
- ЗАпустіть сервер розробки:
  npm run dev
- В консолі ви побачите посилання на локальний сервер:
  http://localhost:5173

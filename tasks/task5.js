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

const tableBody = document.getElementById('tableBody');
const botFilter = document.getElementById('botFilter');
const sortNumBtn = document.getElementById('sortNum');
const sortArrow = document.getElementById('sortArrow');

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

  sortArrow.textContent = sortAsc ? '↓' : '↑';
  sortAsc = !sortAsc;
  renderTable(filteredBots);
});

fillSelect();
renderTable(filteredBots);

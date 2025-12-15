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
  const sessionMap = new Map(sesInfoArr.map((item) => [item.sessionId, item]));

  const combinedData = getUnicData([...callBotsArr]).map((bot) => {
    const session = sessionMap.get(bot.sessionId);

    return {
      ...bot,
      ekbId: session ? session.ekbId : null,
    };
  });

  return combinedData.sort((a, b) => b.time - a.time);
}

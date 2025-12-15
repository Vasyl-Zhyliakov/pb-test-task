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

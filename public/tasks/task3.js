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

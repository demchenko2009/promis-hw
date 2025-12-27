const delay = ms => {
  // Твій код
return new Promise((resolve) => {
    setTimeout(()=> {
resolve(ms)
    },ms)
})

};

const logger = time => console.log(`Resolved after ${time}ms`);

// Виклич функції для перевірки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms









// Завдання 2

// Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback, а приймала всього два параметри allUsers і userName і повертала проміс.



const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve) => {
          const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,

  );
  
  resolve(updatedUsers);
    })


};

const logger1 = updatedUsers => console.table(updatedUsers);



toggleUserState(users, 'Mango').then(logger1);
toggleUserState(users, 'Lux').then(logger1);















// Завдання 3

// Перепиши функцію makeTransaction() так, щоб вона не використовувала callback-функції onSuccess і onError, а приймала всього один параметр transaction і повертала проміс.



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    return new Promise ((resolve, reject) => {
  const delay = randomIntegerFromInterval(200, 500);

  setTimeout(() => {
    const canProcess = Math.random() > 0.3;
console.log(canProcess);

    if (canProcess) {
      resolve(transaction.id, delay);
    } else {
      reject(transaction.id);
    }
  }, delay);
    })

};

const logSuccess = (id, time) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};


/*
 * Повинно працювати так
 */
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
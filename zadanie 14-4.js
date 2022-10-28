// Создать Promise, в котором c задержкой в три секунды сгенерировать случайное целое число от 1 до 100. Для создания задержки использовать setTimeout. Если сгенерированное число четное — Promise выполнится успешно (resolve), если нечетное — выполнится с ошибкой (reject). После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:

// «Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. Вместо number подставить сгенерированное число
// «Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой. Вместо number подставить сгенерированное число

let promise = new Promise((resolve, reject) => {
  let interval = getRandomInt(1, 100);
  setTimeout(() => {
    if (interval % 2 == 0) {
      resolve({ message: "Успешное выполнение promise", data: interval });
    } else if (interval % 2 == 1) {
      reject({ message: "Ошибка", data: interval });
    }
  }, 3000);
});

promise.then(
  (result) => {
    console.log(
      "Завершено успешно. Сгенерированное число четное —",
      result.data
    );
  },
  (error) => {
    console.log(
      "Завершено с ошибкой. Сгенерированное число нечетное —",
      error.data
    );
  }
);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

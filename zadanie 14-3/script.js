// Задание 3

// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://loremflickr.com/json/g/320/240/all, где get-параметр limit — это введённое число.
// Пример. Если пользователь ввёл 5, то запрос будет вида: https://loremflickr.com/json/g/320/240/all.
// После получения данных вывести ниже картинки на экран.

const btn = document.querySelector(".j-btn-request");

btn.addEventListener("click", () => {
  const value1 = document.getElementById("input").value;

  let s = document.getElementById("j-result");
  s.textContent = "";
  if (!(value1 >= 1 && value1 <= 10)) {
    s.textContent = "число вне диапазона от 1 до 10";
    return;
  } else {
    function useRequest(url) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.send();
    }
    const resultNode = document.querySelector(".pict");

    function displayResult(apiData) {
      let cards = "";
      apiData.forEach((item) => {
        const cardBlock = `
          <div class="card">sdsd
            <img
              src="${item.download_url}"
              class="card-image"/>
           </div>`;
        cards = cardBlock;
      });

      resultNode.innerHTML = cards;
    }

    useRequest("https://loremflickr.com/json/g/320/240/all", displayResult);
  }
});

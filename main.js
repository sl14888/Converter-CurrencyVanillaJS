// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// заносим в глобальный массив
const rates = {};
// поиск карточек
const elemUSD = document.querySelector('[data-value="USD"]');
const elemEUR = document.querySelector('[data-value="EUR"]');
const elemGBP = document.querySelector('[data-value="GBP"]');

getCurrencies();

async function getCurrencies() {
  // получаем данные с ЦБ РФ
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const result = await data;
  rates.USD = result.Valute.USD;
  rates.EUR = result.Valute.EUR;
  rates.GBP = result.Valute.GBP;

  // округляю значения в таблице
  elemUSD.textContent = rates.USD.Value.toFixed(2);
  elemEUR.textContent = rates.EUR.Value.toFixed(2);
  elemGBP.textContent = rates.GBP.Value.toFixed(2);
  // вывод предыдущего значения в таблицу
  elemEUR.nextElementSibling.textContent += ' ' + rates.EUR.Previous.toFixed(1);
  elemUSD.nextElementSibling.textContent += ' ' + rates.USD.Previous.toFixed(1);
  elemGBP.nextElementSibling.textContent += ' ' + rates.GBP.Previous.toFixed(1);

  // цвет для информера USD
  if (rates.USD.Value > rates.USD.Previous) {
    elemUSD.classList.add('top');
    elemUSD.textContent += ' ▲';
  } else {
    elemUSD.textContent += ' ▼';
    elemUSD.classList.add('bottom');
  }
  // цвет для информера EUR
  if (rates.EUR.Value > rates.EUR.Previous) {
    elemEUR.classList.add('top');
    elemEUR.textContent += ' ▲';
    elemEUR.classList.remove('bottom');
  } else {
    elemEUR.classList.add('bottom');
    elemEUR.textContent += ' ▼';
    elemEUR.classList.remove('top');
  }
  // цвет для информера GBP
  if (rates.GBP.Value > rates.GBP.Previous) {
    elemGBP.classList.add('top');
    elemGBP.textContent += ' ▲';
    elemGBP.classList.remove('bottom');
  } else {
    elemGBP.classList.add('bottom');
    elemGBP.textContent += ' ▼';
    elemGBP.classList.remove('top');
  }
}

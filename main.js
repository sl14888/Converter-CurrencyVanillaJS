// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
const rates = {};
const elemUSD = document.querySelector('[data-value="USD"]');
const elemEUR = document.querySelector('[data-value="EUR"]');
const elemGBP = document.querySelector('[data-value="GBP"]');

getCurrencies();

async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const result = await data;
  rates.USD = result.Valute.USD;
  rates.EUR = result.Valute.EUR;
  rates.GBP = result.Valute.GBP;

  console.log(rates);

  elemUSD.textContent = rates.USD.Value.toFixed(2);
  elemEUR.textContent = rates.EUR.Value.toFixed(2);
  elemGBP.textContent = rates.GBP.Value.toFixed(2);
  // цвет для информера USD
  if (rates.USD.Value > rates.USD.Previous) {
    elemUSD.classList.add('top');
    elemUSD.classList.remove('bottom');
  } else {
    elemUSD.classList.add('bottom');
    elemUSD.classList.remove('top');
  }
  // цвет для информера EUR
  if (rates.EUR.Value > rates.EUR.Previous) {
    elemEUR.classList.add('top');
    elemEUR.classList.remove('bottom');
  } else {
    elemEUR.classList.add('bottom');
    elemEUR.classList.remove('top');
  }
  // цвет для информера GBP
  if (rates.GBP.Value > rates.GBP.Previous) {
    elemGBP.classList.add('top');
    elemGBP.classList.remove('bottom');
  } else {
    elemGBP.classList.add('bottom');
    elemGBP.classList.remove('top');
  }
}

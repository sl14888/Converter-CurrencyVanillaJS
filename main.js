// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
const rates = {};
const elememUSD = document.querySelector('[data-value="USD"]');
const elememEUR = document.querySelector('[data-value="EUR"]');
const elememGBP = document.querySelector('[data-value="GBP"]');

getCurrencies();
async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const result = await data;
  rates.USD = result.Valute.USD;
  rates.EUR = result.Valute.EUR;
  rates.GBP = result.Valute.GBP;

  console.log(rates);

  elememUSD.textContent = rates.USD.Value.toFixed(3);
  elememEUR.textContent = rates.EUR.Value.toFixed(3);
  elememGBP.textContent = rates.GBP.Value.toFixed(3);
}

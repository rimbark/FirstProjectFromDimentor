// document.querySelector('.button').onclick = function () { getResponse(); }
// async function getResponse() {
//   let response = await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=5');
//   let data = await response.json();
//   const listForChange = document.querySelector('.cards');
//   let key;
//   for (key in data) {
//     listForChange.querySelectorAll('.cards__image')[key].src = data[key].url;
//     listForChange.querySelectorAll('.cards__title')[key].innerHTML = data[key].title;
//   }
// }

const listForChange = document.querySelector('.cards');
let key;
document.querySelector('.button').onclick = function () { fetch('https://jsonplaceholder.typicode.com/photos/?_limit=5')
  .then((response) => { return response.json(); })
  .then((data) => {
    for (key in data) {
      listForChange.querySelectorAll('.cards__image')[key].src = data[key].url;
      listForChange.querySelectorAll('.cards__title')[key].innerHTML = data[key].title;
    }
  });
}
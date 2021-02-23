// グローバルナビゲーションの開閉の切り替え
// window.onload = function () {
//   document.getElementById('js-gNavBtn').addEventListener('click', function (event) {
//     document.querySelector('html').classList.toggle('is-gNavOpen');
//   });
// };



$(function () {
  $('#js-gNavBtn').on('click', function (event) {
    $('html').toggleClass('is-gNavOpen');
  });
});

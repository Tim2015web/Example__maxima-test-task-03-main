// Функция на переключение класа для модального окна
function switchModal() { document.querySelector('#formModal').classList.toggle('modal_show'); }
// Перехватываем ссылку "Создать пользователя" и кнопку закрыть форму, и вешаем на них функцию
document.querySelectorAll('#switchModal').forEach((i) => i.addEventListener('click', switchModal));
// Перехватываем клик по области вне формы, если форма активна, то выполняем функцию
window.addEventListener('click', (e) => { if (e.target == formModal) { switchModal() } });
// Код максимально сжат по символам, просто потому что могу =^_^=
// Да и вообще, вряд ли это кто-то и когда-то будет читать, но если вдруг, то мира тебе, добра и печенек читающий :)
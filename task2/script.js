const consoleLog = document.querySelector('#consoleLog');


consoleLog.addEventListener('click', () => {
    prompt('Для чего console.log?','Служит для вывода информации в консоль');
    alert('Служит для вывода информации в консоль');
    console.log('Служит для вывода информации в консоль');
});

const al = document.querySelector('#alert');

al.addEventListener('click', () => {
    prompt('Для чего alert?','Служит для отображения информации пользователям');
    alert('Служит для отображения информации пользователям');
    console.log('Служит для отображения информации пользователям');
});
const pr = document.querySelector('#prompt');

pr.addEventListener('click', () => {
    prompt('Для чего prompt?','Отображает диалоговое окно с запросом на ввод');
    alert('Отображает диалоговое окно с запросом на ввод');
    console.log('Отображает диалоговое окно с запросом на ввод');
});
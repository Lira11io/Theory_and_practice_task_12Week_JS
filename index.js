//Ответ на 2 вопрос
//получаем позицию текста методом indexOf()
console.log("Миша".indexOf("М"));

//получаем позицию текста методом lastIndexOf()
console.log("Миша".lastIndexOf("и"));

//получаем позицию текста методом search()
console.log("Сейчас весна".search("весна"));

//получаем наличие набора символов текста методом includes()
console.log("Сейчас весна".includes("весна"));

//Ответ на 4 вопрос. Делаем первый символ заглавным
const userName = "валентина";
console.log(userName[0].toUpperCase());

//Ответ на 6 вопрос. Генерируем случайное число от 1 до 100
console.log(Math.round(Math.random() * 100));

//Ответ на 7 вопрос
const x = "Солнце";
console.log("The string length is " + x.length); //то есть 6 аргументов в объекте

//Ответ на 10 вопрос
const str = "abcdefghij";
console.log("(2,3): " + str.substr(2, 3));
//

//Решение практического задания

//Получаем переменную, куда пользователь вводит ФИО
const fio = document.querySelector(".service__input_fio");
/* console.log(fio); */

//получаем переменную, куда пользователь вводит ссылку на аватар
const avatar = document.querySelector("#avatar");
/* console.log(avatar);
console.log(avatar.value); */

//получаем переменную, куда пользователь вводит комментарий
const comment = document.querySelector(".service__input_comment");
/* console.log(comment); */

//Получаем переменную для кнопки
const button = document.querySelector(".service__input_button");
/* console.log(button); */

//Получаем переменную, куда будет попадать аватар пользователя
const chat = document.querySelector(".service__subtitle_foto");
/* console.log(chat); */

//Получаем переменную, куда будет попадать ФИО пользователя
const fio1 = document.querySelector(".service__subtitle_fio");

//Получаем переменную, куда будет попадать комментарий пользователя
const message = document.querySelector(".service__subtitle_comment");

//иВанОва лиДия петРоВна
//https://img3.akspic.ru/previews/0/8/5/2/7/172580/172580-bakenbardy-kot-koshachih-seryj_cvet-koshki_malogo_i_srednego_razmera-360x780.jpg
//купи viagRa xxx

//Функция для вывода данных пользователя в чат по нажатию на кнопку
button.addEventListener("click", () => {
  chat.innerHTML = `
  <img src=${avatar.value} alt="аватар пользователя"/>`; //добавляем аватар пользователя в чат
  /* console.log(avatar.value); */
  const arr = fio.value.split(" "); //получаю массив полного имени
  const arrUpp = []; //создаю новый пустой массив
  for (let i = 0; i < arr.length; i++) {
    arrUpp.push(
      (arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase()) //заполняю новый массив с преобразованием введенных данных
    );
  }
  let fioUpp = arrUpp.join(" "); //объединяю элементы
  fio1.textContent = `${fioUpp}:`;
  message.textContent = `"${comment.value}"`
    .replace(/viagra/gi, "***")
    .replace(/xxx/gi, "***"); //вывожу комментарий пользователя в чат с применением спам фильтра
});

//Задание со *
const info =
  '<div class="info" id="tegs">Здесь важная <a href="link">информация</a></div> о тегах HTML.';

function deleteTags(info) {
  let regex = /( |<([^>]+)>)/gi,
    result = info.replace(regex, " ");

  return result;
}
console.log(deleteTags(info));

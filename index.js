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

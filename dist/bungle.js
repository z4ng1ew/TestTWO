/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//ЗАДАЧА № 1\r\n\r\n\r\n// Дан массив цен. Тип значения number. Сформировать на его основании новый массив, где значения будут вида ‘100 р’ (цена и знак рубля, в виде строки) [100, 150, 200, 250]\r\n\r\nlet price = [100, 150, 200, 250];\r\n\r\nlet formattedprice = price.map(costs =>  `${costs} ₽`);\r\n\r\n\r\nconsole.log(formattedprice); //// Выведет: ['100 ₽', '150 ₽', '200 ₽', '250 ₽'] \r\n\r\n\r\n//Использовал короткую форму записи стрелочной функции, которая подходит для случаев, когда тело функции состоит из одного выражения, как в нашем случае.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//ЗАДАЧА № 2\r\n\r\n\r\n// Дан массив пользователей. Каждый пользователь представлен в виде массива, вида [‘alex’, 32]. Первое значение – имя (строкой), второе возраст, числом. Сформировать на его основе массив, где останутся только пользователя, старше 18 лет. [ [‘alex’, 32], [‘tomas’, 17], [‘olga’, 14], [‘andre’, 24] ] \r\n\r\n\r\n\r\nlet people = [['alex', 32], ['tomas', 17], ['olga', 14], ['andre', 24]];\r\n\r\nconst ageVerification = people.filter(person  => person [1] >= 18);\r\n\r\nconsole.log(ageVerification); //Выведет: ['alex', 32] ['andre', 24]\r\n\r\n//ageVerification - массив, где останутся только пользователя, старше 18 лет\r\n\r\n\r\n\r\n\r\n\r\n\r\n//2-ой способ решения. Через деструктуризацию массива\r\n\r\n\r\nlet people1 = [['alex', 32], ['tomas', 17], ['olga', 14], ['andre', 24]];\r\n\r\nconst ageVerification1 = people1.filter(([_, age]) => age >= 18);\r\n\r\nconsole.log(ageVerification1);\r\n\r\n\r\n//ageVerification - массив, где останутся только пользователя, старше 18 лет. Также использована стрелочная функция с неявным возвращением (=> age >= 18), чтобы сократить запись.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// ЗАДАЧА № 3\r\n// Дан массив товаров, в виде объекта – { title: ‘пицца’, price: 100 }. Вычислить общую стоимость всех товаров\r\n\r\n// [ { title: ‘пицца’, price: 200 }, { title: ‘баранина’, price: 300 }, { title: ‘креветки’, price: 400 } ]\r\n\r\nlet menu = [ \r\n    { title: \"пицца\", price: 200 }, \r\n    { title: \"баранина\", price: 300 }, \r\n    { title: \"креветки\", price: 400 } \r\n];\r\n\r\nlet allMenuPrice = 0;\r\n\r\nfor (let menuItem of menu){\r\n    allMenuPrice += menuItem.price;\r\n}\r\n\r\nconsole.log(allMenuPrice); \r\n\r\n//После завершения цикла allMenuPrice содержит общую стоимость всех товаров в массиве menu.\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://newfile/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
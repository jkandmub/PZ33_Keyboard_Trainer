"use strict";

const input = document.querySelector("#keyboard-input");
const lastKey = document.querySelector("#last-key");
const keyCode = document.querySelector("#key-code");
const keyState = document.querySelector("#key-state");
const keyCount = document.querySelector("#key-count");
let count = 0;
input.addEventListener("keydown", (event) => {
    lastKey.textContent = event.key === " " ? "Пробел" : event.key;
    keyCode.textContent = `Код: ${event.code}`;
    keyState.textContent = "Ай маладес, ты нажал клавишу";
    if (event.repeat) {
        count += 1;
        keyCount.textContent = count;
    }
});

input.addEventListener ("keyup", () => {
    keyState.textContent = "Зачем ты отпустил меня (клавишу), ты разбил мнэ сердце :__(((";
});
input.addEventListener("keypress", (event) => {
    console.log("Этот бро устарел:", event.key);
});

// Задание 1. Подключите событие keydown к input.
// Покажите event.key и event.code. Обновите состояние на «Клавиша нажата».

// Задание 2. В том же обработчике увеличивайте счётчик только когда !event.repeat.

// Задание 3. Подключите keyup. Выведите «Клавиша отпущена».

// Задание 4. Для учебного наблюдения подключите keypress и console.log(event.key).
// Помните: keypress устарел и не подходит для нового функционала.
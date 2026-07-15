"use strict";

// Select all elements
const containerApp = document.querySelector(".container");
const ageApp = document.querySelector(".ageApp");
const inputDate = document.querySelector(".input-date");
const calcAge = document.querySelector(".checkAge");
const displayMessage = document.querySelector(".result");

calcAge.addEventListener("click", function () {
  if (inputDate.value === "") {
    displayMessage.textContent = `Please select your date of birth!`;
  } else {
    const formattedDate = inputDate.value.split("-").map(Number);

    const [year, month, day] = formattedDate;

    const date = new Date();

    const currentYear = date.getFullYear();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;

    const calcYear = currentYear - year;

    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
      displayMessage.textContent = `You are ${calcYear - 1} years old!`;
    } else {
       displayMessage.textContent = `You are ${calcYear} years old!`; 
    }
  }
});

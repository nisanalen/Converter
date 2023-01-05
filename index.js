/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lenEl = document.getElementById("len-el")
const volEl = document.getElementById("vol-el")
const masEl = document.getElementById("mas-el")
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")





convertBtn.addEventListener("click", function(){
    lenEl.innerHTML = `
    <p>${inputEl.value} meters = ${inputEl.value * 3.281} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(2)} meters</p>
    `
    volEl.innerHTML =`
    <p>${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(2)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(2)} liters</p>
    `
    masEl.innerHTML = `
    <p>${inputEl.value} kilograms = ${(inputEl.value * 2.204).toFixed(2)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(2)} kilograms</p>
    `
})

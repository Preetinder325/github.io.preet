/********* create variables *********/
const costPerDayFull = 35;
const costPerDayHalf = 20;
let numberOfDaysSelected = 0;
let dailyRate = costPerDayFull;
const daySelectorItems = document.querySelectorAll('.day-selector li');
const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const calculatedCostSpan = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');
/********* calculate *********/
document.addEventListener("DOMContentLoaded", function() {
    function updateCost() {
        calculatedCostSpan.textContent = dailyRate * numberOfDaysSelected;
    }
    /********* colour change days of week *********/
    daySelectorItems.forEach(item => {
        item.addEventListener('click', function() {
            if (!item.classList.contains('clicked')) {
                numberOfDaysSelected++;
                item.classList.add('clicked');
                updateCost();
            }
        });
    });
    /********* clear days *********/
    clearButton.addEventListener('click', function() {
        daySelectorItems.forEach(item => {
            item.classList.remove('clicked');
        });
        fullButton.classList.remove('clicked');
        halfButton.classList.remove('clicked');
        numberOfDaysSelected = 0; 
        updateCost();
    });
    /********* change rate *********/
    halfButton.addEventListener('click', function() {
        dailyRate = costPerDayHalf;
        halfButton.classList.add('clicked');
        fullButton.classList.remove('clicked');
        updateCost();
    });
    fullButton.addEventListener('click', function() {
        dailyRate = costPerDayFull;
        fullButton.classList.add('clicked');
        halfButton.classList.remove('clicked');
        updateCost();
    });
});

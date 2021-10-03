let sunday = moment().day(0);
let monday = moment().day(1);
let tuesday = moment().day(2);
let wednesday = moment().day(3);
let thursday = moment().day(4);
let friday = moment().day(5);
let saturday = moment().day(6);

const shiftArr = [];

const morningShiftStart = moment().hour(10).minute(0).second(0).format('HH:mm:ss');
const morningShiftEnd = moment().hour(16).minute(0).second(0).format('HH:mm:ss');

const afternoonShiftStart = moment().hour(16).minute(0).second(0).format('HH:mm:ss');
const afternoonShiftEnd = moment().hour(22).minute(0).second(0).format('HH:mm:ss');

document.querySelector('#week-of').innerText = sunday.format("MM/DD/YYYY");
document.querySelector('#sunday').innerText = sunday.format("dddd, MM/DD");
document.querySelector('#monday').innerText = monday.format("dddd, MM/DD");
document.querySelector('#tuesday').innerText = tuesday.format("dddd, MM/DD");
document.querySelector('#wednesday').innerText = wednesday.format("dddd, MM/DD");
document.querySelector('#thursday').innerText = thursday.format("dddd, MM/DD");
document.querySelector('#friday').innerText = friday.format("dddd, MM/DD");
document.querySelector('#saturday').innerText = saturday.format("dddd, MM/DD");

async function logout() {
    const response = await fetch('/api/employees/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

// handles the creation of shift buttons
function createShiftButton(startTime, endTime, location) {
    // creates the p element to hold the times
    let p = document.createElement('p');
    p.classList.add('badge', 'badge-dark', 'p-3');
    p.innerText = startTime + ' - ' + endTime;

    // appends the button to the column that it belongs to based on the location
    document.querySelector(location).appendChild(p);
};

fetch('/api/availability/shifts', {})
    .then(response => response.json())
    .then(shiftInfo => {
        for (let i = 0; i < shiftInfo.length; i++) {
            shiftArr.push(shiftInfo[i]);
        }

        for (let i = 0; i < shiftArr.length; i++) {
            if (shiftArr[i].shift_date === sunday.format("YYYY-MM-DD")) {
                // console.log('Sunday');

                if (shiftArr[i].start_time === morningShiftStart) {
                    createShiftButton(morningShiftStart, morningShiftEnd, '#sunday-morning');
                } else {
                    createShiftButton(afternoonShiftStart, afternoonShiftEnd, '#sunday-afternoon');
                }
            } else if (shiftArr[i].shift_date === monday.format("YYYY-MM-DD")) {
                // console.log('Monday');
                
                if (shiftArr[i].start_time === morningShiftStart) {
                    createShiftButton(morningShiftStart, morningShiftEnd, '#monday-morning');
                } else {
                    createShiftButton(afternoonShiftStart, afternoonShiftEnd, '#monday-afternoon');
                }
            } else if (shiftArr[i].shift_date === tuesday.format('YYYY-MM-DD')) {
                // console.log('Tuesday');

                if (shiftArr[i].start_time === morningShiftEnd) {
                    createShiftButton(morningShiftStart, morningShiftEnd, '#tuesday-morning');
                } else {
                    createShiftButton(afternoonShiftStart, afternoonShiftEnd, '#tuesday-afternoon');
                }
            } else if (shiftArr[i].shift_date === wednesday.format('YYYY-MM-DD')) {
                console.log('Wednesday');

                if (shiftArr[i].start_time === morningShiftStart) { 
                    createShiftButton(morningShiftStart, morningShiftEnd, '#wednesday-morning');
                } else {
                    createShiftButton(afternoonShiftStart, afternoonShiftEnd, '#wednesday-afternoon');
                }
            } else if (shiftArr[i].shift_date === thursday.format('YYYY-MM-DD')) {
                console.log('Thursday')

                if (shiftArr[i].start_time === morningShiftStart) {
                    createShiftButton(morningShiftStart, morningShiftEnd, '#thursday-morning');
                } else {
                    createShiftButton(afternoonShiftStart, afternoonShiftEnd, '#thursday-afternoon');
                }
            } else if (shiftArr[i].shift_date === friday.format('YYYY-MM-DD')) {
                console.log('Friday');

                if (shiftArr[i].start_time === morningShiftStart) {
                    createShiftButton(morningShiftStart, morningShiftEnd, '#friday-morning');
                } else {
                    createShiftButton(afternoonShiftStart, afternoonShiftEnd, '#friday-afternoon');
                }
            } else if (shiftArr[i].shift_date === saturday.format('YYYY-MM-DD')) {
                console.log('Saturday');

                if (shiftArr[i].start_time === morningShiftStart) {
                    createShiftButton(morningShiftStart, morningShiftEnd, '#saturday-morning');
                } else {
                    createShiftButton(afternoonShiftStart, afternoonShiftEnd, '#saturday-afternoon');
                }
            }
        }
    })

document.querySelector('.logout-btn').addEventListener('click', logout);
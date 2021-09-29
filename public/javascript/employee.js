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

fetch('/api/availability/shifts', {})
    .then(response => response.json())
    .then(shiftInfo => {
        for (let i = 0; i < shiftInfo.length; i++) {
            shiftArr.push(shiftInfo[i]);
        }

        for (let i = 0; i < shiftArr.length; i++) {
            if (shiftArr[i].shift_date === sunday.format("YYYY-MM-DD")) {
                console.log('Sunday');

                if (shiftArr[i].start_time == morningShiftStart && shiftArr[i].end_time == morningShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    document.querySelector('#sunday-morning').appendChild(p);
                } else if (shiftArr[i].start_time == afternoonShiftStart && shiftArr[i].end_time == afternoonShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#sundy-afternoon').appendChild(p);
                } else {
                    const p1 = document.createElement('p');
                    p1.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    const p2 = document.createElement('p');
                    p2.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#sunday-morning').appendChild(p1);
                    document.querySelector('#sunday-afternoon').appendChild(p2);
                }
            } else if (shiftArr[i].shift_date === monday.format("YYYY-MM-DD")) {
                console.log('Monday');
                
                if (shiftArr[i].start_time == morningShiftStart && shiftArr[i].end_time == morningShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    document.querySelector('#monday-morning').appendChild(p);
                } else if (shiftArr[i].start_time == afternoonShiftStart && shiftArr[i].end_time == afternoonShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#monday-afternoon').appendChild(p);
                } else {
                    const p1 = document.createElement('p');
                    p1.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    const p2 = document.createElement('p');
                    p2.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#monday-morning').appendChild(p1);
                    document.querySelector('#monday-afternoon').appendChild(p2);
                }
            } else if (shiftArr[i].shift_date === tuesday.format('YYYY-MM-DD')) {
                console.log('Tuesday')

                if (shiftArr[i].start_time == morningShiftStart && shiftArr[i].end_time == morningShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    document.querySelector('#tuesday-morning').appendChild(p);
                } else if (shiftArr[i].start_time == afternoonShiftStart && shiftArr[i].end_time == afternoonShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#tuesday-afternoon').appendChild(p);
                } else {
                    const p1 = document.createElement('p');
                    p1.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    const p2 = document.createElement('p');
                    p2.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#tuesday-morning').appendChild(p1);
                    document.querySelector('#tuesday-afternoon').appendChild(p2);
                }
            } else if (shiftArr[i].shift_date === wednesday.format('YYYY-MM-DD')) {
                console.log('Wednesday');

                if (shiftArr[i].start_time == morningShiftStart && shiftArr[i].end_time == morningShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    document.querySelector('#wednesday-morning').appendChild(p);
                } else if (shiftArr[i].start_time == afternoonShiftStart && shiftArr[i].end_time == afternoonShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#wednesday-afternoon').appendChild(p);
                } else {
                    const p1 = document.createElement('p');
                    p1.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    const p2 = document.createElement('p');
                    p2.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#wednesday-morning').appendChild(p1);
                    document.querySelector('#wednesday-afternoon').appendChild(p2);
                }
            } else if (shiftArr[i].shift_date === thursday.format('YYYY-MM-DD')) {
                console.log('Thursday')

                if (shiftArr[i].start_time == morningShiftStart && shiftArr[i].end_time == morningShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    document.querySelector('#thursday-morning').appendChild(p);
                } else if (shiftArr[i].start_time == afternoonShiftStart && shiftArr[i].end_time == afternoonShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#thursday-afternoon').appendChild(p);
                } else {
                    const p1 = document.createElement('p');
                    p1.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    const p2 = document.createElement('p');
                    p2.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#thursday-morning').appendChild(p1);
                    document.querySelector('#thursday-afternoon').appendChild(p2);
                }
            } else if (shiftArr[i].shift_date === friday.format('YYYY-MM-DD')) {
                console.log('Friday');

                if (shiftArr[i].start_time == morningShiftStart && shiftArr[i].end_time == morningShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    document.querySelector('#friday-morning').appendChild(p);
                } else if (shiftArr[i].start_time == afternoonShiftStart && shiftArr[i].end_time == afternoonShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#friday-afternoon').appendChild(p);
                } else {
                    const p1 = document.createElement('p');
                    p1.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    const p2 = document.createElement('p');
                    p2.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#friday-morning').appendChild(p1);
                    document.querySelector('#friday-afternoon').appendChild(p2);
                }
            } else if (shiftArr[i].shift_date === saturday.format('YYYY-MM-DD')) {
                console.log('Saturday');

                if (shiftArr[i].start_time == morningShiftStart && shiftArr[i].end_time == morningShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    document.querySelector('#saturday-morning').appendChild(p);
                } else if (shiftArr[i].start_time == afternoonShiftStart && shiftArr[i].end_time == afternoonShiftEnd) {
                    const p = document.createElement('p');
                    p.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#saturday-afternoon').appendChild(p);
                } else {
                    const p1 = document.createElement('p');
                    p1.innerText = morningShiftStart + ' - ' + morningShiftEnd;

                    const p2 = document.createElement('p');
                    p2.innerText = afternoonShiftStart + ' - ' + afternoonShiftEnd;

                    document.querySelector('#saturday-morning').appendChild(p1);
                    document.querySelector('#saturday-afternoon').appendChild(p2);
                }
            }
        }
     })

document.querySelector('.logout-btn').addEventListener('click', logout);
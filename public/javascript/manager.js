const departmentArr = [];
let jobArr = [];
let employeeArr = [];
let shiftArr = [];

// this is the variable to hold the specific employee's information
let employeeInfo = {};

let sunday = moment().day(0);
let monday = moment().day(1);
let tuesday = moment().day(2);
let wednesday = moment().day(3);
let thursday = moment().day(4);
let friday = moment().day(5);
let saturday = moment().day(6);

const departmentDropdownEl = document.querySelector('#department-dropdown');
const employeeListEl = document.querySelector('#employee-list');
const publishEl = document.querySelector('#publish-btn');

function departmentDropdownHandler(arr) {
    for (let i = 0; i < arr.length; i++) {
        let a = document.createElement('a');
        a.classList.add('dropdown-item');
        a.href = '#';
        a.innerText = arr[i].name;

        departmentDropdownEl.appendChild(a);
    }
};

function employeeListHandler(arr, department) {
    let fullName;
    jobArr = [];
    employeeArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (department == arr[i].name) {
            jobArr.push(arr[i].jobs);
        }
    }

    for (let i = 0; i < jobArr[0].length; i++) {
        employeeArr.push(jobArr[0][i].employees);
    }

    for (let i = 0; i < employeeArr.length; i++) {
        for (let j = 0; j < employeeArr[i].length; j++) {
            fullName = employeeArr[i][j].first_name + ' ' + employeeArr[i][j].last_name;

            const button = document.createElement('button');
            button.classList.add('btn');
            button.classList.add('btn-secondary');
            button.setAttribute('type', 'button');
            button.innerText = fullName;

            employeeListEl.appendChild(button);
        }
    }
}

function employeeShiftHandler(arr, employee) {
    const firstName = employee.split(' ')[0];

    const employeeInfoArr = [];
    const employeeShiftArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            employeeInfoArr.push(arr[i][j]);
        }
    }

    for (let i = 0; i < employeeInfoArr.length; i++) {
        if (firstName == employeeInfoArr[i].first_name) {
            employeeInfo = employeeInfoArr[i];
        }
    }
}

fetch('/api/availability/departments')
    .then(response => response.json())
    .then(departmentData => {
        for (let i = 0; i < departmentData.length; i ++) {
            departmentArr.push(departmentData[i]);
        }

        // console.log(departmentData[1].jobs[1].employees);

        departmentDropdownHandler(departmentArr);
    })

// sets the week of and the dates of the days that correspond to each day of the current week
document.querySelector('#week-of').innerText = sunday.format("MM/DD/YYYY");
document.querySelector('#sunday').innerText = sunday.format("dddd, MM/DD");
document.querySelector('#monday').innerText = monday.format("dddd, MM/DD");
document.querySelector('#tuesday').innerText = tuesday.format("dddd, MM/DD");
document.querySelector('#wednesday').innerText = wednesday.format("dddd, MM/DD");
document.querySelector('#thursday').innerText = thursday.format("dddd, MM/DD");
document.querySelector('#friday').innerText = friday.format("dddd, MM/DD");
document.querySelector('#saturday').innerText = saturday.format("dddd, MM/DD");

departmentDropdownEl.addEventListener('click', (event) => {
    event.preventDefault();

    // resets the list of employees on click
    document.querySelector('#employee-list').innerHTML = '';

    if (event.target.text == null) {
        return;
    }

    // sets the department name at the top of the page
    document.querySelector('#department-name').innerText = event.target.text;

    employeeListHandler(departmentArr, event.target.text);
});

employeeListEl.addEventListener('click', (event) => {
    event.preventDefault();

    // console.log(event.target.textContent);

    document.querySelector('#employee-name').innerText = event.target.textContent;

    employeeShiftHandler(employeeArr, event.target.textContent);
});

publishEl.addEventListener('click', (event) => {
    // event.preventDefault();

    // below is going to be an unoptimized way to create the array of shifts that will be created and stored
    if (document.querySelector('#sunday-morning').textContent && document.querySelector('#sunday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = sunday.format('YYYY-MM-DD');
        shift.start_time = sunday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = sunday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#sunday-morning').textContent) {
        const shift = {};

        shift.shift_date = sunday.format('YYYY-MM-DD');
        shift.start_time = sunday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = sunday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#sunday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = sunday.format('YYYY-MM-DD');
        shift.start_time = sunday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = sunday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id;

        shiftArr.push(shift);
    }

    // ------------------------------- Monday ---------------------
    if (document.querySelector('#monday-morning').textContent && document.querySelector('#monday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = monday.format('YYYY-MM-DD');
        shift.start_time = monday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = monday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#monday-morning').textContent) {
        const shift = {};

        shift.shift_date = monday.format('YYYY-MM-DD');
        shift.start_time = monday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = monday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#monday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = monday.format('YYYY-MM-DD');
        shift.start_time = monday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = monday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id;

        shiftArr.push(shift);
    }

    // ----------------------------------------- Tuesday -----------------------------------------
    if (document.querySelector('#tuesday-morning').textContent && document.querySelector('#tuesday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = tuesday.format('YYYY-MM-DD');
        shift.start_time = tuesday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = tuesday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#tuesday-morning').textContent) {
        const shift = {};

        shift.shift_date = tuesday.format('YYYY-MM-DD');
        shift.start_time = tuesday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = tuesday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#tuesday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = tuesday.format('YYYY-MM-DD');
        shift.start_time = tuesday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = tuesday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id;

        shiftArr.push(shift);
    }

    // ----------------------------------------- Wednesday -----------------------------------------
    if (document.querySelector('#wednesday-morning').textContent && document.querySelector('#wednesday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = wednesday.format('YYYY-MM-DD');
        shift.start_time = wednesday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = wednesday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#wednesday-morning').textContent) {
        const shift = {};

        shift.shift_date = wednesday.format('YYYY-MM-DD');
        shift.start_time = wednesday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = wednesday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#wednesday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = wednesday.format('YYYY-MM-DD');
        shift.start_time = wednesday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = wednesday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id;

        shiftArr.push(shift);
    }

    // ----------------------------------------- Thursday -----------------------------------------
    if (document.querySelector('#thursday-morning').textContent && document.querySelector('#thursday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = thursday.format('YYYY-MM-DD');
        shift.start_time = thursday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = thursday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#thursday-morning').textContent) {
        const shift = {};

        shift.shift_date = thursday.format('YYYY-MM-DD');
        shift.start_time = thursday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = thursday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#thursday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = thursday.format('YYYY-MM-DD');
        shift.start_time = thursday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = thursday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id;

        shiftArr.push(shift);
    }

    // ----------------------------------------- Friday -----------------------------------------
    if (document.querySelector('#friday-morning').textContent && document.querySelector('#friday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = friday.format('YYYY-MM-DD');
        shift.start_time = friday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = friday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#friday-morning').textContent) {
        const shift = {};

        shift.shift_date = friday.format('YYYY-MM-DD');
        shift.start_time = friday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = friday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#friday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = friday.format('YYYY-MM-DD');
        shift.start_time = friday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = friday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id;

        shiftArr.push(shift);
    }

    // ----------------------------------------- Saturday -----------------------------------------
    if (document.querySelector('#saturday-morning').textContent && document.querySelector('#saturday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = saturday.format('YYYY-MM-DD');
        shift.start_time = saturday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = saturday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#saturday-morning').textContent) {
        const shift = {};

        shift.shift_date = saturday.format('YYYY-MM-DD');
        shift.start_time = saturday.hour(10).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = saturday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id

        shiftArr.push(shift);
    } else if (document.querySelector('#saturday-afternoon').textContent) {
        const shift = {};

        shift.shift_date = saturday.format('YYYY-MM-DD');
        shift.start_time = saturday.hour(16).minute(0).second(0).format('HH:mm:ss');
        shift.end_time = saturday.hour(22).minute(0).second(0).format('HH:mm:ss');
        shift.employee_id = employeeInfo.id;

        shiftArr.push(shift);
    }

    for (let i = 0; i < shiftArr.length; i ++) {
        fetch('/api/availability/shifts', {
            method: 'post',
            body: JSON.stringify(shiftArr[i]),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {});
    }
})

// ----------------------- Calender Functions Below --------------------------

// what follows is the logic for all am and pm slots for a schedule
document.querySelector('#sunday-morning').addEventListener('click', () => {
    document.querySelector('#sunday-morning').innerHTML = '';

    const startTime = sunday.hour(10).minute(0).format("HH:mm");
    const endTime = sunday.hour(16).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#sunday-morning').appendChild(p);
});

document.querySelector('#monday-morning').addEventListener('click', () => {
    document.querySelector('#monday-morning').innerHTML = '';

    const startTime = monday.hour(10).minute(0).format("HH:mm");
    const endTime = monday.hour(16).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#monday-morning').appendChild(p);
});

document.querySelector('#tuesday-morning').addEventListener('click', () => {
    document.querySelector('#tuesday-morning').innerHTML = '';

    const startTime = tuesday.hour(10).minute(0).format("HH:mm");
    const endTime = tuesday.hour(16).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#tuesday-morning').appendChild(p);
});

document.querySelector('#wednesday-morning').addEventListener('click', () => {
    document.querySelector('#wednesday-morning').innerHTML = '';

    const startTime = wednesday.hour(10).minute(0).format("HH:mm");
    const endTime = wednesday.hour(16).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#wednesday-morning').appendChild(p);
});

document.querySelector('#thursday-morning').addEventListener('click', () => {
    document.querySelector('#thursday-morning').innerHTML = '';

    const startTime = thursday.hour(10).minute(0).format("HH:mm");
    const endTime = thursday.hour(16).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#thursday-morning').appendChild(p);
});

document.querySelector('#friday-morning').addEventListener('click', () => {
    document.querySelector('#friday-morning').innerHTML = '';

    const startTime = friday.hour(10).minute(0).format("HH:mm");
    const endTime = friday.hour(16).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#friday-morning').appendChild(p);
});

document.querySelector('#saturday-morning').addEventListener('click', () => {
    document.querySelector('#saturday-morning').innerHTML = '';

    const startTime = saturday.hour(10).minute(0).format("HH:mm");
    const endTime = saturday.hour(16).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#saturday-morning').appendChild(p);
});

// this begins the pm shifts
document.querySelector('#sunday-afternoon').addEventListener('click', () => {
    document.querySelector('#sunday-afternoon').innerHTML = '';

    const startTime = sunday.hour(16).minute(0).format("HH:mm");
    const endTime = sunday.hour(22).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#sunday-afternoon').appendChild(p);
});

document.querySelector('#monday-afternoon').addEventListener('click', () => {
    document.querySelector('#monday-afternoon').innerHTML = '';

    const startTime = monday.hour(16).minute(0).format("HH:mm");
    const endTime = monday.hour(22).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#monday-afternoon').appendChild(p);
});

document.querySelector('#tuesday-afternoon').addEventListener('click', () => {
    document.querySelector('#tuesday-afternoon').innerHTML = '';

    const startTime = tuesday.hour(16).minute(0).format("HH:mm");
    const endTime = tuesday.hour(22).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#tuesday-afternoon').appendChild(p);
});

document.querySelector('#wednesday-afternoon').addEventListener('click', () => {
    document.querySelector('#wednesday-afternoon').innerHTML = '';

    const startTime = wednesday.hour(16).minute(0).format("HH:mm");
    const endTime = wednesday.hour(22).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#wednesday-afternoon').appendChild(p);
});

document.querySelector('#thursday-afternoon').addEventListener('click', () => {
    document.querySelector('#thursday-afternoon').innerHTML = '';

    const startTime = thursday.hour(16).minute(0).format("HH:mm");
    const endTime = thursday.hour(22).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#thursday-afternoon').appendChild(p);
});

document.querySelector('#friday-afternoon').addEventListener('click', () => {
    document.querySelector('#friday-afternoon').innerHTML = '';

    const startTime = friday.hour(16).minute(0).format("HH:mm");
    const endTime = friday.hour(22).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#friday-afternoon').appendChild(p);
});

document.querySelector('#saturday-afternoon').addEventListener('click', () => {
    document.querySelector('#saturday-afternoon').innerHTML = '';

    const startTime = saturday.hour(16).minute(0).format("HH:mm");
    const endTime = saturday.hour(22).minute(0).format("HH:mm");

    const p = document.createElement('p');
    p.innerText = startTime + ' - ' + endTime;

    document.querySelector('#saturday-afternoon').appendChild(p);
});

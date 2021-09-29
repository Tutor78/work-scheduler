const departmentArr = [];
let jobArr = [];
let employeeArr = [];

const departmentDropdownEl = document.querySelector('#department-dropdown');
const employeeListEl = document.querySelector('#employee-list');

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
            console.log(employeeInfoArr[i].shifts)
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
})

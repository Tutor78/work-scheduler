// variables to hold the various arrays needed for various functions to work
const departmentArr = [];
let jobArr = [];
let employeeArr = [];
let shiftArr = [];

// this is the variable to hold the specific employee's information
let employeeInfo = {};

// variables storing the date information of each day of the current week
let sunday = moment().day(0);
let monday = moment().day(1);
let tuesday = moment().day(2);
let wednesday = moment().day(3);
let thursday = moment().day(4);
let friday = moment().day(5);
let saturday = moment().day(6);

// variables containing different elements of the page
const departmentDropdownEl = document.querySelector('#department-dropdown');
const employeeListEl = document.querySelector('#employee-list');
const publishEl = document.querySelector('#publish-btn');
const logoutEl = document.querySelector('.logout-btn');
const shiftCalenderEl = document.querySelector('#shift-calendar');

// creates the dropdown menu items based on the array that is passed in
function departmentDropdownHandler(arr) {
    // loops through the given array and adds the department to the dropdown list
    for (let i = 0; i < arr.length; i++) {
        let a = document.createElement('a');
        a.classList.add('dropdown-item');
        a.href = '#';
        a.innerText = arr[i].name;

        departmentDropdownEl.appendChild(a);
    }
};

// creates the employee list items depending on the array that is passed in as well as the department
function employeeListHandler(arr, department) {
    let fullName;
    jobArr = [];
    employeeArr = [];

    // loops through the array that is given and appends the jobs to an array of jobs
    for (let i = 0; i < arr.length; i++) {
        if (department == arr[i].name) {
            jobArr.push(arr[i].jobs);
        }
    }

    // this takes the job array and extracts all the employee information into an employee array
    for (let i = 0; i < jobArr[0].length; i++) {
        employeeArr.push(jobArr[0][i].employees);
    }

    // creates a button element for each employee in the employee array and appends it to the let side o the screen
    for (let i = 0; i < employeeArr.length; i++) {
        for (let j = 0; j < employeeArr[i].length; j++) {
            fullName = employeeArr[i][j].first_name + ' ' + employeeArr[i][j].last_name;

            const button = document.createElement('button');
            button.classList.add('btn', 'btn-secondary', 'my-1');
            button.setAttribute('type', 'button');
            button.innerText = fullName;

            employeeListEl.appendChild(button);
        }
    }
}

// function that extracts employee information about the chose employee
function employeeInfoHandler(arr, employee) {
    // loops through the array that is given
    for (let i = 0; i < arr.length; i++) {
        // nested for loop that finds where the employee that was chosen and stores that in the employeeInfo variable
        for (let j = 0; j < arr[i].length; j++) {
            if (employee == (arr[i][j].first_name + ' ' + arr[i][j].last_name)) {
                employeeInfo = arr[i][j];
            }
        }
    }
}

// function that handles the creation of new shifts
function employeeShiftHandler(event) {
    // shiftColumns creates an array of each column
    const shiftColumns = event.currentTarget.children[0].children;
    // stores the target of the user as a variable
    let currentTarget = event.target;

    // creates an empty shift object
    let shift = {};

    // creates variables that will be stored inside the shift object
    let employee_id = employeeInfo.id;
    let shift_date;
    let start_time;
    let end_time;

    // ensures that an employee has been picked before allowing changes to be made to the schedule
    if (!employee_id) {
        $('#choose-employee-modal').modal('show');
        return;
    }

    // creates variables that track the date of the shift and whether it is morning or afternoon
    let day;
    // sets the variable as either morning or afternoon depending on the id of the target
    let timeOfDay = currentTarget.id.split('-')[1];

    // console.log(shiftColumns[0].id);
    // console.log(currentTarget);

    // loops through the columns and finds the column that matches the parent of the target whether morning or afternoon
    for (let i = 0; i < shiftColumns.length; i++) {
        if (currentTarget.parentNode.id == shiftColumns[i].id) {
            day = shiftColumns[i].id;
        }
    }
    
    // this checks which day has been picked and sets the shift_date variable based on which day was chosen
    if (day === 'sunday') {
        shift_date = sunday.format('YYYY-MM-DD');
    } else if (day === 'monday') {
        shift_date = monday.format('YYYY-MM-DD');
    } else if (day === 'tuesday') {
        shift_date = tuesday.format('YYYY-MM-DD');
    } else if (day === 'wednesday') {
        shift_date = wednesday.format('YYYY-MM-DD');
    } else if (day === 'thursday') {
        shift_date = thursday.format('YYYY-MM-DD');
    } else if (day === 'friday') {
        shift_date = friday.format('YYYY-MM-DD');
    } else if (day === 'saturday') {
        shift_date = saturday.format('YYYY-MM-DD');
    }

    // checks which time of day was chosen and then appends a shift button to that column
    if (timeOfDay === 'morning') {
        // sets the start time and end time of the morning shift
        start_time = '10:00:00';
        end_time = '16:00:00';

        // below creates the button that is appended to the column
        let p = document.createElement('p');
        p.classList.add('badge', 'badge-dark', 'p-1');
        p.innerText = start_time + ' - ' + end_time;

        let button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'p-1');
        button.setAttribute('id', 'shift-delete');
        button.setAttribute('type', 'button');
        button.setAttribute('style', 'background: transparent; border: 0;');

        let i = document.createElement('i');
        i.classList.add('bi', 'bi-trash');

        button.appendChild(i);
        p.appendChild(button);

        // checks if there is a button already appended and if so does not append a new one
        if (currentTarget.textContent) {
            return;
        }

        currentTarget.appendChild(p);
    } else if (timeOfDay === 'afternoon') {
        // sets the start time and end time as afternoon
        start_time = '16:00:00';
        end_time = '22:00:00'

        // creates the button that is appended to the column
        let p = document.createElement('p');
        p.classList.add('badge', 'badge-dark', 'p-1');
        p.innerText = start_time + ' - ' + end_time;

        let button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'p-1');
        button.setAttribute('id', 'shift-delete');
        button.setAttribute('type', 'button');
        button.setAttribute('style', 'background: transparent; border: 0;');

        let i = document.createElement('i');
        i.classList.add('bi', 'bi-trash');

        button.appendChild(i);
        p.appendChild(button);

        // if there is already a appended to the column will prevent creating a duplicate
        if (currentTarget.textContent) {
            return;
        }

        currentTarget.appendChild(p);

    }
    
    // adds all of the variables to the shift object
    shift.employee_id = employee_id;
    shift.shift_date = shift_date;
    shift.start_time = start_time;
    shift.end_time = end_time;

    // ensures that all parts of the shift object exist and then pushes the shift to the shift rray
    if (shift.employee_id && shift.shift_date && shift.start_time && shift.end_time) {
        shiftArr.push(shift);
    } else {
        return;
    }
        
    // console.log(shiftArr);
};

// handles the deletion of shifts
function shiftDeleteHandler(event) {
    // sets the variables for the shift that will be deleted
    let employee_id = employeeInfo.id;
    let shift_date;
    let start_time;
    let end_time;
    
    // console.log(event.target.offsetParent);

    // checks the id of the parent of the current target and sets the shift_date accordingly
    if (event.target.offsetParent.id === 'sunday') {
        shift_date = sunday.format('YYYY-MM-DD')
    } else if (event.target.offsetParent.id === 'monday') {
        shift_date = monday.format('YYYY-MM-DD');
    } else if (event.target.offsetParent.id === 'tuesday') {
        shift_date = tuesday.format('YYYY-MM-DD');
    } else if (event.target.offsetParent.id === 'wednesday') {
        shift_date = wednesday.format('YYYY-MM-DD');
    } else if (event.target.offsetParent.id === 'thursday') {
        shift_date = thursday.format('YYYY-MM-DD');
    } else if (event.target.offsetParent.id === 'friday') {
        shift_date = friday.format('YYYY-MM-DD');
    } else if (event.target.offsetParent.id === 'saturday') {
        shift_date = saturday.format('YYYY-MM-DD');
    }

    // splits the time that is on the button into an array and sets the start_time using the first object and the end time using the second
    start_time = event.target.parentNode.parentNode.textContent.split(' - ')[0];
    end_time = event.target.parentNode.parentNode.textContent.split(' - ')[1];
    
    // checks to ensure that the user has clicked the delete button
    if (event.target.parentNode.id === 'shift-delete') {
        // creates an empty shift object
        let shift = {};

        // sets an empty variable to hold the information for the deleted shift
        let deletedShift;
        
        // sets the properties of the shift object
        shift.employee_id = employee_id;
        shift.shift_date = shift_date;
        shift.start_time = start_time;
        shift.end_time = end_time;
        
        // console.log(shift);
        // console.log(shiftArr);
        
        // loops through the shift array and searches for the shift to delete by matching all of the elements of the shift object to an object inside the array 
        for (let i = 0; i < shiftArr.length; i++) {
            if (shift.employee_id == shiftArr[i].employee_id && shift.shift_date == shiftArr[i].shift_date && shift.start_time == shiftArr[i].start_time && shift.end_time == shiftArr[i].end_time) {
                // sets the deleted shift information
                deletedShift = shiftArr[i];

                // removes the chosen shift from the shift array
                shiftArr.splice(i, 1);
            }
        }

        // this uses the id of the deleted shift to delete the shift from the database
        fetch(`/api/availability/shifts/${deletedShift.id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // console.log('success');
            } else {
                console.log(response.statusText);
            }
        })

        // console.log(shiftArr);

        // removes the button from the column
        event.target.parentNode.parentNode.innerText = '';
    }
}

// handles the creation of shift buttons
function createShiftButton(startTime, endTime, location) {
    // creates the p element to hold the times
    let p = document.createElement('p');
    p.classList.add('badge', 'badge-dark', 'p-1');
    p.innerText = startTime + ' - ' + endTime;

    // creates the button to hold the trash icon
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-danger', 'p-1');
    button.setAttribute('id', 'shift-delete');
    button.setAttribute('type', 'button');
    button.setAttribute('style', 'background: transparent; border: 0;');

    // creates the trash icon
    let i = document.createElement('i');
    i.classList.add('bi', 'bi-trash');

    // creates the full button
    button.appendChild(i);
    p.appendChild(button);

    // appends the button to the column that it belongs to based on the location
    document.querySelector(location).appendChild(p);
}

// handles the display of shifts on the calendar
function shiftDisplayHandler(event) {
    // sets the variables of the start and end times for both morning and afternoon
    let morningStartTime = moment().hour(10).minute(0).second(0).format('HH:mm:ss');
    let morningEndTime = moment().hour(16).minute(0).second(0).format('HH:mm:ss');
    let afternoonStartTime = moment().hour(16).minute(0).second(0).format('HH:mm:ss');
    let afternoonEndTime = moment().hour(22).minute(0).second(0).format('HH:mm:ss');

    // console.log(event.target.textContent);

    // sets the employee name at the top of the page
    document.querySelector('#employee-name').innerText = event.target.textContent;

    // sets the employeeInfo variable based on the employee that was chosen
    employeeInfoHandler(employeeArr, event.target.textContent);

    // grabs the shifts for the chosen employees
    fetch(`/api/availability/shifts/${employeeInfo.id}`)
        .then(response => response.json())
        .then(dbShiftData => {
            // resets the shift array
            shiftArr = [];

            // resets all of the columns
            document.querySelector('#sunday-morning').innerText = '';
            document.querySelector('#sunday-afternoon').innerText = '';
            document.querySelector('#monday-morning').innerText = '';
            document.querySelector('#monday-afternoon').innerText = '';
            document.querySelector('#tuesday-morning').innerText = '';
            document.querySelector('#tuesday-afternoon').innerText = '';
            document.querySelector('#wednesday-morning').innerText = '';
            document.querySelector('#wednesday-afternoon').innerText = '';
            document.querySelector('#thursday-morning').innerText = '';
            document.querySelector('#thursday-afternoon').innerText = '';
            document.querySelector('#friday-morning').innerText = '';
            document.querySelector('#friday-afternoon').innerText = '';
            document.querySelector('#saturday-morning').innerText = '';
            document.querySelector('#saturday-afternoon').innerText = '';

            // pushes the employees shifts to the shift array
            for (let i = 0; i < dbShiftData.length; i++) {
                shiftArr.push(dbShiftData[i]);
            }

            // loops throught the shift array and based on the information contained within each object creates a button to be displayed on the calender 
            for (let i = 0; i < shiftArr.length; i++) {
                if (shiftArr[i].shift_date === sunday.format('YYYY-MM-DD')) {
                    if (shiftArr[i].start_time === morningStartTime) {
                        createShiftButton(morningStartTime, morningEndTime, '#sunday-morning');
                    } else {
                        createShiftButton(afternoonStartTime, afternoonEndTime, '#sunday-afternoon');
                    }
                } else if (shiftArr[i].shift_date === monday.format('YYYY-MM-DD')) {
                    if (shiftArr[i].start_time === morningStartTime) {
                        createShiftButton(morningStartTime, morningEndTime, '#monday-morning');
                    } else {
                        createShiftButton(afternoonStartTime, afternoonEndTime, '#monday-afternoon');
                    }
                } else if (shiftArr[i].shift_date === tuesday.format('YYYY-MM-DD')) {
                    if (shiftArr[i].start_time === morningStartTime) {
                        createShiftButton(morningStartTime, morningEndTime, '#tuesday-morning');
                    } else {
                        createShiftButton(afternoonStartTime, afternoonEndTime, '#tuesday-afternoon');
                    }
                } else if (shiftArr[i].shift_date === wednesday.format('YYYY-MM-DD')) {
                    if (shiftArr[i].start_time === morningStartTime) {
                        createShiftButton(morningStartTime, morningEndTime, '#wednesday-morning');
                    } else {
                        createShiftButton(afternoonStartTime, afternoonEndTime, '#wednesday-afternoon');
                    }
                } else if (shiftArr[i].shift_date === thursday.format('YYYY-MM-DD')) {
                    if (shiftArr[i].start_time === morningStartTime) {
                        createShiftButton(morningStartTime, morningEndTime, '#thursday-morning');
                    } else {
                        createShiftButton(afternoonStartTime, afternoonEndTime, '#thursday-afternoon');
                    }
                } else if (shiftArr[i].shift_date === friday.format('YYYY-MM-DD')) {
                    if (shiftArr[i].start_time === morningStartTime) {
                        createShiftButton(morningStartTime, morningEndTime, '#friday-morning');
                    } else {
                        createShiftButton(afternoonStartTime, afternoonEndTime, '#friday-afternoon')
                    }
                } else if (shiftArr[i].shift_date === saturday.format('YYYY-MM-DD')) {
                    if (shiftArr[i].start_time === morningStartTime) {
                        createShiftButton(morningStartTime, morningEndTime, '#saturday-morning');
                    } else {
                        createShiftButton(afternoonStartTime, afternoonEndTime, '#saturday-afternoon');
                    }
                } 
            }

            // console.log(shiftArr);
        })
}

// handles the logout button
async function logoutHandler() {
    const response = await fetch('/api/employees/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

// gets the information for the departments
fetch('/api/availability/departments')
    .then(response => response.json())
    .then(departmentData => {
        // pushes the department data that is returned to the department array
        for (let i = 0; i < departmentData.length; i ++) {
            departmentArr.push(departmentData[i]);
        }

        // console.log(departmentData[1].jobs[1].employees);

        // creates the dropdown menu for departments
        departmentDropdownHandler(departmentArr);
    })


// sets the week of and the dates of the days that correspond to each day of the current week
document.querySelector('#week-of').innerText = sunday.format("MM/DD/YYYY");
document.querySelector('#sunday-title').innerText = sunday.format("dddd, MM/DD");
document.querySelector('#monday-title').innerText = monday.format("dddd, MM/DD");
document.querySelector('#tuesday-title').innerText = tuesday.format("dddd, MM/DD");
document.querySelector('#wednesday-title').innerText = wednesday.format("dddd, MM/DD");
document.querySelector('#thursday-title').innerText = thursday.format("dddd, MM/DD");
document.querySelector('#friday-title').innerText = friday.format("dddd, MM/DD");
document.querySelector('#saturday-title').innerText = saturday.format("dddd, MM/DD");

// handles the logout button
logoutEl.addEventListener('click', logoutHandler);

// handles the department dropdown menu
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

// handles the employee list that is displayed depending on the department selected
employeeListEl.addEventListener('click', (event) => {
    event.preventDefault();

    // displays the shifts that pertain to the chosen employee
    shiftDisplayHandler(event);
});

// elemt that contains the html for the entire calendar
shiftCalenderEl.addEventListener('click', (event) => {
    employeeShiftHandler(event);
    shiftDeleteHandler(event);
});

// handles the publishing of the schedule
publishEl.addEventListener('click', (event) => {
    event.preventDefault();

    // gets all of the shifts for the chosen employee and then removes any shifts that are already in the database so there are no duplicates made
    fetch(`/api/availability/shifts/${employeeInfo.id}`)
        .then(response => response.json())
        .then(shiftInfo => {
            for (let i = 0; i < shiftInfo.length; i++) {
                for (let j = 0; j < shiftArr.length; j++) {
                    if (shiftArr[j].id === shiftInfo[i].id) {
                        shiftArr.splice(j, 1);
                    }
                }
            }

            // loops through the shift array and pushes it to the database
            for (let i = 0; i < shiftArr.length; i++) {
                fetch('/api/availability/shifts', {
                    method: 'post',
                    body: JSON.stringify(shiftArr[i]),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        // console.log('success');
                    } else {
                        console.log(response.statusText);
                    }
                })
            }

            $('#publish-modal').modal('show');

            let x = 1;

            setInterval(() => {
                $('#publish-modal .progress-bar').attr('aria-valuenow', x);
                $('#publish-modal .progress-bar').attr('style', `width: ${x}%`);
                $('#publish-modal .progress-bar').text(`${x}%`);

                x++;

                if (x > 100) {
                    x = 100;
                }

                // console.log(x);
            }, 80);

            document.querySelector('html').setAttribute('style', 'pointer-events: none;');

            setTimeout(() => {
                document.location.reload();
            }, 10000);
        })
});
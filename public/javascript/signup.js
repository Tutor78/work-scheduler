const signupFormEl = document.querySelector('#signup-form');

const firstNameEl = document.querySelector('#signup-first-name');
const lastNameEl = document.querySelector('#signup-last-name');
const emailEl = document.querySelector('#signup-email');
const passwordEl = document.querySelector('#signup-password');
const jobTitleEl = document.querySelector('#job-select');

function signupHandler() {
    let first_name = firstNameEl.value.trim();
    let last_name = lastNameEl.value.trim();
    let email = emailEl.value.trim();
    let password = passwordEl.value.trim();
    let id;
    let job_id;

    let jobTitle = jobTitleEl.value;
    
    if (first_name && last_name && email && password) {
        const employeeIdArr = [];

        fetch(`/api/availability/jobs/${jobTitle}`)
            .then(response => response.json())
            .then(jobData => {
                // console.log(jobData.id);

                job_id = jobData.id;

                for (let i = 0; i < jobData.employees.length; i++) {
                    employeeIdArr.push(jobData.employees[i].id);
                }

                id = employeeIdArr.at(-1) + 1;

                if (isNaN(id) && jobTitle === "Manager") {
                    id = 101;
                } else if (isNaN(id) && jobTitle === "Line Cook") {
                    id = 201;
                } else if (isNaN(id) && jobTitle === "Prep Cook") {
                    id = 301;
                } else if (isNaN(id) && jobTitle === "Expo") {
                    id = 401;
                } else if (isNaN(id) && jobTitle === "Host") {
                    id = 501;
                } else if (isNaN(id) && jobTitle === "Server") {
                    id = 601;
                } else if (isNaN(id) && jobTitle === "Bartender") {
                    id = 701;
                }

                fetch('/api/employees', {
                    method: 'post',
                    body: JSON.stringify({
                        id,
                        first_name,
                        last_name,
                        email,
                        password,
                        job_id
                    }),
                    headers: { 'Content-Type': 'application/json' }
                })
                .then(response => {
                    if (response.ok) {
                        if (jobTitle === 'Manager') {
                            document.location.replace('/manager');
                        } else {
                            document.location.replace('/employee');
                        }
                    } else {
                        alert(response.statusText);
                    }
                })
            })
    }
}

signupFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    signupHandler();
});


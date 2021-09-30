async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(email && password) {
        await fetch('/api/employees/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(employeeInfo => {
            if (employeeInfo.user.job_id === 1) {
                document.location.replace('/manager');
            } else {
                document.location.replace('/employee');
            }
        })
        .catch(err => {
            $('#no-user-modal').modal('show');
            // console.log(err);
        })

    } else {
        $('#complete-form-modal').modal('show');
    }


};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
INSERT INTO job (title, department)
VALUES 
    ('Manager', 'Office'),
    ('Line Cook', 'Kitchen'),
    ('Prep Cook', 'Kitchen'),
    ('Expo', 'Kitchen'),
    ('Host', 'FoH'),
    ('Server', 'FoH'),
    ('Bartender', 'FoH');

INSERT INTO employee (id, email, password, first_name, last_name, job_id)
VALUES
    (101, 'tammy@work.com', 'awesomepassword', 'Tammy', 'Reacher', 1),
    (201, 'kenneth@gmail.com', 'password', 'Kenneth', 'Jackson', 2),
    (501, 'blakely@email.com', 'password123', 'Blakely', 'Livingston', 6);
INSERT INTO department (name)
VALUES
    ('Office'),
    ('Kitchen'),
    ('FoH');

INSERT INTO job (title, department_id)
VALUES 
    ('Manager', 1),
    ('Line Cook', 2),
    ('Prep Cook', 2),
    ('Expo', 2),
    ('Host', 3),
    ('Server', 3),
    ('Bartender', 3);

INSERT INTO shift (shift_name, start_time, end_time)
VALUES
    ('Morning', '10:00:00', '16:00:00'),
    ('Afternoon', '16:00:00', '22:00:00'),
    ('All Day', '10:00:00', '22:00:00');

INSERT INTO employee (id, email, password, first_name, last_name, job_id, shift_id)
VALUES
    (101, 'tammy@work.com', 'awesomepassword', 'Tammy', 'Reacher', 1, 3),
    (201, 'kenneth@gmail.com', 'password', 'Kenneth', 'Jackson', 2, 1),
    (501, 'blakely@email.com', 'password123', 'Blakely', 'Livingston', 6, 2);

INSERT INTO day (monday, tuesday, wednesday, thursday, friday, saturday, sunday, employee_id)
VALUES
    (1, 1, 1, 1, 1, 1, 1, 101),
    (1, 1, 1, 1, 1, 0, 0, 201),
    (1, 1, 0, 1, 1, 0, 0, 501);
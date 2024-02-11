INSERT INTO department (deptName)
VALUES  ('IT'),
        ('Management'),
        ('Marketing'),
        ('Engineering'),
        ('Finance');

INSERT INTO roles (id, title, salary, deptId)
VALUES  (1, 'Manager', 80000, 2),
        (2, 'Social Media', 50000, 3),
        (3, 'Accountant', 70000, 5),
        (4, 'Head of Accounting', 9000, 5),
        (5, 'Software Engineer', 80000, 4),
        (6, 'IT Technician', 45000, 1),
        (7, 'Graphic Designer', 50000, 3),
        (8, 'Hardware Engineer', 80000, 4),
        (9, 'Assistant Manager', 60000, 2),
        (10, 'Head Engineer', 120000, 4);

INSERT INTO employee (id, firstName, lastName, roleId, managerId)
VALUES  (1, 'Sasuke', 'Uchiha', 9, 6),
        (2, 'Kakashi', 'Hatake', 10, NULL),
        (3, 'Rock', 'Lee', 2, 4),
        (4, 'Ino', 'Yamanaka', 7, NULL),
        (5, 'Hinata', 'Hyuga', 5, 2),
        (6, 'Sakura', 'Haruno', 1, NULL)
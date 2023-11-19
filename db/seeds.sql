INSERT INTO department (deptName)
VALUES  ('IT'),
        ('Management'),
        ('Marketing'),
        ('Engineering'),
        ('Finance');

INSERT INTO roles (title, salary, deptId)
VALUES  ('Manager', 80000, 2),
        ('Social Media', 50000, 3),
        ('Accountant', 70000, 5),
        ('Head of Accounting', 9000, 5),
        ('Software Engineer', 80000, 4),
        ('IT Technician', 45000, 1),
        ('Graphic Designer', 50000, 3),
        ('Hardware Engineer', 80000, 4),
        ('Assistant Manager', 60000, 2),
        ('Head Engineer', 120000, 4);

INSERT INTO employee (firstName, lastName, roleId, managerId)
VALUES  ('Sasuke', 'Uchiha', 9, 6),
        ('Kakashi', 'Hatake', 10, NULL),
        ('Rock', 'Lee', 2, 4),
        ('Ino', 'Yamanaka', 7, NULL),
        ('Hinata', 'Hyuga', 5, 2),
        ('Sakura', 'Haruno', 1, NULL)
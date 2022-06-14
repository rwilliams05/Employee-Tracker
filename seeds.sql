INSERT INTO department (id, name)
VALUES (1, "Finance"),
       (2, "Engineering"),
       (3, "Legal"),
       (4, "Sales");


INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Account Manager", 120000, 1),
       (2, "Accountant", 80000, 1),
       (3, "Lead Engineer", 120000, 2),
       (4, "Software Engineer", 100000, 2),
       (5, "Legal Team Lead", 120000, 3),
       (6, "Lawyer", 100000, 3),
       (7, "Sales Lead", 120000, 4),
       (8, "Sales Person", 80000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Adam", "Smith", 1, NULL),
       (2, "Loretta", "Castorini", 2, 1),
       (3, "Lisbeth", "Salander", 3, NULL),
       (4, "Montgomery", "Scott", 4, 3),
       (5, "Atticus", "Finch", 5, NULL),
       (6, "Saul", "Goodman", 6, 5),
       (7, "Gordon", "Gekko", 7, NULL),
       (8,"Willy", "Loman",8, 7);
      
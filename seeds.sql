INSERT INTO department (id, name)
VALUES (1, "Finance"),
       (2, "Engineering"),
       (3, "Legal"),
       (4, "Sales");


INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Account Manager"),
       (2, "Accountant"),
       (3, "Lead Engineer"),
       (4, "Software Engineer"),
       (5, "Legal Team Lead"),
       (6, "Lawyer"),
       (7, "Sales Lead"),
       (8, "Sales Person");

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Adam", "Smith", 1),
       (2, "Loretta", "Castorini", 2, 1),
       (3, "Lisbeth", "Salander", 3),
       (4, "Montgomery", "Scott", 4, 3),
       (5, "Atticus", "Finch", 5),
       (6, "Saul", "Goodman", 6, 5),
       (7, "Gordon", "Gekko", 7)
       (8,"Willy", "Loman",8,7)
      
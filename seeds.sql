
INSERT INTO department (name)
VALUES ("Finance"),
       ("Engineering"),
       ("Legal"),
       ("Sales");


INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 120000, 1),
       ("Accountant", 80000, 1),
       ("Lead Engineer", 120000, 2),
       ("Software Engineer", 100000, 2),
       ("Legal Team Lead", 120000, 3),
       ("Lawyer", 100000, 3),
       ("Sales Lead", 120000, 4),
       ( "Sales Person", 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Adam", "Smith", 1, NULL),
       ("Loretta", "Castorini", 2, 1),
       ("Lisbeth", "Salander", 3, NULL),
       ("Montgomery", "Scott", 4, 3),
       ("Atticus", "Finch", 5, NULL),
       ("Saul", "Goodman", 6, 5),
       ("Gordon", "Gekko", 7, NULL),
       ("Willy", "Loman",8, 7);
      
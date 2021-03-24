const Employee = require("../lib/Employee");

    test("Can initialize an employee object", () => {
      const test = new Employee();
      expect(typeof test).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Hanna";
      const test = new Employee(name);
      expect(test.name).toBe(name);
    });
    test("Can set id attribute with constructor", () => {
      const id = 1;
      const test = new Employee("Anna", id);
      expect(test.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "test.anna@email.com";
      const test = new Employee("Anna", 1, email);
      expect(test.email).toBe(email);
    });
   
  
    test("Can get name from getName() method", () => {
      const name = "Anna";
      const test = new Employee(name, 1, "test.anna@email.com");
      expect(test.getName()).toBe(name);
    });
    test("Can get id from getId() method", () => {
      const id = 1;
      const test = new Employee("Anna", id, "test.anna@email.com");
      expect(test.getId()).toBe(id);
    });
    test("Can get email from getEmail() method", () => {
      const email = "test.anna@email.com";
      const test = new Employee("Anna", 1, email);
      expect(test.getEmail()).toBe(email);
    });
    test("Can get role from getRole() method", () => {
      const test = new Employee("Anna", 1, "test.anna@email.com");
      expect(test.getRole()).toBe("Employee");
    });
 


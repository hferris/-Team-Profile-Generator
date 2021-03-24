const Intern = require("../lib/Intern");

test("Can set school from constructor", () => {
    const testValue = "UofA";
    const test = new Intern("Anna", 3,"test.anna@email.com", testValue);
    expect(test.school).toBe(testValue);
  });

  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const test = new Intern("Anna", 3, "test.anna@email.com", "UofA");
    expect(test.getRole()).toBe(testValue);
  });

  test("Can get school username from getSchool()", () => {
    const testValue = "UofA";
    const test = new Intern("Anna", 3, "test.anna@email.com", testValue);
    expect(test.getSchool()).toBe(testValue);
  });
  
 

 

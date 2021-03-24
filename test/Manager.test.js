  const Manager = require("../lib/Manager");  

  test("Can set office number from constructor", () => {
    const testValue = 200;
    const test = new Manager("Anna", 4,"test.anna@email.com", testValue);
    expect(test.officeNumber).toBe(testValue);
  });
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const test = new Manager("Anna", 4, "test.anna@email.com", "GitHubUser");
    expect(test.getRole()).toBe(testValue);
  });
  test("Can get office number from getNumber()", () => {
    const testValue = 200;
    const test = new Manager("Anna", 4, "test.anna@email.com", testValue);
    expect(test.getOfficeNumber()).toBe(testValue);
  });
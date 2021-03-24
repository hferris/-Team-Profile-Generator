const Engineer = require("../lib/Engineer");

  test("Can set github account from constructor", () => {
    const testValue = "gitHubUser";
    const test = new Engineer("Anna", 2,"test.anna@email.com", testValue);
    expect(test.github).toBe(testValue);
  });
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const test = new Engineer("Anna", 2, "test.anna@email.com", "GitHubUser");
    expect(test.getRole()).toBe(testValue);
  });
  test("Can get Github username from getGithub()", () => {
    const testValue = "GitHubUser";
    const test = new Engineer("Anna", 2, "test.anna@email.com", testValue);
    expect(test.getGithub()).toBe(testValue);
  });
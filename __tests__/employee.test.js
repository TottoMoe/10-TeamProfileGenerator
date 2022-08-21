const Employee = require("../lib/Employee");

describe("Employee", () => {
  const testEmployee = {
    name: "Jenny",
    id: 101,
    email: "jenny@gmail.com",
  };

  const obj = new Employee(
    testEmployee.name,
    testEmployee.id,
    testEmployee.email
  );

  describe("Constructor", () => {
    it("should create a new construct employee class", () => {
      expect(typeof obj).toEqual("object");
    });
  });

  describe("getName", () => {
    it("should return name when getName method is called", () => {
      expect(obj.getName()).toEqual("Jenny");
    });
  });

  describe("Id", () => {
    it("should return id when getId method is called", () => {
      expect(obj.getId()).toEqual(101);
    });
  });

  describe("Email", () => {
    it("should return email when getEmail method is called", () => {
      expect(obj.getEmail()).toEqual("jenny@gmail.com");
    });
  });
});

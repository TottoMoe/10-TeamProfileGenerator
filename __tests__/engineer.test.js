const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const testEngineer = {
    name: "Totto",
    id: 102,
    email: "totto@gmail.com",
    github: "TottoMoe",
    role: "Engineer",
  };

  const obj = new Engineer(
    testEngineer.name,
    testEngineer.id,
    testEngineer.email,
    testEngineer.github
  );

  describe("Constructor", () => {
    it("should create a new construct employee class", () => {
      expect(obj).toEqual({
        name: "Totto",
        id: 102,
        email: "totto@gmail.com",
        github: "TottoMoe",
        role: "Engineer",
      });
    });
  });

  describe("getName", () => {
    it("should return name when getName method is called", () => {
      expect(obj.getName()).toEqual("Totto");
    });
  });

  describe("Id", () => {
    it("should return id when getId method is called", () => {
      expect(obj.getId()).toEqual(102);
    });
  });

  describe("Email", () => {
    it("should return email when getEmail method is called", () => {
      expect(obj.getEmail()).toEqual("totto@gmail.com");
    });
  });

  describe("GitHub", () => {
    it("should return email when getGithub method is called", () => {
      expect(obj.getGithub()).toEqual("TottoMoe");
    });
  });

  describe("Role", () => {
    it("should return email when getRole method is called", () => {
      expect(obj.getRole()).toEqual("Engineer");
    });
  });
});

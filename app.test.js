const request = require("supertest");
const app = require("./app");

describe("API Endpoints", () => {
  it("should return a 200 OK status and welcome message for the root endpoint", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Welcome to the CI/CD Workshop!");
  });

  it("should return current time for /time endpoint", async () => {
    const res = await request(app).get("/time");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("time");
    // basic ISO format check
    expect(() => new Date(res.body.time).toISOString()).not.toThrow();
  });
});


const request = require("supertest");
const app = require("../server");

test("GET /health should return healthy", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
});

test("GET /users should return users", async () => {
    const response = await request(app).get("/users");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(2);
});
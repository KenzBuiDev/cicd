"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../src/app");
describe('GET /api/check-date integration', () => {
    let server;
    beforeAll((done) => {
        server = app_1.app.listen(0, done);
    });
    afterAll((done) => {
        server.close(done);
    });
    it('valid date responds true', async () => {
        const res = await (0, supertest_1.default)(server).get('/api/check-date').query({ date: '2020-12-31' });
        expect(res.status).toBe(200);
        expect(res.body.valid).toBe(true);
    });
});

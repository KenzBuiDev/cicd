import http from 'http';
import request from 'supertest';
import { app } from '../src/app';

describe('GET /api/check-date integration', () => {
    let server: http.Server;

    beforeAll((done) => {
        server = app.listen(0, done);
    });

    afterAll((done) => {
        server.close(done);
    });

    it('valid date responds true', async () => {
        const res = await request(server).get('/api/check-date').query({ date: '2020-12-31' });
        expect(res.status).toBe(200);
        expect(res.body.valid).toBe(true);
    });
});



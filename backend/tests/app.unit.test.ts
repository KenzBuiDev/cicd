import request from 'supertest';
import app from '../src/app';

describe('isValidISODate API shape', () => {
    it('returns valid for 2024-02-29 (leap year)', async () => {
        const res = await request(app).get('/api/check-date').query({ date: '2024-02-29' });
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ date: '2024-02-29', valid: true });
    });

    it('returns invalid for 2023-02-29 (not leap)', async () => {
        const res = await request(app).get('/api/check-date').query({ date: '2023-02-29' });
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ date: '2023-02-29', valid: false });
    });

    it('returns invalid for malformed date', async () => {
        const res = await request(app).get('/api/check-date').query({ date: '2023/02/01' });
        expect(res.status).toBe(200);
        expect(res.body.valid).toBe(false);
    });
});



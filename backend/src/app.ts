import express from 'express';
import cors from 'cors';

export const app = express();
app.use(cors());
app.use(express.json());

function isValidISODate(dateString: string): boolean {
    // Expect YYYY-MM-DD strictly
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return false;
    const [yearStr, monthStr, dayStr] = dateString.split('-');
    const year = Number(yearStr);
    const month = Number(monthStr);
    const day = Number(dayStr);

    if (month < 1 || month > 12) return false;
    if (day < 1) return false;

    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day <= daysInMonth[month - 1];
}

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

app.get('/api/check-date', (req, res) => {
    const date = (req.query.date as string) || '';
    const valid = isValidISODate(date);
    res.json({ date, valid });
});

export default app;



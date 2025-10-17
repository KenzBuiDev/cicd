import React, { useState } from 'react';

export function App() {
    const [dateInput, setDateInput] = useState('2024-02-29');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleCheck() {
        setLoading(true);
        try {
            const res = await fetch(`/api/check-date?date=${encodeURIComponent(dateInput)}`);
            const data = await res.json();
            setResult(data);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
            <h1>Check Date</h1>
            <label htmlFor="date">Date (YYYY-MM-DD)</label>
            <input
                id="date"
                type="text"
                placeholder="YYYY-MM-DD"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                style={{ display: 'block', width: '100%', padding: 8, marginTop: 8 }}
            />
            <button onClick={handleCheck} disabled={loading} style={{ marginTop: 12 }}>
                {loading ? 'Checking…' : 'Check'}
            </button>
            {result && (
                <div aria-label="result" style={{ marginTop: 16 }}>
                    <strong>{result.date}</strong>: {result.valid ? 'Valid' : 'Invalid'}
                </div>
            )}
        </div>
    );
}



import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { App } from './App.jsx';

describe('App', () => {
    it('checks date and renders result', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            json: () => Promise.resolve({ date: '2024-02-29', valid: true }),
        });

        render(<App />);
        fireEvent.click(screen.getByRole('button', { name: /check/i }));
        await waitFor(() => expect(screen.getByLabelText('result')).toBeInTheDocument());
        expect(screen.getByText(/2024-02-29/)).toBeInTheDocument();
        expect(screen.getByText(/valid/i)).toBeInTheDocument();
    });
});



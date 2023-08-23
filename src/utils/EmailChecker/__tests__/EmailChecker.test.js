import { checkEmail } from '../emailChecker';

describe('check user`s email', () => {
    it('returns true for a valid email', () => {
        const validEmail = 'test@example.com';
        const isValid = checkEmail(validEmail);
        expect(isValid).toBe(true);
    });

    it('returns false for an invalid email', () => {
        const invalidEmail = 'invalid-email';
        const isValid = checkEmail(invalidEmail);
        expect(isValid).toBe(false);
    });
});

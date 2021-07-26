import rateLimit from 'express-rate-limit'

const apiBegrenser = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    message: 'Grensen på spørringer til APIet har blitt nådd',
    headers: true
})

const loginBegrenser = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
    message: 'For mange login forsøk, prøv igjen senere',
    headers: true
})

export const hastighetsBegrensere = {
    apiBegrenser,
    loginBegrenser
}

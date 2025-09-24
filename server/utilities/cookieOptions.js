export const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production'? 'none' : 'lax'
}
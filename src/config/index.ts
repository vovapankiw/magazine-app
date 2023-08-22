export const API_URL = (process.env.REACT_APP_API_URL as string) || 'localhost:3000';
export const JWT_SECRET = '123456' as string;

/** AUTH */
export const AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN || '';
export const AUTH_CLIENT_ID = process.env.REACT_APP_AUTH_CLIENT_ID || '';
export const AUTH_AUDIENCE = process.env.REACT_APP_AUTH_AUDIENCE || '';

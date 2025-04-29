export const PORT = process.env.PORT?.toString() || 9999;
export const TOKEN_SECRET = process.env.TOKEN_SECRET?.toString() || 'default';
export const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET?.toString() || 'default';

const swagggerServer = Number(process.env.DEFAULT_APIDOCS);
export const DEFAULT_APIDOCS = swagggerServer as 0 | 1;

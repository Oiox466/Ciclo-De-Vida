export const port = process.env.PORT || 3000
const DB_HOST = process.env.DB_HOST || "viaduct.proxy.rlwy.net";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "JsgXzAOTkFApJPwDSwLPtgHRqxHTYKeC";
const DB_NAME = process.env.DB_NAME || "railway";
const DB_PORT = process.env.DB_PORT || 21105;

export { DB_HOST,DB_NAME,DB_PASSWORD,DB_PORT,DB_USER };
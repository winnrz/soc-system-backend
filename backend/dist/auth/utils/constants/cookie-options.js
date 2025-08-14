"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenOptions = exports.accessTokenOptions = void 0;
const isProd = process.env.NODE_ENV === 'production';
exports.accessTokenOptions = {
    httpOnly: true,
    secure: isProd,
    sameSite: 'strict',
    maxAge: 15 * 60 * 1000,
    path: '/'
};
exports.refreshTokenOptions = {
    httpOnly: true,
    secure: isProd,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: '/'
};
//# sourceMappingURL=cookie-options.js.map
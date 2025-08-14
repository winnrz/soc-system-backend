"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = setCookie;
exports.getCookie = getCookie;
exports.removeCookie = removeCookie;
function setCookie(ctx, name, value, options = {}) {
    if (ctx?.res?.cookie) {
        ctx.res.cookie(name, value, options);
    }
    else if (ctx?.reply?.setCookie) {
        ctx.reply.setCookie(name, value, options);
    }
    else {
        throw new Error('Unsupported platform for setting cookies.');
    }
}
function getCookie(ctx, name) {
    if (ctx?.req?.cookies) {
        return ctx.req.cookies[name];
    }
    if (ctx?.request?.cookies) {
        return ctx.request.cookies[name];
    }
    throw new Error('Unsupported platform for getting cookies.');
}
function removeCookie(ctx, name, options) {
    if (ctx?.res?.clearCookie) {
        ctx.res.clearCookie(name, {
            path: options?.path || '/',
            domain: options?.domain,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            ...options,
        });
        return;
    }
    if (ctx?.reply?.clearCookie) {
        ctx.reply.clearCookie(name, {
            path: options?.path || '/',
            domain: options?.domain,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            ...options,
        });
        return;
    }
    throw new Error('Unsupported platform for removing cookies.');
}
//# sourceMappingURL=cookies.utils.js.map
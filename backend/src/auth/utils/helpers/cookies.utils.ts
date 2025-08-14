// A platform agnostic helper to set cookies
export function setCookie(ctx: any, name: string, value: string, options = {}) {
  if (ctx?.res?.cookie) {
    // Express
    ctx.res.cookie(name, value, options);
  } else if (ctx?.reply?.setCookie) {
    // Fastify
    ctx.reply.setCookie(name, value, options);
  } else {
    throw new Error('Unsupported platform for setting cookies.');
  }
}

// A platform agnostic helper to get cookies
export function getCookie(ctx: any, name: string): string | undefined {
  // Express
  if (ctx?.req?.cookies) {
    return ctx.req.cookies[name];
  }

  // Fastify
  if (ctx?.request?.cookies) {
    return ctx.request.cookies[name];
  }

  throw new Error('Unsupported platform for getting cookies.');
}

// Platform agnostic helper to remove cookies
export function removeCookie(
  ctx: any,
  name: string,
  options?: { path?: string; domain?: string },
) {
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

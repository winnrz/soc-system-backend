const isProd = process.env.NODE_ENV === 'production';

// export const accessTokenOptions = {
//   httpOnly: true,
//   secure: isProd,
//   sameSite: 'strict' as const,
//   maxAge: 15 * 60 * 1000,
//   path: '/'
// };

// export const refreshTokenOptions = {
//   httpOnly: true,
//   secure: isProd,
//   sameSite: 'strict' as const,
//   maxAge: 7 * 24 * 60 * 60 * 1000,
//   path: '/'
// };

export const accessTokenOptions = {
  httpOnly: true,
  secure: true, // must be true for SameSite=None
  sameSite: 'none' as const,
  maxAge: 15 * 60 * 1000,
  path: '/',
};

export const refreshTokenOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'none' as const,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: '/',
};


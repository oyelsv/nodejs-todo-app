export const cacheDisabler = (req, res, next): void => {
  res.set({
    'Surrogate-Control': 'no-store',
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
    etag: false,
  });

  next();
};

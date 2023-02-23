import ip from 'ip';
import app from './server';

export const server = (PORT: string): void => {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 API is running on http://localhost:${PORT}`);
      console.log(`🏡 API on local address is: http://${ip.address()}:${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

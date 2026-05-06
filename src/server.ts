import app from './app';

const start = async () => {
  try {
    await app.listen({
      port: Number(process.env.PORT) || 3000,
      host: '0.0.0.0'
    });

    console.log("Server running 🚀");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
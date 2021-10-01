const app = require('./app');
const port = process.env.port || 3000;

app.listen(port, () => {
  try {
    console.log(`[SERVER] Server Running on Port ${port}.`);
  } catch (error) {
    console.log(`[SERVER] Error On Try Run The Server.\n${error}`);
  }
});

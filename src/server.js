const app = require('./app');
const port = process.env.port || 3000;

app.listen(port, () => {
  try {
    console.log(`[SERVER] Started on port ${port}`);
  } catch (error) {
    console.log('[SERVER] Error on try Start Server.\nError:\n' + error);
  }
});

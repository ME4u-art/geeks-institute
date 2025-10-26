const express = require('express');
const app = express();

const mainRoutes = require('./routes/index');

app.use('/', mainRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

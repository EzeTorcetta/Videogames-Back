//! Encargado de levantar el server


const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`Server raised in port ${port} (force: false)`); // eslint-disable-line no-console
  });
});

const express = require('express');
const SyncDatabase = require('./db.sync');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/api/config/sync/database', SyncDatabase.syncDatabase);

app.listen(PORT, () => {
    console.log(`App runnnign on PORT ${PORT}`);
});
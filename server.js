const express = require("express");

const app = express();

app.listen(8000, () => {
    console.log(`Server started on port 8000`);
});

app.get('/', (req, res) => {
    res.json({message : "reached the home endpoint of oauth2 server"});
});
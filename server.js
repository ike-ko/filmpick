const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(sslRedirect());

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/filmpick',
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);
const connection = mongoose.connection;

// API routes
require('./routes')(app);

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, function() {
    console.log(`Server is running on Port: ${port}`);
});
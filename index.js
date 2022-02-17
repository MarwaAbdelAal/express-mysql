const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    // host: 'localhost',
    user: 'marwa',
    // password: 'password',
    database: 'test'
});

// Connect to mysql
db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...'); 
});

const app = express();

app.use(express.json());

// Get the temperature values
app.get('/temp', (req, res) => {
    let sql = 'SELECT * FROM temperature;';
    db.query(sql, (err, results) => {
        if (err) throw err;
        // console.log(results);
        res.send(results);
    });
});

// Add a temperature value
app.post('/temp', (req, res) => {
    const temp = req.body.temperature;
    if (typeof temp !== 'number') {
        return res.send('please enter a valid number').status(400);
    }
    let sql = `INSERT INTO temperature (temperature) VALUES ('${temp}');`;
    db.query(sql, (err, results) => {
        if (err) throw err;
        // console.log(results);
        res.send(`added new record of value: ${temp}`);
    });
});

// Get the pressure values
app.get('/pres', (req, res) => {
    let sql = 'SELECT * FROM pressure;';
    db.query(sql, (err, results) => {
        if (err) throw err;
        // console.log(results);
        res.send(results);
    });
});

// Add a pressure value
app.post('/pres', (req, res) => {
    const pressure = req.body.pressure;
    if (typeof pressure !== 'number') {
        return res.send('please enter a valid number').status(400);
    }
    let sql = `INSERT INTO pressure (pressure) VALUES ('${pressure}');`;
    db.query(sql, (err, results) => {
        if (err) throw err;
        // console.log(results);
        res.send(`added new record of value: ${pressure}`);
    });
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));
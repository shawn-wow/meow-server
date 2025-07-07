const fs = require('fs');
const path = require('path');
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const cors = require('cors');

const DATA_FILE = path.resolve(__dirname, 'data-file.json');

let db = {};

try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    db = JSON.parse(data);
} catch (e) {
    console.log('No existing data file found, creating new one.');
    fs.writeFileSync(DATA_FILE, '{}', 'utf8');
}

const app = express();
app.use(cors());
app.use(bodyParser.json());

function basicAuth(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).send('Unauthorized');

    const [username, password] = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');

    if (username === 'meowadmin' && password === 'abc1234') {
        return next();
    }

    res.status(401).send('Invalid credentials');
}

app.post('/users', basicAuth, (req, res) => {
    try {
        const { id, level } = req.body;

        if (!id || !level) {
            return res.status(400).json({ error: 'Missing id or level' });
        }

        const timestamp = Date.now();

        db[id] = {
            level,
            timestamp
        };

        fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2), 'utf8');

        console.log(`Saved: ${id} -> ${level} @ ${timestamp}`);
        res.json({ status: 'OK' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/users/:id', basicAuth, (req, res) => {
    const id = req.params.id;
    const result = db[id];

    if (!result) {
        return res.status(404).json({ error: 'ID not found' });
    }

    res.json(result);
});

app.get('/users', basicAuth, (req, res) => {
    res.json(db);
});

app.get('/user-count', basicAuth, (req, res) => {
    res.json(Object.keys(db).length);
});

const options = {
    key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'))
};

const PORT = 6907;
https.createServer(options, app).listen(PORT, () => {
    console.log(`HTTPS Server running on https://localhost:${PORT}`);
});
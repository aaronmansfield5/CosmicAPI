const { findCosmic } = require('./api/fetch.js');
const express = require('express');
const os = require('os');

const app = express();
const port = 80;

app.use(express.json());

app.post('/', async (req, res) => {
    const { Pet, Variant } = req.body;

    if (!Pet) {
        return res.status(400).json({ error: 'Missing "Pet" parameter in the request body.' });
    }

    const value = await findCosmic(Pet, Variant);
    const response = {
        Pet: Pet,
        Value: value
    };

    if (Variant) {
        response.Pet = `${Variant} ${Pet}`;
    }

    res.json(response);
});

const getLocalIp = () => {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
        for (const iface of interfaces[interfaceName]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
};

app.listen(port, async () => {
    const localIp = getLocalIp();
    console.log(`Server is running on http://${localIp}:${port}`);
});

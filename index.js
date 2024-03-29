const axios = require('axios');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3004;
const { Client, Events, GatewayIntentBits } = require('discord.js');

app.get('/version/request/:pid', async (req, res) => {
    productID = req.params.pid;
    const versionData = JSON.parse(fs.readFileSync('./versions.json'));

    if (productID in versionData.bots) {
        res.json(versionData.bots[productID].version);
    } else {
        res.json({
            "error": "Invalid product ID"
        });
    }
});

app.listen(port, () => {
    console.log(`Version API listening at http://localhost:${port}`);
});
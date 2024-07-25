require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.get('/api/brawlstars/:playerTag', async (req, res) => {

    console.log(`Received request for player: ${req.params.playerTag}`); 

    try {
        const apiKey = process.env.REACT_APP_API_KEY;

        const response = await axios.get(`https://api.brawlstars.com/v1/players/%23${req.params.playerTag}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        res.json(response.data);
        
    } catch (error) {
        console.error('Error occurred:', error.response ? error.response.data : error.message);
    }
});

app.listen(port, () => {
    console.log(`Proxy listening at http://localhost:${port}`);
});

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment,
    getFortune,
    getPlayerNames,
    addPlayer,
    deletePlayer,

} = require('./controller')

app.get('/api/compliment', getCompliment);
app.get('/api/fortune', getFortune);
app.get('/api/player', getPlayerNames)
app.post('/api/player/:name', addPlayer);
app.delete('/api/player/:index', deletePlayer)




app.listen(4000, () => console.log("Server running on 4000"));

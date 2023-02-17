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

} = require('./controller')

app.get('/api/compliment', getCompliment);
app.get('/api/compliment/fortune', getFortune);
app.get('/api/compliment/fortune/player', getPlayerNames)
app.post('api/compliment/fortune/player/:name', addPlayer);




app.listen(4000, () => console.log("Server running on 4000"));

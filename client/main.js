// const { response } = require("express");
// const { addPlayer } = require("../server/controller");

// const { response } = require("express")

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtm = document.getElementById('fortuneButton')
const playerList = document.getElementById("player-list")
const form = document.querySelector('form')
const input = document.querySelector('input')

const baseURL = 'http://localhost:4000/api/player' 

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () =>{
    axios.get("http://localhost:4000/api/compliment/fortune")
        .then(res =>{
            const data = res.data;
            alert(data);
        })
        .catch(err => console.log(err))

}
const createPLayerList = (arr) =>{
    arr.forEach((name) => {
        let item = document.createElement('li')
        item.textContent = name 
    });
}

const getPlayerNames = () =>{
    axios.get("http://localhost:4000/api/compliment/fortune/player")
        .then(response =>{
            createPLayerList(response.data)
        })
        .catch(err=>console.log(err))
}

const addPlayer = (evt) =>{
    evt.preventDefault()
    axios.post("http://localhost:4000/api/compliment/fortune/player/:name")
        .then(response =>{
            createPLayerList(response.data)
        })
        .catch(err => console.log(err))

}


fortuneBtm.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
form.addEventListener('submit', addPlayer)

getPlayerNames()
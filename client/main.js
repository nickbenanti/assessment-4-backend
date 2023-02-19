// const { response } = require("express");
// const { addPlayer } = require("../server/controller");

// const { response } = require("express")

// const { response } = require("express")

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtm = document.getElementById('fortuneButton')
const playerList = document.querySelector("ul")
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
    axios.get("http://localhost:4000/api/fortune/")
        .then(res =>{
            const data = res.data;
            alert(data);
        })
        .catch(err => console.log(err))

}
const createPLayerList = (arr) =>{
    playerList.innerHTML = ""
    arr.forEach((name,index) => {
        let item = document.createElement('li')
        let itemSpan = document.createElement('span')
        itemSpan.textContent = name 
        
        item.appendChild(itemSpan)
        
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"
        deleteBtn.id = index
        item.appendChild(deleteBtn)

        
        
        
        
        deleteBtn.addEventListener('click', deletePlayer)
        playerList.appendChild(item)


    });
}

const getPlayerNames = () =>{
    axios.get(baseURL)
        .then(response =>{
            createPLayerList(response.data)
        })
        .catch(err=>console.log(err))
}

const addPlayer = (evt) =>{
    evt.preventDefault()
    axios.post(baseURL + `/${input.value}`)
        .then(response =>{
            createPLayerList(response.data)
        })
        .catch(err => console.log(err))

    input.value = ""

}

const deletePlayer = (evt) =>{
    axios.delete(baseURL + `/${evt.target.id}`)
        .then(response =>{
            createPLayerList(response.data)
        })
        .catch(err => console.log(err))

}


fortuneBtm.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
form.addEventListener('submit', addPlayer)

getPlayerNames()
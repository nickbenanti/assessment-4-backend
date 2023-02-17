let arr = ["nick"];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req,res) => {
        const forturnes = ["A hunch is creativity trying to tell you something.", "Dont just think, act!", "Do not make extra work for yourself.","You have an ambitious nature and may make a name for yourself.", "You love chinese food", "You have a friendly heart and are well admired.", "You are working hard."];

        let randomIndex = Math.floor(Math.random() * forturnes.length);
        let randomFortune = forturnes[randomIndex]

        res.status(200).send(randomFortune);

    },
    getPlayerNames: (req,res) =>{
        res.status(200).send(arr)
    },
    
    addPlayer: (req,res) =>{
        arr.push(req.params.name)
        res.status(200).send(arr)
    }


}
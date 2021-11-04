const express = require("express");
const router = express.Router();

let listatimes = [
    {nome:"Flamengo",
     fundacao:"17 de novembro de 1895, Rio de Janeiro, Rio de Janeiro",
     mascote:"Urubu",
     tecnico:"Renato Gaucho"}
];

router.get("/", (req,res) => {
    res.status(200).json({message:"Welcome to the SPORTS TEAMS MENU", listatimes});
});


router.get ('/:id', (req,res) => {
    const id = req.params.id;
    const team = listatimes[id];
    
    if (!team) {
        res.status(404).json(`Sports Team ID: ${id} not found` );
    } else {
        res.status(200).json({ team });
    }
});

router.get("/index/:id", (req, res) => {
    const id = req.params.id;
    const index = listatimes[id]
    res.status(200).json({ index: index });
  });

router.post("/", (req, res) => {
    const team = req.body;
    const id = listatimes.length;
    if(!req.body.nome){
        res.status(400).json({message: "o campo nome é obrigatorio"});
        return;
    }else if(!req.body.fundacao){
        res.status(400).json({message: "o campo fundação é obrigatorio"});
        return;
    }
    else if(!req.body.mascote){
        res.status(400).json({message: "o campo mascote é obrigatorio"});
        return; 
    }else if(!req.body.tecnico){
        res.status(400).json({message: "o campo tecnico é obrigatorio"});
        return; 
    }
    listatimes.push(team);
    res.status(200).json({ message: `Sports Team Successfully added ! Team ID: ${id}` });
});


router.put("/:id", (req, res) => {
    const id = req.params.id;
    const team = req.body;
    const false_id = listatimes[id];

    if( !false_id ) { 
        res.status(404).json(` Sports Team ID:${id} not found!` );
    } else {
        listatimes[id] = team;
        res.status(200).json({ message: `Sports Team Successfully Modified! Team ID: ${id}` });
    }
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const team = req.body;
    const false_id = listatimes[id];
    
    if( !false_id ) { 
        res.status(404).json(`Sports Team ID ${id} was not found!` );
    } else {
    delete listatimes.splice(id, 1); 
    res.status(200).json({ message: `Sports Team Successfully Deleted ! Team ID: ${id}` });
    }
});


module.exports = router;
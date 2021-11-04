const express = require("express");
const router = express.Router();



let listajogos = [
    {nome:"Overwatch",
     lancamento:2016,
     plataforma:"PlayStation 4, Xbox One, Nintendo Switch, PC",
     desenvolvedor:"Blizzard"}
];

const getjogosvalidos = () => listajogos.filter(Boolean);
const getJogosIndexById = (id) =>  
getjogosvalidos().findIndex((jogo) => jogo.id === id);



router.get ("/", (req,res) => {
    res.status(200).json({message: 'Welcome to the GAMES MENU!', listajogos });
});



router.get ('/:id', (req,res) => {
    const id = req.params.id;
    const game = listajogos[id];
    
    if (!game) {
        res.status(404).json(`Game ID: ${id} not found` );
    } else {
        res.status(200).json({ game });
    }
});

router.get("/index/:id", (req, res) => {
    const id = req.params.id;
    const index = listajogos[id]
    res.status(200).json({ index: index });
  });



router.post("/", (req, res) => {
    const game = req.body;
    const id = listajogos.length;
    if(!req.body.nome){
        res.status(400).json({message: "o campo nome é obrigatorio"});
        return;
    }else if(!req.body.lancamento){
        res.status(400).json({message: "o campo lançamento é obrigatorio"});
        return;
    }
    else if(!req.body.plataforma){
        res.status(400).json({message: "o campo plataforma é obrigatorio"});
        return; 
    }else if(!req.body.desenvolvedor){
        res.status(400).json({message: "o campo desenvolvedor é obrigatorio"});
        return; 
    }
    listajogos.push(game);
    res.status(200).json({ message: `Game Successfully added ! Game ID: ${id}` });
});


router.put("/:id", (req, res) => {
    const id = req.params.id;
    const game = req.body;
    const false_id = listajogos[id];

    if( !false_id ) { 
        res.status(404).json(`Game ID:${id} not found!` );
    } else {
        listajogos[id] = game;
        res.status(200).json({ message: `Game Successfully Modified! GAME ID: ${id}` });
    }
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const game = req.body;
    const false_id = listajogos[id];
    
    if( !false_id ) { 
        res.status(404).json(`Game ID ${id} was not found!` );
    } else {
    delete listajogos.splice(id, 1); 
    res.status(200).json({ message: `Game Successfully Deleted ! Game ID: ${id}` });
    }
});


module.exports = router;



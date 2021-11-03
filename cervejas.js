const express = require("express");
const router = express.Router();

let listacerveja = [
    {   
    nome:"Heineken",
    origem:"Holanda",
     teoralcoolico:"5%",
     slogan: "Open your world"
    }
];

router.get("/", (req,res) => {
    res.status(200).json({message:"WELCOME TO THE BEER MENU! ",listacerveja });
});


router.get ('/:id', (req,res) => {
    const id = req.params.id;
    const beer = listacerveja[id];
    
    if (!beer) {
        res.status(404).json(`BEER ID: ${id} not found` );
    } else {
        res.status(200).json({ beer });
    }
});

router.get("/index/:id", (req, res) => {
    const id = req.params.id;
    const index = listacerveja[id]
    res.status(200).json({ index: index });
  });

router.post("/", (req, res) => {
    const beer = req.body;
     const id = listacerveja.length;
    listacerveja.push(beer);
    res.status(200).json({ message: `Beer Successfully added ! Beer ID: ${id}` });
});


router.put("/:id", (req, res) => {
    const id = req.params.id;
    const beer = req.body;
    const false_id = listacerveja[id];

    if( !false_id ) { 
        res.status(404).json(`Beer ID:${id} not found!` );
    } else {
        listacerveja[id] = beer;
        res.status(200).json({ message: `Beer Successfully Modified! Beer ID: ${id}` });
    }
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const beer = req.body;
    const false_id = listacerveja[id];
    
    if( !false_id ) { 
        res.status(404).json(`Beer ID ${id} was not found!` );
    } else {
    delete listacerveja.splice(id, 1); 
    res.status(200).json({ message: `Beer Successfully Deleted ! Beer ID: ${id}` });
    }
});


module.exports = router;
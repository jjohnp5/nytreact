const db = require('../models/article');

module.exports = {
    findAll: function(req,res){
        db.find(req.query)
        .then(data => {
            res.json(data)
        }).catch(err=>{
            res.status(400).json(err);
        })
    },
    create: function(req,res){
        console.log(req.body);
        db.findById(req.body._id, (err, data)=>{
            console.log(data);
            if(!data){
                db.create(req.body)
                .then(data => {
                    res.json(data)
                }).catch(err=>{
                    res.status(400).json(err);
                })
            }else{
                res.json({message: 'Article already saved in the database'});
            }
        })
        
    },
    remove: function(req,res){
        db.findById(req.params.id)
        .then(data => {
            data.remove()
        }).then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.status(400).json(err);
        })
    }
}
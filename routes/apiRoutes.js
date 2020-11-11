const workout = require("../models/workout");

module.exports = function(app){
    app.get("/api/workouts", function(req, res) {
        workout.find()
        .then(data =>{
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    })


app.post("/api/workouts", function (req,res){
    workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
});

app.get("/api/workouts/range", function(req,res){
    workout.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});

app.post("/api/workouts/range", function(req, res) {
    workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
});

app.put("/api/workoutes/:id", ({body,parmas}, res)=>{
    workout.findByIdAndUpdate(
        params.id,
        {$push:{exercises:body}},
        {new: true, runValidators:true}
    )
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
});

};
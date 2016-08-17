var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    appClassModel = require('./models/appClassModel');

var app = express();

app.set('view engine', 'ejs');  
app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', (req, res) => {
    res.render('initial');
});

app.get('/banco', (req, res) => {
    appClassModel.find({}).exec((err, data) => {
        if(!err)
            res.json(data);
        else
            res.json(err);
    });
});

app.post('/banco', (req, res) => {
    var name = req.body.materia;
    var t = new appClassModel({ materia : name}); 
    t.save((err) => {
        if(!err)
            res.json(name);
    });   

});


app.post('/banco/:id', (req, res) => {
    req.params
})


app.listen(3002, () => {
    console.log('listening in ' + 3002);

    mongoose.connect('mongodb://localhost/banco');

    });
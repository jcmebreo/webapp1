const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
console.log(__dirname);
const app = express();
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'views','flags')));
app.use(express.urlencoded({ extended: true}));
const Blog = require('./models/blog');
const pName = require('./models/people');
const globalTime = require('global-time');
const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.xprrv.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((er) => console.log(err))


function formatTime(timeData, selectArea){
    var timeOptions = {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: selectArea};
    var dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    
    var time = new Intl.DateTimeFormat('en-US', timeOptions).format(timeData);
    var date = new Intl.DateTimeFormat('end-US', dateOptions).format(timeData);
    return [date,time];
}

app.post('/personnew', (req, res) => {
        pName.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('personnew',{tZone: req.body.tZoneArea})
        })
        .catch((err) => {
            console.log(err);
        });
});




app.post('/addPerson', (req,res) => {
    (async () => {
        const time = await globalTime();
        const date = new Date(time);
        console.log(time);  
        console.log(date);  
        const sendTime = formatTime(date, req.body["selectTimezone"]);

    const personInp = new pName(req.body);
    personInp.save().then(result =>{}).catch(error => {console.log(error)});

    pName.find({tZoneID: req.body["tZoneID"]})
    .then((result) => {
        res.render('personlist', {pName: result, timezone: req.body.tZoneID, areaTime: sendTime});
    })
    .catch((err) => {
        console.log(err);
    });
    })();
})


app.get('/', function (req, res) {
    res.render('landing');
});

app.post('/personview', (req, res) => {
    const id = req.body.pID;
    pName.findById(id)
    .then((result) => {
        res.render('personview',{pName: result});
    })
    .catch((err) => {
        console.log(err);
    })
});


app.post('/personlist', (req, res) => {
    (async () => {
        const time = await globalTime();
        const date = new Date(time);
        console.log(time);  
        console.log(date);  
        const sendTime = formatTime(date, req.body["selectTimezone"]);
        console.log(formatTime(date, req.body["selectTimezone"]))
    

    pName.find({tZoneID: req.body["selectTimezone"]})
    .then((result) => {
        res.render('personlist',{pName: result, timezone: req.body.selectTimezone, areaTime: sendTime})
    })
    .catch((err) => {
        console.log(err);
    })

    })();
});






app.set('view engine', 'ejs'); 






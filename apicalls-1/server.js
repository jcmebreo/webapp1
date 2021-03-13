const express = require('express');
const app = express();
const path = require('path')
const weather = require('weather-js');
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'views', 'assets')));

app.listen(3000);


app.use((req, res, next) =>{
    console.log('Request Made');
    console.log(`Host: ${req.hostname}`);
    console.log(`Path: ${req.path}`);
    console.log(`Method: ${req.method}`);
    next();

});

app.set('view engine', 'ejs'); 

app.get('/', function (req, res) {
    res.render('index',{weathersData: weather});
});

app.get('/other', function (req, res) {
    res.render('other');
});



weather.find({search: 'Philippines, Davao City', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
    console.log(JSON.stringify(result, null, 2));
    weatherData = result;
});




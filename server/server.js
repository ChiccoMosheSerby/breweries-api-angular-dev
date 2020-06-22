const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());




app.get('/beers', function (req, res) {
    fetch('https://api.openbrewerydb.org/breweries').then(data => {
        data.json().then(finalData => res.send(finalData))
    })
});


//conections ////////////////////////////////////////////////////////////////////////////////////////////
//server conection------------------
let port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log('-------------------------> server conected to port: ', port, '!<---------------------------------------------------------')
})



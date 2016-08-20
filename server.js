var port = process.env.PORT || 3000

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var request = require('request')

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.render('popup')    
})

app.post('/', function(req, res) {
    console.log('req.body', req.body)
    var options = {
        uri: 'https://library.copperstud.io/ingest',
        method: 'POST',
        json: {
            "src":"fb",
            "src_id":"1234567",
            "title": "Title for RHEO",
            "mood": "spark",
            "genre": "film,comedy",
            "people": "johntravolta",
            "misc": "airplane,wings"
        }  
    }
    request(options, function(err, resp, body) {
        if(!err && resp.statusCode=200){
            console.log(body.id)
            res.send('worked')
        }
    })
})

app.listen(port, function() { console.log('server running on port', port) })

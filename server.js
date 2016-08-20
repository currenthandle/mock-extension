var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var request = require('request')

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.render('popup')    
})

app.post('/', function(req, res) {
    conscle.log('req.body', req.body)
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
        if(!err && resp,statusCode=200){
            console.log(body.id)
        }
    })
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, function() { console.log('server running on port 3000') })

var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', function(req, res) {
    res.render('popup')    
})

app.post('/', function(req, res) {
    console.log('req', req)
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, function() { console.log('server running on port 3000') })

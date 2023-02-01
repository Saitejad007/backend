let express = require('express');
let app = express();
console.log('Hello World')

const path = __dirname + '/views/index.html'

app.listen(3000);

app.get('/',((req,res)=>{
    res.send('Hello Express');
    res.sendFile(path)
}));

module.exports = app;

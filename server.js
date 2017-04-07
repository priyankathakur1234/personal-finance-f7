var express = require('express'),
 app = express();  
app.use(express.static('./dist'))
 app.get('*',function (req,res) {
   res.sendFile(__dirname + '/dist/app.html');
       });
app.get('/login',function (req,res) {
   res.sendFile(__dirname + '/dist/login.html');
       });

 
 app.listen(8000);
 console.log("listen port 8000")

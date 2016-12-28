var express = require('express');
var fileUpload = require('express-fileupload');
var cors = require('cors')
var path = require('path');
var app = express();
 
// default options 
app.use(fileUpload());

app.use(cors());
 
app.post('/upload', function(req, res) {
 
    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }
 
    var upload = req.files.upload;
    var filePath = path.join(__dirname, 'fileName.jpg')
    upload.mv(filePath, function(err) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send('File uploaded!');
        }
    });
});


app.listen(3000, function() {
    console.log("App is listening")
})
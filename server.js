
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files frim the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname+ '/dist/index.html'));

app.get('*', function(req,res) {

    res.sendfile(path.join(__dirname+ '/dist/index.html'));
});

app.listen(process.env.PORT || 8000);
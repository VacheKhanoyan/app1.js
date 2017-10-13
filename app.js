const express = require('express');
const app = express();
 
app.post('/like', function(req, res) {
    res.send('Like ++');
});
  
  app.listen(1234);

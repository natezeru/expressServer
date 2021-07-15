const express = require('express'); // importing the express dependency

const app = express(); 
const port = 3000;  //this creates a channel for the server to listen to clients request.

app.use(express.static('public')); //

app.listen(port, () => {
    console.log(`Server listening at http://localhost: ${port}`)
})
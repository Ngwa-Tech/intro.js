require("dotenv").config();
const express = require('express'); 
const path = require('path'); 
 
const app = express () ;
const PORT = process.env.PORT;

//Serve static files 
app.use(express.static(path.join(__dirname, 'public')));
//Serve the main page 
app.get('/about', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views', 'index.html')); 
});

app.get("/",(req, res) => {
    res.send("hello");
});
    app.listen (PORT, () => { 
        console.log (` Server running on http://localhost:${PORT}`);
});
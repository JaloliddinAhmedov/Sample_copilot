//writing app in express js to handle frontend requests and serve static files  for a training service

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');


// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample in-memory data store for training sessions
let trainingSessions = [];
// Route to get all training sessions

app.get('/api/trainings', (req, res) => {
    res.json(trainingSessions);
});
// Route to add a new training session
app.post('/api/trainings', (req, res) => {
    const newSession = req.body;
    trainingSessions.push(newSession);
    res.status(201).json(newSession);
});
// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 
//initialize git repo and commit the code
//git commands
// git init
// git add .
// git commit -m "Initial commit - Express.js training service"
//npm initialize the project
// npm init -y
//install express and body-parser
// npm install express body-parser


// node index.js
// The server will be accessible at http://localhost:3000

//opening terminal in VS code to run commands
//install npm by terminal command
// npm install
//run the server by terminal command
// node index.js
//install node js by terminal command
//in windows
// choco install nodejs
// when npm init, I am getting an error npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go

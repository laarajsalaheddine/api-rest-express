const express = require('express');
require('dotenv').config(); // dotenv chargé AVANT l'accès à process.env
const taskRoutes = require('./routes/task.routes');
const app = express();

const PORT = process.env.PORT || 3000;          // valeur par défaut
const BASE_URL = process.env.API_BASE_URL || '/api'; // valeur par défaut

app.use(express.json());

// Middleware to parse urlencoded bodies

/* 
    const callbackFunction = () =>{ ...... traitement /logic};
    app.use(callbackFunction)
    app.use(()=>{ ...... traitement /logic});
    app.use(objet.methode());
*/

/*
    query param < == > Paramètre de requête --- www.example.com?name=John
    url param < == > Paramètre d'URL --- www.example.com/user/12345
    request body < == > Le body de la requête
*/

console.log("=================================");
console.log(typeof taskRoutes); // doit être "function"
console.log("=================================");

// 🔹 Toutes les routes tasks seront préfixées par /api/tasks (ou BASE_URL défini)
app.use(`${BASE_URL}/tasks`, taskRoutes);

app.get(`/`, (req, res) => {
    res.send("Welcome to the Task Management API");
});

app.listen(
    PORT,
    () => {
        console.log(`Your app is running on: http://localhost:${PORT}/${BASE_URL}/`);
    }
);

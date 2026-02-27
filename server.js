const express = require('express');
const app = express();
const PORT = 3200;

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware pour capturer toutes les requêtes
app.all('*', (req, res) => {
  const echoResponse = {
    method: req.method,
    url: req.url,
    path: req.path,
    headers: req.headers,
    query: req.query,
    body: req.body,
    params: req.params,
    timestamp: new Date().toISOString()
  };

  // Affichage dans la console
  console.log('\n📨 Requête reçue:');
  console.log(`   Méthode: ${req.method}`);
  console.log(`   URL: ${req.url}`);
  console.log(`   Body:`, req.body);
  console.log(`   Query:`, req.query);

  res.json(echoResponse);
});

app.listen(PORT, () => {
  console.log(`🔊 Serveur Echo API démarré sur http://localhost:${PORT}`);
});

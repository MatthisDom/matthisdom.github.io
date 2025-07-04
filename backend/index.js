const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Autorise les requêtes du frontend
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello depuis Express !' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend écoute sur http://localhost:${PORT}`);
});

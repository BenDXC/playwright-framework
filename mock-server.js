const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { username: 'admin', password: 'admin123', name: 'Admin User' },
  { username: 'user', password: 'user123', name: 'Regular User' }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, name: user.name, token: 'mock-token' });
  } else {
    res.status(401).json({ success: false });
  }
});

app.get('/dashboard', (req, res) => {
  res.send(`
    <div id="welcome">Welcome, Mock User!</div>
    <button id="logout">Logout</button>
  `);
});

app.get('/user/profile', (req, res) => {
  res.json({ name: 'Mock User' });
});

const port = 3000;
app.listen(port, () => console.log(`Mock server running at http://localhost:${port}`));
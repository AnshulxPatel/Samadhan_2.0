const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET = "your-secret-key";
const users = [];

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User exists" });
  }
  const hash = await bcrypt.hash(password, 10);
  users.push({ username, password: hash });
  res.json({ message: "User registered" });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.sendStatus(401);
  jwt.verify(auth.split(" ")[1], SECRET, (err, data) => {
    if (err) return res.sendStatus(403);
    req.user = data;
    next();
  });
}

app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ message: `Hello ${req.user.username}` });
});

app.listen(5000);

const express = require("express")
const path = require("path")
const app = express()

// const cors = require("cors")
// app.use(cors())

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './blog-react/dist')));

// All other GET requests not handled before will return our React app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './blog-react/dist', 'index.html'));
});

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("app listening on port 3000")
})
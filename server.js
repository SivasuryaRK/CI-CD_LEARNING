const express = require("express")

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.json({
        message: "CI/CD Learning API",
        status: "running"
    });
})

app.get("/health", (req, res) => {
    res.json({
        status: "Healthy"
    });
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
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
        status: "broken"
    });
})

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Siva" },
        { id: 2, name: "Arun" }
    ]);
}); 

if(require.main === module)
{
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    })
}

module.exports = app;
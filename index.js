const express = require("express");
const app = express();

app.get("/multiply", (req, res) =>
{
    const { value, value2 } = req.query;
    result = value * value2;
    res.send(`<h1>${value}* ${value2} = ${result}</h1>`)
}
)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`${PORT}`);
})
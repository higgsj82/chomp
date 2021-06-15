const express = require("express");
const app = express();



// vvv server creation down below vvv
app.get('/', (req, res) => res.send("App is now alive!"))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server breathing on port ${port}`))
const express = require("express");

express()

.get("/hi", (req, res) => {
    res.status(200).json({status: 200, message: "success"});
})

.listen(8000, () => {
    console.log(`Server launched on port 8000`)
});
const express = require("express")
const app = express()
const ejs = require("ejs")
const https = require("https")
const res = require("express/lib/response")

app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
var listData;
app.get("/", (req,res)=>{
    const url = "https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6";
    https.get(url, (response)=>{
        response.on("data", (data)=>{
        listData = JSON.parse(data)
        res.render("home",{data: listData.clients})
        }).on('error', (e) => {
            console.error(e);
          });
    })
})

app.listen(3000, ()=>{
    console.log("Server Running");
})
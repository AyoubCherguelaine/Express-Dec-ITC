const express = require('express');
const db=  require("./db")
var bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",(req,res)=>{
    let fr = req.body
    console.log(fr);
    let q=`select idUser from user where name="${fr.username}" and password = "${fr.password}" `
    console.log(q)
    db.query(q,(err,result)=>{
        if(err) {
            throw err
         }
        else{
            if(result.length > 0){
                console.log(result[0])
            }else{
                console.log("nothing");
            }
        }
       })

    
    res.end()
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",(req,res)=>{
    let data = req.body;
    console.log(data)
    let q= `insert into user (name,password) values ("${data.username}","${data.password}")`
    console.log(q)
    db.query(q,(err,result)=>{
        if(err) throw err
        else{
            console.log("done !")
            res.redirect("/login")
        }
    })

})

app.listen(3000,()=>{
    console.log("you are in the air ");
})

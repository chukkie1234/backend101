
const express = require("express")

const app = express()

app.use(express.json())

const students = [
    {
        firstName: "David",
        lastName: "Sampson",
        score: 80
    },
    {
        firstName: "Davidd",
        lastName: "Sampsonn",
        score: 800
    },
    {
        firstName: "Daviddd",
        lastName: "Sampsonnn",
        score: 8000
    },
]


app.get("/users", (req, res)=>{

    res.status(201).json({
        message: "Users retrieved Successfully ",
        data: students
    })    

})

app.post("/users", (req, res)=>{

    console.log(req.body)

    const { firstName, lastName, Score} = req.body

    res.status(201).json({
        message: "Users Posted Successfully",
        data: { 
            firstName: firstName,
            lastName: lastName,
            Score, Score
         }
    })     

})

app.patch("/users", (req, res)=>{

    res.send("Users Updated Successfully")    

})


app.delete("/users", (req, res)=>{

    res.send("Users deleted Successfully")    

})


app.listen(8080, ()=>{
    console.log("Server started running port 8080")
})
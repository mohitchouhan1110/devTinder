const express = require('express');

const app = express();

// app.use("/",(req,res)=>{
//     res.send("Namaste from the dashboard!")
// })

//This will only handle GET call to /user
app.get("/user",(req,res)=>{
    res.send({firstName:"Mohit",lastname:"Chouhan"});
});

app.post("/user",async(req,res)=>{
    console.log(req.body);
    //saving data to DB
    res.send("Data successfully saved to the database!");
});

app.delete("/user",(req,res)=>{
    res.send("Deleted successfully!!");
});

//This will match all the http method API calls to /test
app.use("/hello/2",(req,res)=>{
    res.send("Abracadarab !")
})


app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello!!")
})

app.use("/test",(req,res)=>{
    res.send("Hello from the Server!!")
})

// app.use("/",(req,res)=>{
//     res.send("Namaste from the dashboard!")
// })

app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000...");
});
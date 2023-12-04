const express= require("express")
const {connection}= require("./db");
const userRoutes = require('./routes/user.routes.js')
const appointmentRoutes = require('./routes/appointmentRoutes.routes.js')
const cors=require("cors")
require("dotenv").config()
const app= express();


app.use(express.json());
app.use(cors())


app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);

app.get("/",(req,res)=>{
    res.status(200).send({"msg":"This is a Home page"})
})




const PORT=process.env.Port

app.listen(PORT,async()=>{
    try{
         await connection
         console.log("Server is connected to Db")
         console.log(`Server is running at ${PORT}`)
    }catch(err){
        console.log(err)
}
})
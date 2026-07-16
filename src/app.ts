import express from 'express'

const app = express();

app.use("/health",(_,res)=>{
    res.json({
        message : "Server is running"
    })
})

export default app
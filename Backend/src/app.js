const express=require('express');
const aiRoutes=require('./routes/ai.routes')
const cors=require('cors')

const app = express()

// app.use(cors())

app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Hellow World')
})

app.use('/api',aiRoutes)


module.exports=app
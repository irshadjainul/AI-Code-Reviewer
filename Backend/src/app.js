const express=require('express');
const aiRoutes=require('./routes/ai.routes')
const cors=require('cors')

const app = express()

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-code-reviewer-04.vercel.app",
    "http://ai-code-reviewer-04.vercel.app",
    ],
  })
);

app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Hellow World')
})

app.use('/api',aiRoutes)


module.exports=app

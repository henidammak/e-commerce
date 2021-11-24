const express = require ('express')
const connectDB = require('./config/connectDB')
const app = express()
const user = require ('./routes/user')
const product = require ('./routes/product')
const admin = require ('./routes/admin')
const multer = require ('multer')
const cors = require ('cors')
const router = require('./routes/product')
app.use(cors())




const fileStorageEngine= multer.diskStorage({
    destination: (req , file, cb)=>{
        cb(null, "../client/public/uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
});
const upload = multer({storage:fileStorageEngine})

app.get('/',(req,res) => {
      res.sendFile(path.join(__dirname, "index.html"))
});

app.post('/single',upload.single('image'),(req,res) => {
    console.log(req.file)
    res.send('Single File upload success')
})


app.post('/multiple',upload.array('images', 3),(req,res) => {
    console.log(req.file)
    res.send('Multiple File upload success')
})




app.use(express.json())
connectDB()
app.use('/user',product,user,admin)

const PORT = process.env.PORT ||5000
const server = app.listen(PORT, (err)=> err ? console.log(err): console.log(`server running on port ${PORT}`))
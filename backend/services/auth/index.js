import express, { Router } from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import router from "./routes/auth.route.js"
dotenv.config()

const port = process.env.PORT || 8001

const app = express()
app.use(express.json())
app.use("/",router)

app.get("/", (req,res) => {
    res.json({ message: "Hello from Auth" })
})

const start = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`Auth started at port ${port}`)
    })
}

start().catch((error) => {
    console.error("Auth service failed to start:", error)
    process.exit(1)
})

import { getAuth } from "firebase-admin/auth"
import { app } from "../config/firebase.js"
import User from "../models/user.js"

export const login = async (req,res) => {
    try {
        const { token } = req.body
        const decoded = await getAuth(app).verifyIdToken(token)
        let user = await User.findOne({
            firebaseUID: decoded.uid
        })

        if(!user) {
            user = await User.create({
                name: decoded.name,
                firebaseUID: decoded.uid,
                email: decoded.email,
                avatar: decoded.picture
            })
        }

        const sessionId = crypto.randomUUID()

        res.cookie("session", sessionId, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000
        })

        return res.status(200).json(user)
 
    } catch (error) {
        return res.status(500).json({message:`login error ${error}`})
    }
}
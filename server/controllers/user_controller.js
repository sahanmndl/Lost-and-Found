import User from "../models/User";
import bcrypt from "bcryptjs";

export const getAllUsers = async(req, res, next) => {
    let users;
    try {
        users = await User.find()
    } catch(err) {
        return console.log(err)
    }

    if(!users) {
        return res.status(404).json({message: "No Users found!"})
    }

    return res.status(200).json({users})
}

export const signUp = async (req, res, next) => {
    const {name, email, password, number} = req.body

    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch(err) {
        return console.log(err)
    }

    if(existingUser) {
        return res.status(400).json({message: "User already exists!"})
    }

    const hashedPassword = bcrypt.hashSync(password)

    const user = new User({
        name, 
        email, 
        password: hashedPassword, 
        number,
        items: []
    })

    try {
        await user.save()
    } catch(err) {
        return console.log(err)
    }

    return res.status(201).json({user})
}

export const signIn = async(req, res, next) => {
    const {email, password} = req.body

    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch(err) {
        return console.log(err)
    }

    if(!existingUser) {
        return res.status(404).json({message: "Email not registered! SignUp instead"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
    if(!isPasswordCorrect) {
        return res.status(400).json({message: "Incorrect Password!"})
    }

    return res.status(200).json({message: "Login successful!", user: existingUser})
}
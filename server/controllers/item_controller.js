import mongoose from "mongoose";
import Item from "../models/Item";
import User from "../models/User";

export const getAllItems = async (req, res, next) => {
    let items;
    try {
        items = await Item.find().populate('user')
    } catch(err) {
        return console.log(err)
    }

    if(!items) {
        return res.status(404).json({message: "No lost items presently!"})
    }

    return res.status(200).json({items})
}

export const addItem = async (req, res, next) => {
    const {name, description, image, foundat, email, number, user} = req.body

    let existingUser
    try {
        existingUser = await User.findById(user)
    } catch (err) {
        return console.log(err)
    }

    if(!existingUser) {
        return res.status(400).json({message: "User not available!"})
    }

    const item = new Item({
        name, 
        description,
        image,
        foundat,
        email,
        number,
        user
    })

    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await item.save({session})
        existingUser.items.push(item)
        await existingUser.save({session})
        await session.commitTransaction()
    } catch(err) {
        console.log(err)
        return res.status(500).json({message: err})
    }

    return res.status(200).json({item})
}

export const updateItem = async (req, res, next) => {
    const {name, description, foundat, email, number} = req.body
    const itemID = req.params.id

    let item
    try {
        item = await Item.findByIdAndUpdate(itemID, {
            name, 
            description,
            foundat,
            email,
            number
        })
    } catch(err) {
        return console.log(err)
    }
    
    if(!item) {
        return res.status(500).json({message: "Unable to update item"})
    }

    return res.status(200).json({item})
}

export const getItemById = async (req, res, next) => {
    const id = req.params.id

    let item
    try {
        item = await Item.findById(id)
    } catch (err) {
        return console.log(err)
    }

    if(!item) {
        return res.status(404).json({message: "Item not found!"})
    }

    return res.status(200).json({item})
}

export const deleteItem = async (req, res, next) => {
    const id = req.params.id

    let item
    try {
        item = await Item.findByIdAndRemove(id).populate('user')
        await item.user.items.pull(item)
        await item.user.save()
    } catch (err) {
        return console.log(err)
    }

    if(!item) {
        return res.status(500).json({message: "Unable to delete item"})
    }

    return res.status(200).json({message: "Item successfully deleted!"})
}

export const getItemsByUserId = async (req, res, next) => {
    const userId = req.params.id

    let userItems
    try {
        userItems = await User.findById(userId).populate('items')
    } catch (err) {
        return console.log(err)
    }

    if(!userItems) {
        return res.status(404).json({message: "No items found!"})
    }

    return res.status(200).json({items: userItems})
}
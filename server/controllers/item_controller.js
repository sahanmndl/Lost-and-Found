import Item from "../models/Item";

export const getAllItems = async (req, res, next) => {
    let items;
    try {
        items = await Item.find()
    } catch(err) {
        return console.log(err)
    }

    if(!items) {
        return res.status(404).json({message: "No lost items presently!"})
    }

    return res.status(200).json({items})
}
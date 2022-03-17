import db from '../models/index'
import CRUDservice from '../services/CRUDservice'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        console.log(data)
        return res.render('homePage', {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    } 
}

let getCRUD = (req, res) => {
    res.render('crudPage')
}
let postCRUD = async (req, res) => {
    let message = await CRUDservice.createUser(req.body) //name form
    console.log(message)
    res.send('crudPage')
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD
}
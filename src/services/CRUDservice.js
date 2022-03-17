import bcrypt from 'bcrypt'
import db from '../models/index'

const saltRounds = 10

let createUser = async (data) => { //nho la ham nay return 1 promise
    return new Promise( async (resolve, reject) => {
        try {
            let hashPassword = await hashPass(data.password) //wait data from data variable in createUser then can do tasks below
            await db.User.create({                //wait create task to do resolve
                password: hashPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                image: data.image,
                phoneNumber: data.phoneNumber,
                roleId: data.roleId,
                positionId: data.positionId,
            })
            resolve('OK! create user successfully')
        } catch (e){
            reject(e)
        }
    })
}

let hashPass = (pass) => {
    return new Promise ( async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(pass, saltRounds)
            resolve(hash)
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createUser: createUser
}
const db = require("../models")
const jwt = require('jsonwebtoken')
require('dotenv').config();
async function checkToken(req, res, next) {
    let accessTokenFromHeader = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
	if (!accessTokenFromHeader) {
		return res.status(401).json('Không tìm thấy access token!');
	}
	const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
    if (accessTokenFromHeader.startsWith('Bearer ')) {
        accessTokenFromHeader = accessTokenFromHeader.slice(7, accessTokenFromHeader.length);
        const verified = await jwt.verify(accessTokenFromHeader, accessTokenSecret)	
        if (!verified) {
            return res
                .status(401)
                .json('Bạn không có quyền truy cập vào tính năng này!');
        }
        console.log(verified)
        const user = await db.users.findOne({
            raw: true,
            where: {
                email: verified.payload.email
            }
        });
	    req.user = user;
        req.token = accessTokenFromHeader;
	    return next(); 
    }
};

module.exports = checkToken

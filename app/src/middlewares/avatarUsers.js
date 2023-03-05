const multer = require('multer');
const path = require('path');

const storeImageUsers = multer.diskStorage({
    destination : function (req, file, callback) {
        callback(null, 'public/images/users' )
    },
    filename : function (req, file, callback) {
        callback(null, `${Date.now()}_users_${path.extname(file.originalname)}`)
    }
});

const avatarUsers = multer({
    storage : storeImageUsers
});

module.exports = {
    avatarUsers
}
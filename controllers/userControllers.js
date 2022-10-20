const { comparePassword,hashPassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const { User } = require('../models')

class UserController{
    static registerUser(req, res) {
        const {
            email,
            full_name,
            username,
            password,
            profile_image_url,
            age,
            phone_number
        } = req.body;

        const hashedPassword = hashPassword(password);
        
        const createUser = {
            email,
            full_name,
            username,
            password: hashedPassword,
            profile_image_url,
            age,
            phone_number
        };
        console.log(hashedPassword, password);
        User.create(createUser)
        .then(result => {
            const response = {
                user: {
                    email: result.email,
                    full_name: result.full_name,
                    username: result.username,
                    profile_image_url: result.profile_image_url,
                    age: result.age,
                    phone_number: result.phone_number
                }
            };
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
}

module.exports = UserController;
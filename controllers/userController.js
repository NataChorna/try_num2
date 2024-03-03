const bcrypt = require('bcryptjs');
const UserModel = require('../models/user');

//register a new user
async function createUser(req, res) {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 8);
        
        const user = new UserModel({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User created successfully', userId: user._id });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//get the list of users
async function getAllUsers(req, res) {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//get user by id
async function getUserById(req, res) {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//to update uses info
async function updateUser(req, res) {
    try {
        const { username, email } = req.body;
        const user = await UserModel.findByIdAndUpdate(req.params.id, { username, email }, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//delete the user
async function deleteUser(req, res) {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//exxporting the controller functions
module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};


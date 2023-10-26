const userController = require('../routes/userController');
const User = require('../userModel');
const bcrypt = require('bcrypt');
const axios = require('axios');

//Mock external dependencies (axios library passed in as a whole - mock the entire lib)
jest.mock('axios');
User.findOne = jest.fn();
jest.mock('bcrypt');

describe('LoginForm', () => {

   //clears state, so each test is not affected by previous one.
    afterEach(() => {
    jest.clearAllMocks();
    });

    test('Login: succesfully logs the user in', async() => {
    //mock for request body
    const mockReq = {
        body: {
            username: 'testuser',
            password: 'testpassword'
        }
    };

    //mock for succesful login and response from backend
    const mockRes = {
        data: {
            success: true,
            message: 'Succesful login'
        }
    };

    axios.post.




    })


})


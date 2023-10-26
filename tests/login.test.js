const userController = require('../routes/userController');
const User = require('../userModel');
const bcrypt = require('bcrypt');
const axios = require('axios');

//Mock external dependencies (axios library passed in as a whole - mock the entire lib)
jest.mock('axios');
User.findOne = jest.fn(() => ({
    exec: jest.fn().mockResolvedValue({ username: 'testuser', password: 'hashedpass' })
}));
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
        status: jest.fn().mockReturnValue({
            json: jest.fn()
        }),
        data: {
            success: true,
            message: 'Successful login'
        }
    };

    const mockNext = jest.fn();

    bcrypt.compare.mockResolvedValue(true);

    await userController.login(mockReq, mockRes, mockNext);

    expect(User.findOne).toHaveBeenCalledWith({username: 'testuser'});
    expect(bcrypt.compare).toHaveBeenCalledWith('testpassword', 'hashedpass');
    expect(mockRes.status().json).toHaveBeenCalledWith(expect.objectContaining({message: 'Login successful'}));
    });
})

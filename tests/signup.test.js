const userController = require('../routes/userController');
const User = require('../userModel');
const bcrypt = require('bcrypt');

//Mocked mongoose and bcrypt methods (external dependencies need to be mocked)
//jest.fn - to verify a function is called; returns fake data that replaces the actual result that the function it's assigned to would give (like a placeholder to keep the test running w/o dependency)
User.findOne = jest.fn();
User.prototype.save = jest.fn();
bcrypt.hash = jest.fn();
bcrypt.compare = jest.fn();

//describe creates a test suite. Allows to group related tests as opposed to testing each piece of functionality in signup separately.
describe('userController', () => {

    //clears state, so each test is not affected by previous one.
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('signUp: successfully creates a user', async () => {
        //mock request body - create a fake req object to use for test (replace client functionality)
        const mockReq = {
            body: {
                username: 'testuser',
                password: 'testpass'
            },
            params: {}
        };

        //mock response object from express
        const mockRes = {
            locals: {},
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        //mock for next function that passes to next middleware
        const mockNext = jest.fn();

        //test for bcryp hash. whenever a password is succesfully hashed, it becomes 'hashedpass'
        bcrypt.hash.mockResolvedValue('hashedpass');
        
        // makes save functionality in controller automatically true so we don't have to test 
        User.prototype.save.mockResolvedValue(true);
        
        //call signUp function using mock params.
        await userController.signUp(mockReq, mockRes, mockNext);

        //now that we've mocked the controller, we run these tests checks/assertions
        expect(bcrypt.hash).toHaveBeenCalled();
        expect(User.prototype.save).toHaveBeenCalled();
        expect(mockRes.locals.newUser).toBeDefined();
    });
});

const userController = require('../routes/userController');
const User = require('../userModel');



test('returns a user if user exists', () => {
    const test = { username: 'test1', password: 'hello' };
    const res = userController.login(test);
    expect(res).toEqual(test);
})


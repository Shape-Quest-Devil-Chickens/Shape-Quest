const supertest = require('supertest')
const server = 'http://localhost:3000';
const request = supertest(server);


// describe('User Authentication Tests', () => {

//   describe('/signup - User Registration', () => {
//     describe('POST /SignUpForm', () => {
//         it('responds with 201 status after user registration',  () => {
//             const res =  request.post('/SignUpForm').send({
//                 username: 'testuser2',
//                 password: 'testpassword2'
//             });
//             expect(res.statusCode).toBe(201);
//         });
//     });
// },10000);

//   describe('login - User Authentication', () => {
//     describe('POST', () => {
//         it('responds with 200 status after user login',  () => {
//             const res =  request.post('/').send({
//                 username: 'testuser2',
//                 password: 'testpassword2'
//             });
//             expect(res.statusCode).toBe(200);
//         });
//     });
// });

// });
  
// const supertest = require('supertest');
// const server = 'http://localhost:3000';
// const request = supertest(server);

// describe('User Authentication Tests', () => {

//   describe('/signup - User Registration', () => {
//     describe('POST /SignUpForm', () => {
//       it('responds with 200 status after user registration', (done) => {
//         request.post('/SignUpForm')
//           .send({
//             username: 'testuser2',
//             password: 'testpassword2'
//           })
//           .end((err, res) => {
//             if (err) return done(err);
//             expect(res.statusCode).toBe(200);
//             done();
//           });
//       });
//     });
//   }, 10000);

//   describe('login - User Authentication', () => {
//     describe('POST', () => {
//       it('responds with 200 status after user login', (done) => {
//         request.post('/')
//           .send({
//             username: 'testuser2',
//             password: 'testpassword2'
//           })
//           .end((err, res) => {
//             if (err) return done(err);
//             expect(res.statusCode).toBe(200);
//             done();
//           });
//       });
//     });
//   });

// });

describe('Signup Endpot', () => {
    it('should create a new user', () => {
        const data = {username: 'testuser2',
                    password: 'testpassword2'}
    return request
        .post('/SignUpForm')
        .send(data)
        .expect('Content-Type', /application\/json/)
        .expect(201)
    })
},10000)
// 'use strict';
//
// const server = require('../server');
// const chai = require('chai');
// const http = require('chai-http');
// const expect = chai.expect;
//
// chai.use(http);
//
// describe('server module', function() {
//   before(done => {
//     server.listen(8080);
//     done();
//   });
//   after(done => {
//     server.close();
//     done();
//   });
//
//   describe('GET method', function() {
//     let resource;
//     before(done => {
//       chai.request(server)
//       .post('/api/car')
//       .send({name: 'lambo', type: 'super car'})
//       .end((err, res) => {
//         resource = JSON.parse(res.text.toString());
//         done();
//       });
//     });
//     after(done => {
//       chai.request(server)
//       .delete('/api/car')
//       .query({id: resource.id})
//       .end((err, res) => {
//         done();
//       });
//
//     });
//     describe('/api/car route', function() {
//       describe('a properly formatted request', function() {
//         it('should return a resource given proper id', done => {
//           chai.request(server)
//           .get(`/api/car?id=${resource.id}`)
//           .end((err, res) => {
//             let expected = JSON.parse(res.text.toString());
//             expect(resource).to.deep.equal(expected);
//             done();
//           });
//         });
//       });
//       describe('an improperly formatted request', function() {
//         it('should respond with 400 if not found', done => {
//           chai.request(server)
//           .get('/')
//           .end((err, res) => {
//             if (err) console.error(err);
//             expect(res.status).to.equal(400);
//             done();
//           });
//         });
//       });
//     });
//   });
//
//   describe('POST method', function() {
//     describe('/api/car route', function() {
//
//     });
//   });
//
//   describe('PUT method', function() {
//     describe('/api/car route', function() {
//
//     });
//   });
//
//   describe('DELETE method', function() {
//     describe('/api/car route', function() {
//
//     });
//   });
// });

/*
 * Swagger Petstore
 * This is a sample Petstore server.  You can find  out more about Swagger at  [http://swagger.io](http://swagger.io) or on  [irc.freenode.net, #swagger](http://swagger.io/irc/). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerPetstore);
  }
}(this, function(expect, SwaggerPetstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerPetstore.PetApi();
  });

  describe('(package)', function() {
    describe('PetApi', function() {
      describe('addPet', function() {
        it('should call addPet successfully', function(done) {
          // TODO: uncomment, update parameter values for addPet call
          /*
          var body = new SwaggerPetstore.Pet();
          body.id = "0";
          body.category = new SwaggerPetstore.Category();
          body.category.id = "0";
          body.category.name = "";
          body.name = "doggie";
          body.photoUrls = [""];
          body.tags = [new SwaggerPetstore.Tag()];
          body.tags[0].id = "0";
          body.tags[0].name = "";
          body.status = "available";

          instance.addPet(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deletePet', function() {
        it('should call deletePet successfully', function(done) {
          // TODO: uncomment, update parameter values for deletePet call
          /*
          var petId = 789;
          var opts = {};
          opts.apiKey = "apiKey_example";

          instance.deletePet(petId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('findPetsByStatus', function() {
        it('should call findPetsByStatus successfully', function(done) {
          // TODO: uncomment, update parameter values for findPetsByStatus call and complete the assertions
          /*
          var status = ["status_example"];

          instance.findPetsByStatus(status, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SwaggerPetstore.Pet);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.category).to.be.a(SwaggerPetstore.Category);
                    expect(data.category.id).to.be.a('number');
                expect(data.category.id).to.be("0");
                expect(data.category.name).to.be.a('string');
                expect(data.category.name).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("doggie");
              {
                let dataCtr = data.photoUrls;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              {
                let dataCtr = data.tags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SwaggerPetstore.Tag);
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be("0");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
  
                        }
              }
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("available");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('findPetsByTags', function() {
        it('should call findPetsByTags successfully', function(done) {
          // TODO: uncomment, update parameter values for findPetsByTags call and complete the assertions
          /*
          var tags = ["tags_example"];

          instance.findPetsByTags(tags, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SwaggerPetstore.Pet);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.category).to.be.a(SwaggerPetstore.Category);
                    expect(data.category.id).to.be.a('number');
                expect(data.category.id).to.be("0");
                expect(data.category.name).to.be.a('string');
                expect(data.category.name).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("doggie");
              {
                let dataCtr = data.photoUrls;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              {
                let dataCtr = data.tags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SwaggerPetstore.Tag);
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be("0");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
  
                        }
              }
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("available");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPetById', function() {
        it('should call getPetById successfully', function(done) {
          // TODO: uncomment, update parameter values for getPetById call and complete the assertions
          /*
          var petId = 789;

          instance.getPetById(petId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerPetstore.Pet);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.category).to.be.a(SwaggerPetstore.Category);
                  expect(data.category.id).to.be.a('number');
              expect(data.category.id).to.be("0");
              expect(data.category.name).to.be.a('string');
              expect(data.category.name).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("doggie");
            {
              let dataCtr = data.photoUrls;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SwaggerPetstore.Tag);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");

                      }
            }
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("available");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updatePet', function() {
        it('should call updatePet successfully', function(done) {
          // TODO: uncomment, update parameter values for updatePet call
          /*
          var body = new SwaggerPetstore.Pet();
          body.id = "0";
          body.category = new SwaggerPetstore.Category();
          body.category.id = "0";
          body.category.name = "";
          body.name = "doggie";
          body.photoUrls = [""];
          body.tags = [new SwaggerPetstore.Tag()];
          body.tags[0].id = "0";
          body.tags[0].name = "";
          body.status = "available";

          instance.updatePet(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updatePetWithForm', function() {
        it('should call updatePetWithForm successfully', function(done) {
          // TODO: uncomment, update parameter values for updatePetWithForm call
          /*
          var petId = 789;
          var opts = {};
          opts.name = "name_example";
          opts.status = "status_example";

          instance.updatePetWithForm(petId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('uploadFile', function() {
        it('should call uploadFile successfully', function(done) {
          // TODO: uncomment, update parameter values for uploadFile call and complete the assertions
          /*
          var petId = 789;
          var opts = {};
          opts.additionalMetadata = "additionalMetadata_example";
          opts.file = "/path/to/file.txt";

          instance.uploadFile(petId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerPetstore.ApiResponse);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));

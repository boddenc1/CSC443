/**
 * Created by Administrator on 12/3/2015.
 */
var supertest = require("supertest");
var should = require("should");
var mocha = require("mocha");

var server = supertest.agent("http://localhost:8080/api");

describe("root api call", function (){
    it("should return hello", function(done){
        // calling home page api
        server
            .get("/")
            .expect("Content-Type",/json/)
            .expect(200)
            .end(function(err,res){
                //HTTP status should be 200
                should.equal(res.error, false);
                done();
            });
    });
});

describe("add product", function(){
    it("add product", function(done){
        //calling home page
        server
            .put("/products")
            .send({name:"chainsaw", price:199.99})
            .expect("Content-Type",/json/)
            .expect(200)
            .end(function(err,res){
                should.equal(res.status,200);
                should.equal(res.error,false);
                done();
            });
    });
});

describe("get and update product", function(){
    var pid;
    it("get product id", function(done){
        server
            .get("/products")
            .expect("Content-Type",/json/)
            .expect(200)
            .end(function(err, res){
                result = JSON.parse(res.text);
                pid = result.items[0].id;
                done();
        });

    });
});

describe("get all products", function(){
    var result;
    it("it should return all products", function(done){
        server
            .get("/products")
            .expect("Content-Type",/json/)
            .expect(200)
            .end(function(err,res){
                should.equal(res.status,200);
                should.equal(res.error,false);
                result = JSON.parse(res.text);
                console.log(result);
                done();
            });
    });
    it("delete all products",function(done){
        result.items.forEach(function(item){
        server
            .del("/products/" + item.id)
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function(err,res){
                should.equal(res.status, 200);
                should.equal(res.error, false);
                done();
            });
        });
    });
});
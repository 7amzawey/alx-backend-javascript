const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");
const indexPage = require("../../controllers/app.controller.js");

describe("getIndexPage", function() {
  it("should return index page", function() {
    let req = {}
    // Have `res` have a send key with a function value because we use `res.send()` in our func
    let res = {
      send: sinon.spy()
    }

    indexPage.getIndexPage(req, res);
    // let's see what we get on res.send
    console.log(res.send);
  });
});

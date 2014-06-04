var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe("FizzBuzz", function(){

    var sut = FizzBuzz(10);
    // Subject Under Test (aka sut)
    // is the piece of code you are testing

    it("should return Fizz for number divisible by 3", function(){
        sut.should.equal("Fizz");
    });

    it("should return Buzz for number divisible by 5", function(){
        sut.should.equal("Buzz");
    });

});
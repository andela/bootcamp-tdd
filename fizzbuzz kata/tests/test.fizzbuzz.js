var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe("FizzBuzz", function(){

    var sut = new FizzBuzz();
    // Subject Under Test (aka sut)
    // is the piece of code you are testing

    it("should return Fizz for number divisible by 3", function(){
        sut.run(3).should.equal("Fizz");
    });

    it("should return Buzz for number divisible by 5", function(){
        sut.run(5).should.equal("Buzz");
    });

    it("should return number for number not divisible by 3 or 5 => 7", function(){
        sut.run(7).should.equal(7);
    });

    it("should return FizzBuzz for number divisible by 15", function(){
        sut.run(30).should.equal("FizzBuzz");
    });

});
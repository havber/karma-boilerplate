describe("The sum function", function() {
    it('should return correct sum', function() {
        assert.equal(sum(1,2), 3) ;
    });
});

describe('The result function', function() {
    it('should return the correct result', function() {
        assert.equal(result(4, 5), 20);
    });
});

describe('The divide function', function() {
    it('should return correct result', function(){
        assert.equal(divide(10, 2), 5);
    });
});

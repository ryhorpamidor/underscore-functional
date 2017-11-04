describe('negate function', function() {
    var negate = _f.negate;
    
    it('should return value with a boolean type', function() {
        var f = negate(function() { return 1; });
        expect(f()).to.be.false;
    });
    
    it('should return a value opposed to a returned value of passed predicate', function() {
        var f = negate(function() { return false; });
        expect(f()).to.be.true;
    });
});
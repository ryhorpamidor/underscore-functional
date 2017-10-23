describe('negate function', function() {
    var negate = _f.negate;
    
    it('should return a boolean type value', function() {
        var f = negate(function() { return 1; });
        expect(f()).to.be.false;
    });
    
    it('should return reverse value of initial predicate', function() {
        var f = negate(function() { return false; });
        expect(f()).to.be.true;
    });
});
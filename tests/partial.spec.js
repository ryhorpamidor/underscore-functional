describe('partial function', function() {
    var partial = _f.partial;
    
    it('should use additional arguments to pass them to an original function', function() {
        var cb = function(a, b) { return a + b; };
        var f = partial(cb, 1, 2);
        expect(f()).to.equal(3);
    });
    
    it('should allow to pass the rest of arguments to the partial function', function() {
        var cb = function(a, b, c) { return a + b + c; };
        var f = partial(cb, 1, 2);
        expect(f(7)).to.equal(10);
    });
    
    it('should omit arguments passed as library module and left them for the partial function', function() {
        var cb = function(a, b, c) { return a + b + c; };
        var f = partial(cb, 'par', _f, 'al');
        expect(f('ti')).to.equal('partial');
    });
});
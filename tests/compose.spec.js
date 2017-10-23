describe('compose function', function() {
    var compose = _f.compose;
    
    it('should compose single function', function() {
        var cb = function() { return 'test'; };
        var f = compose(cb);
        expect(f()).to.equal('test');
    });
    
    it('should compose multiple functions in reversed order', function() {
        var cb1 = function() { return 'se'; };
        var cb2 = function(res) { return 'po' + res; };
        var cb3 = function(res) { return 'com' + res; };
        var f = compose(cb3, cb2, cb1);
        expect(f()).to.equal('compose');
    });
    
    it('should pass argument to the first function', function() {
        var cb = function(n) { return n + 1; };
        var f = compose(cb);
        expect(f(1)).to.equal(2);
    });
});
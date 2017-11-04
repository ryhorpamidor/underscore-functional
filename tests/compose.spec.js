describe('compose function', function() {
    var compose = _f.compose;
    
    it('should make a composition from a single function', function() {
        var cb = function() { return 'test'; };
        var f = compose(cb);
        expect(f()).to.equal('test');
    });
    
    it('should make a composition from several functions in reverse order', function() {
        var cb1 = function() { return 'se'; };
        var cb2 = function(res) { return 'po' + res; };
        var cb3 = function(res) { return 'com' + res; };
        var f = compose(cb3, cb2, cb1);
        expect(f()).to.equal('compose');
    });
    
    it('should use argument to pass it to the first function in a composition', function() {
        var cb = function(n) { return n + 1; };
        var f = compose(cb);
        expect(f(1)).to.equal(2);
    });
});
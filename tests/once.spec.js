describe('once function', function() {
    var once = _f.once;
    
    it('should be executed at the first time', function() {
        var f = once(function() { return 3; });
        expect(f()).to.equal(3);
    });
    
    it('should be executed only once', function() {
        var counter = 0;
        var f = once(function() { counter++; });
        f();
        f();
        expect(counter).to.equal(1);
    });
    
    it('should cache first return result', function() {
        var f = once(function(n) { return n + 3; });
        var result1 = f(2);
        var result2 = f(3);
        expect(result1).to.equal(5);
        expect(result2).to.equal(5);
    });
});
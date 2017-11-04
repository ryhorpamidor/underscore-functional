describe('once function', function() {
    var once = _f.once;
    
    it('should execute callback once at the first time', function() {
        var f = once(function() { return 3; });
        expect(f()).to.equal(3);
    });
    
    it('should execute callback only once even there are further calls', function() {
        var counter = 0;
        var f = once(function() { counter++; });
        f();
        f();
        expect(counter).to.equal(1);
    });
    
    it('should cache result of the first callback execution', function() {
        var f = once(function(n) { return n + 3; });
        var result1 = f(2);
        var result2 = f(3);
        expect(result1).to.equal(5);
        expect(result2).to.equal(5);
    });
});
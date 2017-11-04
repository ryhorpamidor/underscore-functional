describe('before function', function() {
    var before = _f.before;
    
    it('should invoke callback before limit is reached', function() {
        var cb = sinon.spy();
        var f = before(2, cb);
        f();
        expect(cb.called).to.be.true;
    });
    
    it('should not invoke callback after limit was reached', function() {
        var cb = sinon.spy();
        var f = before(2, cb);
        f();
        f();
        expect(cb.calledTwice).to.be.false;
    });
    
    it('should always invoke callback with last argument after limit was reached', function() {
        var cb = function(n) { return n; };
        var f = before(2, cb);
        f(1);
        expect(f(2)).to.equal(1);
    });
});
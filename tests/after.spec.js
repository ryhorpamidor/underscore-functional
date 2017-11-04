describe('after function', function() {
    var after = _f.after;
    
    it('should not invoke callback until limit is reached', function() {
        var cb = sinon.spy();
        var f = after(2, cb);
        f();
        expect(cb.called).to.be.false;
    });
    
    it('should invoke callback when limit is reached', function() {
        var cb = sinon.spy();
        var f = after(2, cb);
        f();
        f();
        expect(cb.called).to.be.true;
    });
    
    it('it should invoke callback with specified arguments after limit was reached', function() {
        var cb = sinon.spy();
        var f = after(2, cb);
        f();
        f(1);
        expect(cb.lastCall.args[0]).to.equal(1);
        f(2);
        expect(cb.lastCall.args[0]).to.equal(2);
    });
});
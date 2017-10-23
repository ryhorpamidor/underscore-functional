describe('after function', function() {
    var after = _f.after;
    
    it('should not invoke callback until count reach', function() {
        var cb = sinon.spy();
        var f = after(2, cb);
        f();
        expect(cb.called).to.be.false;
    });
    
    it('should invoke callback when count reach', function() {
        var cb = sinon.spy();
        var f = after(2, cb);
        f();
        f();
        expect(cb.called).to.be.true;
    });
    
    it('after count reaches it should invoke callback with specified arguments', function() {
        var cb = sinon.spy();
        var f = after(2, cb);
        f();
        f(1);
        expect(cb.lastCall.args[0]).to.equal(1);
        f(2);
        expect(cb.lastCall.args[0]).to.equal(2);
    });
});
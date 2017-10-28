describe('delay function', function() {
    var defer = _f.defer;
    
    it('should not execute the callback immediately', function() {
        var cb = sinon.spy();
        var f = defer(cb);
        f();
        expect(cb.called).to.be.false;
    });

    it('should execute the callback at the next loop', function() {
        var cb = sinon.spy();
        var f = defer(cb);
        f();
        this.timeout(0);
        expect(cb.called).to.be.true;
    });

    it('should pass additional arguments to the callback', function() {
        var cb = sinon.spy();
        var f = defer(cb, 'test');
        f();
        this.timeout(0);
        expect(cb.calledWith('test')).to.be.true;
    });
});
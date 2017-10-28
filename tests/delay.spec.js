describe('delay function', function() {
    var delay = _f.delay;
    
    it('should not execute the callback until the delay time', function() {
        var cb = sinon.spy();
        var f = delay(cb, 1);
        f();
        expect(cb.called).to.be.false;
    });

    it('should execute the callback after the delay time', function() {
        var cb = sinon.spy();
        var f = delay(cb, 1);
        f();
        this.timeout(2);
        expect(cb.called).to.be.true;
    });

    it('should pass additional arguments to the callback', function() {
        var cb = sinon.spy();
        var f = delay(cb, 1, 'test');
        f();
        this.timeout(2);
        expect(cb.calledWith('test')).to.be.true;
    });
});
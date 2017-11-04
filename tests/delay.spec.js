describe('delay function', function() {
    var delay = _f.delay;
    
    it('should not execute a callback for the delay time', function(done) {
        var cb = sinon.spy();
        delay(cb, 10);
        setTimeout(function() {
            expect(cb.called).to.be.false;
            done();
        }, 5);
    });

    it('should execute a callback after the delay time', function(done) {
        var cb = sinon.spy();
        delay(cb, 10);
        setTimeout(function() {
            expect(cb.called).to.be.true;
            done();
        }, 15);
    });

    it('should use additional arguments to pass them to a callback', function(done) {
        var cb = sinon.spy();
        delay(cb, 10, 'test');
        setTimeout(function() {
            expect(cb.calledWith('test')).to.be.true;
            done();
        }, 15);
    });
});
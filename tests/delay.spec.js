describe('delay function', function() {
    var delay = _f.delay;
    
    it('should not execute the callback until the delay time', function(done) {
        var cb = sinon.spy();
        delay(cb, 10);
        setTimeout(function() {
            expect(cb.called).to.be.false;
            done();
        }, 5);
    });

    it('should execute the callback after the delay time', function(done) {
        var cb = sinon.spy();
        delay(cb, 10);
        setTimeout(function() {
            expect(cb.called).to.be.true;
            done();
        }, 15);
    });

    it('should pass additional arguments to the callback', function(done) {
        var cb = sinon.spy();
        delay(cb, 10, 'test');
        setTimeout(function() {
            expect(cb.calledWith('test')).to.be.true;
            done();
        }, 15);
    });
});
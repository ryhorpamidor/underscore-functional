describe('delay function', function() {
    var defer = _f.defer;
    
    it('should not execute the callback immediately', function() {
        var cb = sinon.spy();
        defer(cb);
        expect(cb.called).to.be.false;
    });

    it('should execute the callback at the next loop', function(done) {
        var cb = sinon.spy();
        defer(cb);
        setTimeout(function() {
            expect(cb.called).to.be.true;
            done();
        }, 0);
    });

    it('should pass additional arguments to the callback', function(done) {
        var cb = sinon.spy();
        defer(cb, 'test');
        setTimeout(function() {
            expect(cb.calledWith('test')).to.be.true;
            done();
        }, 0);
    });
});
describe('delay function', function() {
    var defer = _f.defer;
    
    it('should not execute a callback immediately', function() {
        var cb = sinon.spy();
        defer(cb);
        expect(cb.called).to.be.false;
    });

    it('should execute a callback at the next loop', function(done) {
        var cb = sinon.spy();
        defer(cb);
        setTimeout(function() {
            expect(cb.called).to.be.true;
            done();
        }, 0);
    });

    it('should use additional arguments to pass them to a callback', function(done) {
        var cb = sinon.spy();
        defer(cb, 'test');
        setTimeout(function() {
            expect(cb.calledWith('test')).to.be.true;
            done();
        }, 0);
    });
});
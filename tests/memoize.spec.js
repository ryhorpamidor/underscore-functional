describe('memoize function', function() {
    var memoize = _f.memoize;
    
    it('should really execute a callback once when it was invoked multiple times', function() {
        var cb = sinon.spy();
        var f = memoize(cb);
        f(1);
        f(1);
        expect(cb.calledOnce).to.be.true;
    });
    
    it('should return memoized result when is called next time', function() {
        var f = memoize(function(n) { return n + 1; });
        f(1);
        expect(f(1)).to.equal(2);
    });
    
    it('should use hash function to calculate memoization key', function() {
        var hashCb = function(n) { return n < 3 ? 'a' : 'b' };
        var cb = sinon.spy();
        var f = memoize(cb, hashCb);
        f(1);
        f(2);
        expect(cb.calledOnce).to.be.true;
        f(3);
        expect(cb.calledTwice).to.be.true;
    });
});
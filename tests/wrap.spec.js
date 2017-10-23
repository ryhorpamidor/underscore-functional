describe('wrap function', function() {
    var wrap = _f.wrap;
    
    it('should pass function as a callback argument', function() {
        var cb = sinon.spy();
        var f = wrap(cb, function(argCb) { argCb(); });
        
        f();
        expect(cb.called).to.be.true;
    });
    
    it('should invoke callback with specified arguments', function() {
        var cb = sinon.spy();
        var f = wrap(cb, function(argCb) { argCb('test'); });
        
        f();
        expect(cb.lastCall.args[0]).to.equal('test');
    });
});
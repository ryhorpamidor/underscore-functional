describe('debounce function', function() {
    var debounce = _f.debounce;

    var safeTimeout = 50;
    
    it('should be executed after waiting time', function(done) {
        var cb = sinon.spy();
        var f = debounce(cb, 10);
        f();
        setTimeout(function() {
            expect(cb.called).to.be.true;
            done();
        }, safeTimeout);
    });

    it('should increase waiting time with every new invocation', function(done) {
        var cb = sinon.spy();
        var f = debounce(cb, 10);
        f();
        setTimeout(f, 5);
        setTimeout(function() {
            expect(cb.called).to.be.false;
        }, 10);
        setTimeout(function() {
            expect(cb.called).to.be.true;
            done();
        }, safeTimeout);
    });

    it('should be executed once after waiting time', function(done) {
        var cb = sinon.spy();
        var f = debounce(cb, 10);
        f();
        setTimeout(function() {
            f();
            f();
            f();
        }, 5);
        setTimeout(function() {
            expect(cb.calledOnce).to.be.true;
            done();
        }, safeTimeout);
    });


    it('should be executed with latest arguments after waiting time', function(done) {
        var cb = sinon.spy();
        var f = debounce(cb, 10);
        f(1);
        setTimeout(function() {
            f(2);
            f(3);
            f(4);
        }, 5);
        setTimeout(function() {
            expect(cb.lastCall.args[0]).to.equal(4);
            done();
        }, safeTimeout);
    });

    it('should be executed immediately after invocation when the parameter marked as true', function(done) {
        var cb = sinon.spy();
        var f = debounce(cb, 10, true);
        f();
        expect(cb.called).to.be.true;
        setTimeout(function() {
            expect(cb.calledOnce).to.be.true;
            done();
        }, safeTimeout);
    });
});
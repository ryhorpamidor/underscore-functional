describe('throttle function', function() {
    var throttle = _f.throttle;
    
    it('should be executed immediately at the first time', function() {
        var cb = sinon.spy();
        var f = throttle(cb, 100);
        f();
        expect(cb.called).to.be.true;
    });

    it('should not be executed during waiting time', function(done) {
        var cb = sinon.spy();
        var f = throttle(cb, 100);
        f();
        setTimeout(function() {
            f();
            expect(cb.calledOnce).to.be.true;
            done();
        }, 50);
    });

    it('should be executed once after waiting time', function(done) {
        var cb = sinon.spy();
        var f = throttle(cb, 100);
        f();
        setTimeout(function() {
            f();
            f();
            f();
        }, 50);
        setTimeout(function() {
            expect(cb.calledTwice).to.be.true;
            done();
        }, 150);
    });

    it('should be executed after waiting time with last arguments', function(done) {
        var cb = sinon.spy();
        var f = throttle(cb, 100);
        f(1);
        setTimeout(function() {
            f(2);
            f(3);
            f(4);
        }, 50);
        setTimeout(function() {
            expect(cb.lastCall.args[0]).to.equal(4);
            done();
        }, 150);
    });

    it('should be executed only after waiting time with switched off leading option', function(done) {
        var cb = sinon.spy();
        var f = throttle(cb, 100, { leading: false });
        f();
        expect(cb.called).to.be.false;
        setTimeout(function() {
            expect(cb.called).to.be.true;
            done();
        }, 150);
    });

    it('should not be executed after waiting time with switched off trailing option', function(done) {
        var cb = sinon.spy();
        var f = throttle(cb, 100, { trailing: false });
        f();
        setTimeout(function() {
            f();
        }, 50);
        setTimeout(function() {
            expect(cb.calledOnce).to.be.true;
            done();
        }, 150);
    });
});
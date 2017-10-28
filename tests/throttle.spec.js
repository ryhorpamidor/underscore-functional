describe('throttle function', function() {
    var throttle = _f.throttle;
    
    it('should be executed immediately at the first time', function() {
        var cb = sinon.spy();
        var f = throttle(cb, 100);
        f();
        expect(cb.called).to.be.true;
    });

    it('should not be executed during waiting time', function() {
        var cb = sinon.spy();
        var f = throttle(cb, 100);
        f();
        this.timeout(50);
        f();
        expect(cb.calledOnce).to.be.true;
    });

    it('should be executed once after waiting time', function() {
        var cb = sinon.spy();
        var f = throttle(cb, 100);
        f();
        this.timeout(50);
        f();
        f();
        f();
        this.timeout(50);
        expect(cb.calledTwice).to.be.true;
    });

    it('should be executed after waiting time with last arguments', function() {
        var cb = sinon.spy();
        var f = throttle(cb, 100);
        f(1);
        this.timeout(50);
        f(2);
        f(3);
        f(4);
        this.timeout(50);
        expect(cb.lastCall.args[0]).to.equal(4);
    });

    it('should be executed only after waiting time with switched off leading option', function() {
        var cb = sinon.spy();
        var f = throttle(cb, 100, { leading: false });
        f();
        expect(cb.called).to.be.false;
        this.timeout(100);
        expect(cb.called).to.be.true;
    });

    it('should not be executed after waiting time with switched off trailing option', function() {
        var cb = sinon.spy();
        var f = throttle(cb, 100, { trailing: false });
        f();
        this.timeout(50);
        f();
        this.timeout(100);
        expect(cb.calledOnce).to.be.true;
    });
});
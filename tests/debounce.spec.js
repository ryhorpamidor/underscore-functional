describe('debounce function', function() {
    var debounce = _f.debounce;
    
    it('should be executed after waiting time', function() {
        var cb = sinon.spy();
        var f = debounce(cb, 100);
        f();
        this.timeout(100);
        expect(cb.called).to.be.true;
    });

    it('should increase waiting time while invoked', function() {
        var cb = sinon.spy();
        var f = debounce(cb, 100);
        f();
        this.timeout(50);
        f();
        this.timeout(50);
        expect(cb.called).to.be.false;
        this.timeout(50);
        expect(cb.called).to.be.true;
    });

    it('should be executed once after waiting time', function() {
        var cb = sinon.spy();
        var f = debounce(cb, 100);
        f();
        this.timeout(50);
        f();
        f();
        f();
        this.timeout(50);
        expect(cb.calledOnce).to.be.true;
    });

    it('should be executed after waiting time with last arguments', function() {
        var cb = sinon.spy();
        var f = debounce(cb, 100);
        f(1);
        this.timeout(50);
        f(2);
        f(3);
        f(4);
        this.timeout(50);
        expect(cb.lastCall.args[0]).to.equal(4);
    });

    it('should be executed immediately after invocation with specified parameter passed', function() {
        var cb = sinon.spy();
        var f = debounce(cb, 100, true);
        f();
        expect(cb.called).to.be.true;
        this.timeout(100);
        expect(cb.calledOnce).to.be.true;
    });
});
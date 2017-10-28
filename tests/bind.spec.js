describe('bind function', function() {
    var bind = _f.bind;
    
    it('should pass bound object as this', function() {
        var cb = function() { return this.name; };
        var object = { name: 'Jonn' };
        var f = bind(cb, object);
        expect(f()).to.equal('Jonn');
    });

    it('should pass additional arguments to the original function', function() {
        var cb = function(surname) { return this.name + ' ' + surname; };
        var object = { name: 'Jonn' };
        var f = bind(cb, object);
        expect(f('Doe')).to.equal('Jonn Doe');
    });
});
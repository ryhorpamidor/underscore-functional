describe('bind function', function() {
    var bind = _f.bind;
    
    it('should pass bound object as this', function() {
        var cb = function() { return this.name; };
        var object = { name: 'John' };
        var f = bind(cb, object);
        expect(f()).to.equal('John');
    });

    it('should pass additional arguments to the original function', function() {
        var cb = function(surname) { return this.name + ' ' + surname; };
        var object = { name: 'John' };
        var f = bind(cb, object, 'Doe');
        expect(f()).to.equal('John Doe');
    });
});
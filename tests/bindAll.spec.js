describe('bindAll function', function() {
    var bindAll = _f.bindAll;
    
    it('should bind object methods to this object', function() {
        var object = {
            name: 'John',
            surname: 'Doe',
            getName: function() { return this.name; }
        };
        bindAll(object, 'getName');
        expect(object.getName()).to.equal('Jonn');
    });

    it('should bind all object methods to this object', function() {
        var object = {
            name: 'John',
            surname: 'Doe',
            getName: function() { return this.name; },
            getSurname: function() { return this.surname; },
            getFullName: function() { return this.getName() + ' ' + this.getSurname(); }
        };
        bindAll(object, 'getFullName');
        expect(object.getName()).to.equal('Jonn Doe');
    });
});
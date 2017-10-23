(function(module) {
    
    function bind(func, obj) {
        var args = module._getArgumentsList(arguments);
        return function() {
            return func.apply(obj, args.slice(2));
        };
    }
    
    
    module.bind = bind;
    
})(this._f);
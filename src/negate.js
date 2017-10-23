(function(module) {
    
    function negate(func) {
        return function() {
            var args = module._getArgumentsList(arguments);
            return !func.apply(this, args);
        };
    }
    
    
    module.negate = negate;
    
})(this._f);
(function(module) {
    
    function wrap(func, wrapper) {
        return function() {
            return wrapper(func);
        };
    }
    
    
    module.wrap = wrap;
    
})(this._f);
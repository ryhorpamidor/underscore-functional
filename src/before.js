(function(module) {

    function before(count, func) {
        var localCount = 1;
        var result;
        
        return function() {
            if(localCount === count) return result;
            var args = module._getArgumentsList(arguments);
            localCount++;
            result = func.apply(this, args);
            return result;
        };
    }
    
    module.before = before;
    
})(this._f);
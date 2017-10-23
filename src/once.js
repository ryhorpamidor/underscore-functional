(function(module) {

    function once(func) {
        var isInvoked = false;
        var result;
        
        return function() {
            if (isInvoked) return result;
            var args = module._getArgumentsList(arguments);
            isInvoked = true;
            result = func.apply(this, args);
            return result;
        };
    }
    
    module.once = once;
    
})(this._f);
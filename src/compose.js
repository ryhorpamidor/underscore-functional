(function(module) {
    
    function compose() {
        var funcs = module._getArgumentsList(arguments);
        return function() {
            var args = module._getArgumentsList(arguments),
                length = funcs.length,
                currentFunc,
                currentValue;

            while (length--) {
                currentFunc = funcs[length];
                currentValue = currentFunc.apply(this, currentValue !== undefined ? [currentValue] : args);
            }
            return currentValue;
        };
    }
    
    
    module.compose = compose;
    
})(this._f);
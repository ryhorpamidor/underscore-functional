(function(module) {
    
    function delay(func, wait) {
        var args = module._getArgumentsList(arguments);
        var additionalArgs = args.slice(2);
        
        return function() {
            var self = this;
            setTimeout(function() {
                func.apply(self, additionalArgs);
            }, wait); 
        };
    }
    
    
    module.delay = delay;
    
})(this._f);
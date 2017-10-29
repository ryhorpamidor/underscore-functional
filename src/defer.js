(function(module) {
    
    function defer(func) {
        var args = module._getArgumentsList(arguments);
        var additionalArgs = args.slice(1);
        
        return function() {
            var self = this;
            setTimeout(function() {
                func.apply(self, additionalArgs);
            }, 0);
        };
    }
    
    
    module.defer = defer;
    
})(this._f);
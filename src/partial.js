(function(module) {
    
    function getMergedArgs(localArgs, args) {
        for (var i = 0; i < args.length; i++) {
            if (args[i] !== module) continue;
            args[i] = localArgs.shift();
        }
        return args.concat(localArgs);
    }
    

    function partial(func) {
        var args = module._getArgumentsList(arguments);
        return function() {
            var localArgs = module._getArgumentsList(arguments);
            var mergedArgs = getMergedArgs(localArgs, args.slice(1));
            return func.apply(this, mergedArgs);
        };
    }
    
    module.partial = partial;
    
})(this._f);
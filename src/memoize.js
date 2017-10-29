(function(module) {

    function memoize(func, hashFunc) {
        var cachedResults = {};

        return function() {
            var args = module._getArgumentsList(arguments);
            var cacheKey = hashFunc ? hashFunc.apply(this, args) : args.join('');

            if (!(cacheKey in cachedResults)) {
                cachedResults[cacheKey] = func.apply(this, args);
            }
            return cachedResults[cacheKey];
        };
    }
    
    module.memoize = memoize;
    
})(this._f);
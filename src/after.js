(function(module) {

    function after(count, func) {
        var isInvoked = false;
        var localCount = 0;
        
        return function() {
            var args = module._getArgumentsList(arguments);
            if (isInvoked) return func.apply(this, args);
            if (++localCount < count) return;
            isInvoked = true;
            return func.apply(this, args);
        };
    }
    
    module.after = after;
    
})(this._f);
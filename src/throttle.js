(function(module) {

    function throttle(func, wait, options) {
        var timerId = 0;
        var shouldInvoke = false;
        var clearTimer = function() { clearTimeout(timerId); };
        var allowedLeading = !(options && options.leading === false);
        var allowedTrailing = !(options && options.trailing === false);
        var args = [];

        return function() {
            args = module._getArgumentsList(arguments);
            if (timerId) {
                shouldInvoke = true;
                return;
            }

            if (allowedLeading) func.apply(this, args);
            timerId = setTimeout(function() {
                clearTimer();
                if (shouldInvoke || !allowedLeading) {
                    if (allowedTrailing) func.apply(this, args);
                    shouldInvoke = false;
                }
            }, wait);
        };
    }

    module.throttle = throttle;

})(this._f);
(function(module) {

    function throttle(func, wait, options) {
        var timerId = 0;
        var shouldInvoke = false;
        var clearTimer = function() { clearTimeout(timerId); };

        return function() {
            var args = module._getArgumentsList(arguments);
            if (timerId) {
                shouldInvoke = true;
                return;
            }

            if (options && options.leading === false) func.apply(this, args);
            timerId = setTimeout(function() {
                clearTimer();
                if (shouldInvoke) {
                    if (options && options.trailing === false) func.apply(this, args);
                    shouldInvoke = false;
                }
            }, wait);
        };
    }

    module.throttle = throttle;

})(this._f);
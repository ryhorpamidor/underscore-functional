(function(module) {

    function _debounce(func, wait) {
        var timerId = 0;
        var args = [];
        var clearTimer = function() { clearTimeout(timerId); };

        return function() {
            args = module._getArgumentsList(arguments);

            clearTimer();
            timerId = setTimeout(function() {
                func.apply(this, args);
                clearTimer();
            }, wait);
        }
    }

    function _debounceTrailing(func, wait) {
        var timerId = 0;
        var args = [];
        var clearTimer = function() {
            clearTimeout(timerId);
            timerId = 0;
        };

        return function() {
            args = module._getArgumentsList(arguments);

            if(!timerId) func.apply(this, args);
            clearTimer();
            timerId = setTimeout(clearTimer, wait);
        };
    }

    function debounce(func, wait, immediate) {
        return immediate ? _debounceTrailing(func, wait) : _debounce(func, wait);
    }


    module.debounce = debounce;

})(this._f);
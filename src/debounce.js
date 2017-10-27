(function(module) {

    function _debounce(func, wait) {
        var timerId = 0;
        var clearTimer = function() { clearTimeout(timerId); };

        return function() {
            clearTimer();
            timerId = setTimeout(function() {
                func();
                clearTimer();
            }, wait);
        }
    }

    function _debounceTrailing(func, wait) {
        var timerId = 0;
        var clearTimer = function() {
            clearTimeout(timerId);
            timerId = 0;
        };

        return function() {
            if(!timerId) func();
            clearTimer();
            timerId = setTimeout(clearTimer, wait);
        };
    }

    function debounce(func, wait, immediate) {
        return immediate ? _debounceTrailing(func, wait) : _debounce(func, wait);
    }


    module.debounce = debounce;

})(this._f);
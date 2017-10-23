(function(module) {
    
    function getArgumentsList(args) {
        return [].slice.call(args);
    }
    
    function noop() {}
    
    Object.defineProperties(module, {
        '_getArgumentsList': { enumerable: false, value: getArgumentsList },
        '_noop': { enumerable: false, value: noop }
    });
    
})(this._f);
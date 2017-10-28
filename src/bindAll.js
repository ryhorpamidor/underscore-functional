(function(module) {
    
    function bindAll(object) {
        var methodNames = module._getArgumentsList(arguments).slice();

        for (var i = 0, ln = methodNames.length, methodName, originalMethod; i < ln; i++) {
            methodName = methodNames[i];
            originalMethod = object[methodName];

            if(!originalMethod) continue;
            object[methodName] = originalMethod.bind(object);
        }
    }
    
    
    module.bindAll = bindAll;
    
})(this._f);
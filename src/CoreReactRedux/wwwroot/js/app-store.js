/*
This is to demo how modules are linked.
You can drag here more definitions from app.tsx, and ceate additional modules like this.
 */
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports"], function (require, exports) {
    "use strict";
    exports.message = 'initial message';
});
//# sourceMappingURL=app-store.js.map
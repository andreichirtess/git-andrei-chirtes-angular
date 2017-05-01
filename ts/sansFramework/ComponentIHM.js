System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM;
    return {
        setters: [],
        execute: function () {
            ComponentIHM = class ComponentIHM {
                constructor(NF, root) {
                    this.NF = NF;
                    this.root = root;
                }
                dispose() {
                    this.root.parentNode.removeChild(this.root);
                    this.root.innerHTML = "";
                }
            };
            exports_1("ComponentIHM", ComponentIHM);
        }
    };
});
//# sourceMappingURL=ComponentIHM.js.map
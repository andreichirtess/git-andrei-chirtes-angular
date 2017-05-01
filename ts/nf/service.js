System.register(["@angular/core", "./nf"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, NF, nf, cbSaveData, choses, ListeChosesService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NF_1) {
                NF = NF_1;
            }
        ],
        execute: function () {
            nf = new NF.ListeChoses();
            cbSaveData = () => {
                let serialization = [];
                nf.choses.forEach(c => serialization.push({ texte: c.texte, fait: c.fait, date: c.date.toString() }));
                localStorage.setItem("todoListMiage", JSON.stringify(serialization));
            };
            nf.on("update", (nf, eventName, eventValue) => {
                if (eventValue.append) {
                    let chose = eventValue.append;
                    chose.on("update", cbSaveData);
                }
                if (eventValue.remove) {
                    let chose = eventValue.remove;
                    chose.off("update", cbSaveData);
                }
                cbSaveData();
            });
            // Ajouter les choses déjà présentes dans le localStorage
            choses = JSON.parse(localStorage.getItem("todoListMiage") || "[]");
            choses.forEach(c => {
                nf.Ajouter(c.texte, c.fait, new Date(c.date));
            });
            ListeChosesService = class ListeChosesService {
                static getData() {
                    return Promise.resolve(nf);
                }
            };
            ListeChosesService = __decorate([
                core_1.Injectable()
            ], ListeChosesService);
            exports_1("ListeChosesService", ListeChosesService);
        }
    };
});
//# sourceMappingURL=service.js.map
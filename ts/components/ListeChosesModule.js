System.register(["@angular/core", "@angular/forms", "@angular/common", "@NoyauFonctionnel/service", "./Chose", "./ListeChoses"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, common_1, service_1, Chose_1, ListeChoses_1, ListeChosesModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (Chose_1_1) {
                Chose_1 = Chose_1_1;
            },
            function (ListeChoses_1_1) {
                ListeChoses_1 = ListeChoses_1_1;
            }
        ],
        execute: function () {
            ListeChosesModule = class ListeChosesModule {
            };
            ListeChosesModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    exports: [ListeChoses_1.ListeChoses],
                    declarations: [ListeChoses_1.ListeChoses, Chose_1.ItemChose],
                    providers: [service_1.ListeChosesService],
                })
            ], ListeChosesModule);
            exports_1("ListeChosesModule", ListeChosesModule);
        }
    };
});
//# sourceMappingURL=ListeChosesModule.js.map
System.register(["@angular/core", "@angular/platform-browser", "./components/ListeChosesModule", "@angular/platform-browser-dynamic", "./sansFramework/listeChoses_IHM", "@NoyauFonctionnel/service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, ListeChosesModule_1, platform_browser_dynamic_1, listeChoses_IHM_1, service_1, PromesseDocumentPret, CompDemoM2M, AppModule, platform;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (ListeChosesModule_1_1) {
                ListeChosesModule_1 = ListeChosesModule_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (listeChoses_IHM_1_1) {
                listeChoses_IHM_1 = listeChoses_IHM_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            PromesseDocumentPret = new Promise((resolve) => {
                if (document.readyState === "complete") {
                    resolve();
                }
                else {
                    document.body.onload = () => resolve();
                }
            });
            CompDemoM2M = class CompDemoM2M {
            };
            CompDemoM2M = __decorate([
                core_1.Component({
                    selector: "demo-m2m",
                    template: `<liste-choses titre="LA Liste"></liste-choses>`
                })
            ], CompDemoM2M);
            AppModule = class AppModule {
                constructor() {
                    // Juste pour bien lier la version sans framework
                    let Pall = Promise.all([service_1.ListeChosesService.getData(), PromesseDocumentPret]);
                    Pall.then(([nf]) => {
                        new listeChoses_IHM_1.ListeChosesIHM(nf, "#sansFramework");
                    });
                }
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, ListeChosesModule_1.ListeChosesModule],
                    declarations: [CompDemoM2M],
                    bootstrap: [CompDemoM2M]
                }),
                __metadata("design:paramtypes", [])
            ], AppModule);
            exports_1("AppModule", AppModule);
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(AppModule);
        }
    };
});
//# sourceMappingURL=main.js.map
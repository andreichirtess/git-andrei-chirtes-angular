import { Component, NgModule }      from "@angular/core";
import { BrowserModule }            from "@angular/platform-browser";
import { ListeChosesModule }        from "./components/ListeChosesModule";
import { platformBrowserDynamic }   from "@angular/platform-browser-dynamic";
import { ListeChosesIHM     } from "./sansFramework/listeChoses_IHM";
import { ListeChosesService } from "@NoyauFonctionnel/service";


let PromesseDocumentPret = new Promise( (resolve) => {
    if(document.readyState === "complete") {
        resolve();
    } else {
        document.body.onload = () => resolve();
    }
});


@Component({
    selector		: "demo-m2m",
    template		: `<liste-choses titre="LA Liste"></liste-choses>`
})
class CompDemoM2M {}

@NgModule({
    imports:      [ BrowserModule, ListeChosesModule ],
    declarations: [ CompDemoM2M ],
    bootstrap:    [ CompDemoM2M ]
})
export class AppModule {
    constructor() {
        // Juste pour bien lier la version sans framework
        let Pall = Promise.all([ListeChosesService.getData(), PromesseDocumentPret]);
        Pall.then( ([nf]) => {
            new ListeChosesIHM(nf, "#sansFramework");
        });
    }
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

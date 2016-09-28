import { Injectable } from "@angular/core";
import * as NF from "./nf";

// Load from localStorage
type SerialisationChoses = Array<{texte: string, fait: boolean, date: string}>;
let nf      = new NF.ListeChoses();
let choses : SerialisationChoses = <SerialisationChoses>JSON.parse( localStorage.getItem("todoListMiage") || "[]" );
choses.forEach( c => {
    nf.Ajouter( c.texte, c.fait, new Date(c.date) );
});
nf.on("update", () => ListeChosesService.saveData() );

// Define service
@Injectable()
export class ListeChosesService {
    static getData	() : Promise<NF.ListeChoses> {
        return Promise.resolve( nf );
    }
    static saveData() : void {
        let serialization : SerialisationChoses = [];
        nf.choses.forEach( c => serialization.push( {texte: c.texte, fait: c.fait, date: c.date.toString()} ));
        localStorage.setItem("todoListMiage", JSON.stringify(serialization) );
    }
};


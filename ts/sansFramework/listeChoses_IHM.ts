import {Chose, ListeChoses, EventListeChoses} 			from "@NoyauFonctionnel/nf";
import {ComponentIHM} 	from "./ComponentIHM";
import {ChoseIHM}		from "./Chose_IHM";

const htmlTemplate = `
	<section>
		<form action="#/">
			<input placeholder="Que faire?">
		</form>
		<ul></ul>
	</section>
`;

// Classe à compléter...
export class ListeChosesIHM extends ComponentIHM {
	ul	    : HTMLUListElement;
	form    : HTMLFormElement;
	input   : HTMLInputElement;
    mapNfIhm: Map<Chose, ChoseIHM> = new Map();
	constructor(public NF: ListeChoses, rootSelector) {
		super(NF, document.querySelector( rootSelector ));
        this.root.innerHTML = htmlTemplate;

        // Get references and initialize from NF
        this.ul	    = <HTMLUListElement>this.root.querySelector( `ul` );
        this.form   = <HTMLFormElement >this.root.querySelector( `form` );
        this.input  = <HTMLInputElement>this.root.querySelector( `input` );
        this.initalizeFromNF();

        // HTML -> NF
        this.form.addEventListener("submit", evt => {
            evt.preventDefault();
            this.NF.Ajouter( this.input.value );
            this.input.value = "";
        });

        // NF -> HTML
        this.NF.on( "update", (nf, eN, eV) => this.updateFromNF(eV) );
    }
    initalizeFromNF() {
        this.NF.choses.forEach( c => this.updateFromNF( {append: c} ) );
    }
    updateFromNF(evt: EventListeChoses) {
        if(evt.append) {
            let chose   = evt.append;
            let li      = document.createElement( "li" );
            this.ul.appendChild( li );
            this.mapNfIhm.set(chose, new ChoseIHM(chose, li));
        }
        if(evt.remove) {
            let chose       = evt.remove;
            let choseIHM    = this.mapNfIhm.get(chose);
            if(choseIHM) {choseIHM.dispose();}
            this.mapNfIhm.delete(chose);
        }
    }
}


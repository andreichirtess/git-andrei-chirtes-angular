import {Chose} 			from "@NoyauFonctionnel/nf";
import {ComponentIHM} 	from "./ComponentIHM";

const htmlTemplate = `
	<section class="chose">
		<input type="checkbox"/>
		<input type="text"    />
		<input type="button" value="Delete"/>
	</section>
`;

// Classe à compléter...
export class ChoseIHM extends ComponentIHM {
	inputFait	: HTMLInputElement;
	inputText	: HTMLInputElement;
	buttonDelete: HTMLInputElement;
	constructor(public NF: Chose, public root: Element) {
		super(NF, root);
		this.root.innerHTML = htmlTemplate;

		// Get references and initialize from NF
        this.inputFait	    = <HTMLInputElement>this.root.querySelector( `input[type="checkbox"]` );
        this.inputText	    = <HTMLInputElement>this.root.querySelector( `input[type="text"]` );
        this.buttonDelete   = <HTMLInputElement>this.root.querySelector( `input[type="button"]` );
        this.updateFromNF();

        // HTML -> NF
        this.inputFait   .addEventListener("change", () => this.NF.Fait (this.inputFait.checked) );
        this.inputText   .addEventListener("keyup" , () => this.NF.Texte(this.inputText.value  ) );
        this.buttonDelete.addEventListener("click" , () => this.NF.dispose() );

        // NF -> HTML
        this.NF.on( "update", () => this.updateFromNF() );
	}
	updateFromNF() {
        this.inputFait.checked  = this.NF.fait;
        this.inputText.value    = this.NF.texte;
    }
}

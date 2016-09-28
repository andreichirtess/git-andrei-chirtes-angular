import { Component, Input } from "@angular/core";
import {Chose} from "@NoyauFonctionnel/nf";

const htmlTemplate = `
	<div class="view">
		<input 	class			= "toggle" 
				type			= "checkbox" 
				/>
		<label 	class="texte"></label>
		<button class="destroy"></button>
	</div>
	<form>
		<input class="edit"/>
	</form>
`;

@Component({
  selector		: "item-chose",
  template		: htmlTemplate
})
export class ItemChose {
	@Input() 	nf		: Chose;
};


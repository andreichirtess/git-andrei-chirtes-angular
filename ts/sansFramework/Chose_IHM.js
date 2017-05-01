System.register(["./ComponentIHM"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM_1, htmlTemplate, ChoseIHM;
    return {
        setters: [
            function (ComponentIHM_1_1) {
                ComponentIHM_1 = ComponentIHM_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
	<section class="chose">
		<input type="checkbox"/>
		<input type="text"    />
		<input type="button" value="Delete"/>
	</section>
`;
            // Classe à compléter...
            ChoseIHM = class ChoseIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, root) {
                    super(NF, root);
                    this.NF = NF;
                    this.root = root;
                    this.root.innerHTML = htmlTemplate;
                    // Get references and initialize from NF
                    this.inputFait = this.root.querySelector(`input[type="checkbox"]`);
                    this.inputText = this.root.querySelector(`input[type="text"]`);
                    this.buttonDelete = this.root.querySelector(`input[type="button"]`);
                    this.updateFromNF();
                    // HTML -> NF
                    this.inputFait.addEventListener("change", () => this.NF.Fait(this.inputFait.checked));
                    this.inputText.addEventListener("keyup", () => this.NF.Texte(this.inputText.value));
                    this.buttonDelete.addEventListener("click", () => this.NF.dispose());
                    // NF -> HTML
                    this.NF.on("update", () => this.updateFromNF());
                }
                updateFromNF() {
                    this.inputFait.checked = this.NF.fait;
                    this.inputText.value = this.NF.texte;
                }
            };
            exports_1("ChoseIHM", ChoseIHM);
        }
    };
});
//# sourceMappingURL=Chose_IHM.js.map
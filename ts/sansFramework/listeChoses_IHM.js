System.register(["./ComponentIHM", "./Chose_IHM"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM_1, Chose_IHM_1, htmlTemplate, ListeChosesIHM;
    return {
        setters: [
            function (ComponentIHM_1_1) {
                ComponentIHM_1 = ComponentIHM_1_1;
            },
            function (Chose_IHM_1_1) {
                Chose_IHM_1 = Chose_IHM_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
	<section>
		<form action="#/">
			<input placeholder="Que faire?">
		</form>
		<ul></ul>
	</section>
`;
            // Classe à compléter...
            ListeChosesIHM = class ListeChosesIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, rootSelector) {
                    super(NF, document.querySelector(rootSelector));
                    this.NF = NF;
                    this.mapNfIhm = new Map();
                    this.root.innerHTML = htmlTemplate;
                    // Get references and initialize from NF
                    this.ul = this.root.querySelector(`ul`);
                    this.form = this.root.querySelector(`form`);
                    this.input = this.root.querySelector(`input`);
                    this.initalizeFromNF();
                    // HTML -> NF
                    this.form.addEventListener("submit", evt => {
                        evt.preventDefault();
                        this.NF.Ajouter(this.input.value);
                        this.input.value = "";
                    });
                    // NF -> HTML
                    this.NF.on("update", (nf, eN, eV) => this.updateFromNF(eV));
                }
                initalizeFromNF() {
                    this.NF.choses.forEach(c => this.updateFromNF({ append: c }));
                }
                updateFromNF(evt) {
                    if (evt.append) {
                        let chose = evt.append;
                        let li = document.createElement("li");
                        this.ul.appendChild(li);
                        this.mapNfIhm.set(chose, new Chose_IHM_1.ChoseIHM(chose, li));
                    }
                    if (evt.remove) {
                        let chose = evt.remove;
                        let choseIHM = this.mapNfIhm.get(chose);
                        if (choseIHM) {
                            choseIHM.dispose();
                        }
                        this.mapNfIhm.delete(chose);
                    }
                }
            };
            exports_1("ListeChosesIHM", ListeChosesIHM);
        }
    };
});
//# sourceMappingURL=listeChoses_IHM.js.map
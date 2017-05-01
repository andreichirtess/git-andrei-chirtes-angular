System.register(["@angular/core", "@NoyauFonctionnel/service"], function (exports_1, context_1) {
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
    var core_1, service_1, htmlTemplate, ListeChoses;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
	<section *ngIf="nf" class="todoapp">
		<header class="header">
			<h1>{{titre}}</h1>
			<form (submit)="add(newTodo.value); newTodo.value='';">
				<input  class       = "new-todo" 
				        placeholder = "Que faire?" 
				        #newTodo 
				        autofocus>
			</form>
		</header>
		<section class="main">
			<input  class="toggle-all" 
			        type="checkbox"
			        (ngModelChange)="ToutCocherDecocher()"
			        [ngModel]="ToutEstFait()"
			        />
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
			    <li *ngFor              = "let chose of getChoses()" 
			        [class.completed]   = "chose.fait"
			        [class.editing]     = "compo.editing"
			        >
			        <item-chose [nf]="chose" #compo>
			            <input class="toggle"/>
			         </item-chose>
                </li>
            </ul>
		</section>
        <footer class="footer">
            <span class="todo-count"><strong></strong>{{getRestantes()}} restantes</span>
            <ul class="filters">
                <li>
                    <a class="filterAll"
                        (click)="currentFilter=filterAll"
                        [class.selected]="currentFilter===filterAll">Tous</a>
                </li>
                <li>
                    <a class="filterUnDone"
                        (click)="currentFilter=filterUnDone"
                        [class.selected]="currentFilter===filterUnDone">Actifs</a>
                </li>
                <li>
                    <a class="filterDone"
                        (click)="currentFilter=filterDone"
                        [class.selected]="currentFilter===filterDone">Complétés</a>
                </li>
            </ul>
            <button class="clear-completed" (click)="DeleteCompleted()">Supprimer cochées</button>
        </footer>
	</section>
	<!--
    <hr/>	
    <section>
	    <section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>
	</section> 
    -->
`;
            ListeChoses = class ListeChoses {
                constructor(serviceListe) {
                    this.serviceListe = serviceListe;
                    this.choses = [];
                    this.filterAll = () => true;
                    this.filterDone = (c) => c.fait;
                    this.filterUnDone = (c) => !c.fait;
                    this.currentFilter = this.filterAll;
                }
                ;
                ngOnInit() {
                    service_1.ListeChosesService.getData().then((nf) => {
                        this.nf = nf;
                        this.choses = nf.choses;
                    });
                }
                getChoses() {
                    return this.choses.filter(this.currentFilter);
                }
                add(str) {
                    this.nf.Ajouter(str);
                }
                ToutEstFait() {
                    return this.nf.choses.reduce((acc, c) => acc && c.fait, true);
                }
                ToutCocherDecocher() {
                    let cocher = !this.ToutEstFait();
                    this.nf.choses.forEach(c => c.Fait(cocher));
                }
                DeleteCompleted() {
                    this.choses.filter(this.filterDone).forEach(c => c.dispose());
                }
                getRestantes() {
                    return this.choses.filter(this.filterUnDone).length;
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], ListeChoses.prototype, "titre", void 0);
            ListeChoses = __decorate([
                core_1.Component({
                    selector: "liste-choses",
                    template: htmlTemplate
                }),
                __metadata("design:paramtypes", [service_1.ListeChosesService])
            ], ListeChoses);
            exports_1("ListeChoses", ListeChoses);
        }
    };
});
//# sourceMappingURL=ListeChoses.js.map
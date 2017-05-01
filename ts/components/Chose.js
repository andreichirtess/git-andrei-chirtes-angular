System.register(["@angular/core", "@NoyauFonctionnel/nf"], function (exports_1, context_1) {
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
    var core_1, nf_1, htmlTemplate, ItemChose;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nf_1_1) {
                nf_1 = nf_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
	<div class="view">
		<input 	class			= "toggle" 
				type			= "checkbox" 
				name			= "fait"
				[ngModel]       = "nf.fait" 
			    (ngModelChange) = "nf.Fait(inputFait.checked)"
			    #inputFait 
			    />
		<label 	class="texte"
				(dblclick)="Edit()"><a target="_blank" *ngIf="nf.url" href="{{nf.texte}}">{{nf.texte}}</a>
				<span *ngIf="!nf.url">{{nf.texte}}</span> </label>

				<div *ngIf="nf.media" class="media">					
					<img *ngIf="nf.image" class="imgdefault" (click)="clicksize($event)" src="{{nf.texte}}" alt="" />

					<div *ngIf="nf.video"  class="video_box" (click)="videosize($event)">
					
					  <video *ngIf="nf.video" class="videoplayer">
					  	<source src="{{nf.texte}}">
					  	Your browser does not support HTML5 video.
						</video>
					</div>	

					<div *ngIf="nf.audio" class="audio_wrapper">
						<audio controls>
  							<source src="{{nf.texte}}">
						</audio>
					</div> 
									
				</div>
		<button class="destroy" (click)="dispose()"></button>
	</div>
	<form *ngIf="editing" (submit)="setText(newText.value)">
		<input 	class		= "edit"
				[ngModel]   = "nf.texte"
				(blur)      = "setText(newText.value)"
				name        = "textField"
				#newText/>
	</form>
`;
            ItemChose = class ItemChose {
                constructor() {
                    this.editing = false;
                }
                dispose() {
                    this.nf.dispose();
                }
                Edit() {
                    this.editing = true; //passage en mode édition qd on dbclick sur label
                    requestAnimationFrame(() => {
                        this.newTextInput.nativeElement.focus();
                    });
                }
                setText(str) {
                    this.editing = false;
                    this.nf.Texte(str);
                }
                clicksize(event) {
                    //  event.target.classList.add('class3'); // To ADD
                    // event.target.classList.remove('class1'); // To Remove
                    // event.target.classList.contains('class2'); // To check
                    // event.target.classList.toggle('class4'); // To toggle
                    event.target.classList.toggle("imgbig");
                }
                videosize(event) {
                    if (event.target.hasAttribute("controls")) {
                        event.target.removeAttribute("controls", "");
                        event.target.classList.remove("videobig");
                        event.target.pause();
                        console.log("event target: " + event.target);
                    }
                    else {
                        event.target.setAttribute("controls", "");
                        event.target.classList.add("videobig");
                        event.target.play();
                    }
                }
            };
            __decorate([
                core_1.Input("nf"),
                __metadata("design:type", nf_1.Chose)
            ], ItemChose.prototype, "nf", void 0);
            __decorate([
                core_1.ViewChild("newText"),
                __metadata("design:type", core_1.ElementRef)
            ], ItemChose.prototype, "newTextInput", void 0);
            ItemChose = __decorate([
                core_1.Component({
                    selector: "item-chose",
                    template: htmlTemplate
                })
            ], ItemChose);
            exports_1("ItemChose", ItemChose);
        }
    };
});
//# sourceMappingURL=Chose.js.map
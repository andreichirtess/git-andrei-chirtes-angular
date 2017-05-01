import { Component, Input, ViewChild, ElementRef} from "@angular/core";
import {Chose} from "@NoyauFonctionnel/nf";

const htmlTemplate = `
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

@Component({
  selector		: "item-chose",
  template		: htmlTemplate
})
export class ItemChose {
    @Input ("nf" ) nf   : Chose;
	@ViewChild("newText") newTextInput : ElementRef;
	editing			    : boolean = false;

	dispose() {
	    this.nf.dispose();
    }
    Edit() {
	    this.editing = true;//passage en mode édition qd on dbclick sur label
        requestAnimationFrame( () => {
            this.newTextInput.nativeElement.focus();
        });
    }
    setText(str:string) {
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
    	if(event.target.hasAttribute("controls")) {
    		event.target.removeAttribute("controls","");
    		event.target.classList.remove("videobig");
    		event.target.pause();
    		console.log("event target: " + event.target);
    	} else {
    		event.target.setAttribute("controls","");
    		event.target.classList.add("videobig");
    		event.target.play();
    	}
    }
}

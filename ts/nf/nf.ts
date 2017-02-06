type NF_CallBack = (nf: NF, eventName: string, value: any) => void;
class NF {
	private cbList : Map<string, NF_CallBack[]>;
	constructor() {
		this.cbList = new Map<string, NF_CallBack[]>();

	}
	emit(eventName: string, value: any) : this {
		if( this.cbList.has(eventName) ) {
			let array = this.cbList.get(eventName);
			array.forEach( cb => cb(this, eventName, value) );
		}
		return this;
	}
	on(eventName: string, cb: NF_CallBack) : this {
		if( this.cbList.has(eventName) ) {
			let array : NF_CallBack[] = this.cbList.get(eventName);
			array.push(cb);
		} else {
			this.cbList.set(eventName, [cb]);
		}
		return this;
	}
	off(eventName: string, cb: NF_CallBack) : this {
		if( this.cbList.has(eventName) ) {
			let array = this.cbList.get(eventName);
			array.splice( array.indexOf(cb), 1);
		}
		return this;
	}
}

export type EventChose = {
	fait?	: boolean,
	texte?	: string
};
export type NF_Chose_CallBack = (nf: Chose, eventName: string, value: EventChose) => void;
export class Chose extends NF {
	readonly liste		: ListeChoses;
	readonly date 		: Date;
	texte				: string;
	fait 				: boolean;
	constructor	(texte: string, liste: ListeChoses, fait: boolean = false, date: Date = null) {
		super();
		this.texte  = texte;
		this.date	= date || new Date( Date.now() );
		this.fait	= fait || false;
		this.liste	= liste;
	}
	dispose		() {
		this.liste.Retirer(this);
	}
	Texte(texte: string) {
		this.texte = texte;
		this.emit("update", {texte: texte});
		return this;
	}
	Fait(fait: boolean) {
		this.fait = fait;
		this.emit("update", {fait: fait});
		return this;
	}
	on(eventName: "update", cb: NF_Chose_CallBack) : this {
		return super.on(eventName, cb);
	}
	off(eventName: "update", cb: NF_Chose_CallBack) : this {
		return super.off(eventName, cb);
	}
}

export type EventListeChoses = {append?: Chose, remove?:Chose};
export type NF_ListeChose_CallBack = (nf: ListeChoses, eventName: string, value: EventListeChoses) => void;
export class ListeChoses extends NF {
	choses 	: Chose[];
	constructor	() {
		super();
		this.choses = [];
	}
	Ajouter		(texte: string, fait: boolean = false, date: Date = null) : this {
		let chose = new Chose(texte, this, fait, date);
		this.choses.push( chose );
		this.emit("update", {append: chose});
		return this;
	}
	Retirer		(chose: Chose) : this {
		this.choses.splice( this.choses.indexOf(chose), 1 );
		this.emit("update", {remove: chose});
		return this;
	}
	on(eventName: "update", cb: NF_ListeChose_CallBack) : this {
		return super.on(eventName, cb);
	}
	off(eventName: "update", cb: NF_ListeChose_CallBack) : this {
		return super.off(eventName, cb);
	}
}

export class ComponentIHM {
    root: Element;
    NF  : any;
    constructor(NF, root: Element) {
        this.NF   = NF;
        this.root = root;
    }
    dispose() {
        this.root.parentNode.removeChild( this.root );
        this.root.innerHTML = "";
    }
}

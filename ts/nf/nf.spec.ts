import {ListeChoses, Chose, EventListeChoses} from "@NoyauFonctionnel/nf";

describe("Tests d'initialisation d'une liste", () => {
    let Liste : ListeChoses = new ListeChoses();
    it(`Liste doit être vide`, () => expect(Liste.choses.length === 0).toBe(true));

});


describe("Tests ajout d'une chose", () => {
    let Liste : ListeChoses = new ListeChoses();
    let eventListe : EventListeChoses, txt = "un truc à faire";
    Liste.on("update", (NF: ListeChoses, eventName: string, event: EventListeChoses) => {
        eventListe = event;
    } );

    Liste.Ajouter( txt );
    it("Liste contient un élément", () => expect(Liste.choses.length).toEqual(1));
    it(`Le texte du premier élément de Liste vaut "${txt}"`, () => expect(Liste.choses[0].texte === txt).toBe(true));
    it(`La liste a bien prévenue de l'ajout`, () => expect(eventListe && eventListe.append === Liste.choses[0]).toBe(true));
});

describe("Tests retrait de la seconde chose dans une liste de trois choses", () => {
    let Liste : ListeChoses = new ListeChoses();
    let eventListe : EventListeChoses, txt = "un truc à faire";
    Liste.on("update", (NF: ListeChoses, eventName: string, event: EventListeChoses) => {
        eventListe = event;
    } );

    Liste.Ajouter( "1:"+txt ).Ajouter( "2:"+txt ).Ajouter( "3:"+txt );
    let élémentRetiré = Liste.choses[1];
    Liste.Retirer( élémentRetiré );
    it("Liste contient 2 élément", () => expect(Liste.choses.length).toEqual(2));
    it(`Le texte du premier élément de Liste vaut "1:${txt}"`, () => expect(Liste.choses[0].texte === "1:"+txt).toBe(true));
    it(`Le texte du premier élément de Liste vaut "3:${txt}"`, () => expect(Liste.choses[1].texte === "3:"+txt).toBe(true));
    it(`La liste a bien prévenue du retrait du second élément`, () => expect(eventListe && eventListe.remove).toBe(élémentRetiré));
});

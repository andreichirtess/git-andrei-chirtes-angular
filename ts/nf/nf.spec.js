System.register(["@NoyauFonctionnel/nf"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var nf_1;
    return {
        setters: [
            function (nf_1_1) {
                nf_1 = nf_1_1;
            }
        ],
        execute: function () {
            describe("Tests d'initialisation d'une liste", () => {
                let Liste = new nf_1.ListeChoses();
                it(`Liste doit être vide`, () => expect(Liste.choses.length === 0).toBe(true));
            });
            describe("Tests ajout d'une chose", () => {
                let Liste = new nf_1.ListeChoses();
                let eventListe, txt = "un truc à faire";
                Liste.on("update", (NF, eventName, event) => {
                    eventListe = event;
                });
                Liste.Ajouter(txt);
                it("Liste contient un élément", () => expect(Liste.choses.length).toEqual(1));
                it(`Le texte du premier élément de Liste vaut "${txt}"`, () => expect(Liste.choses[0].texte === txt).toBe(true));
                it(`La liste a bien prévenue de l'ajout`, () => expect(eventListe && eventListe.append === Liste.choses[0]).toBe(true));
            });
            describe("Tests retrait de la seconde chose dans une liste de trois choses", () => {
                let Liste = new nf_1.ListeChoses();
                let eventListe, txt = "un truc à faire";
                Liste.on("update", (NF, eventName, event) => {
                    eventListe = event;
                });
                Liste.Ajouter("1:" + txt).Ajouter("2:" + txt).Ajouter("3:" + txt);
                let élémentRetiré = Liste.choses[1];
                Liste.Retirer(élémentRetiré);
                it("Liste contient 2 élément", () => expect(Liste.choses.length).toEqual(2));
                it(`Le texte du premier élément de Liste vaut "1:${txt}"`, () => expect(Liste.choses[0].texte === "1:" + txt).toBe(true));
                it(`Le texte du premier élément de Liste vaut "3:${txt}"`, () => expect(Liste.choses[1].texte === "3:" + txt).toBe(true));
                it(`La liste a bien prévenue du retrait du second élément`, () => expect(eventListe && eventListe.remove).toBe(élémentRetiré));
            });
        }
    };
});
//# sourceMappingURL=nf.spec.js.map
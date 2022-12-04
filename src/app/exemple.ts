import { Component } from "@angular/core";

@Component({
  selector: "app-exemple-component",
  templateUrl: "exemple.html",
  styleUrls: ["exemple.scss"]
})
export class ExempleComponent {
  messages = [
    {
      emetteur: "Bob",
      sujet: "ça va ?",
      contenu: "Hello ! Comment vas tu ? A bientôt"
    },
    {
      emetteur: "Jean-Louis",
      sujet: "Retard",
      contenu: "Bonsoir, vous êtes en retard."
    }
  ];
}

import { Component, OnInit } from "@angular/core";

import { GameService } from "../services/game.service";
import { Player } from "../services/player";
import { RouterExtensions } from "nativescript-angular/router";
import { confirm } from "tns-core-modules/ui/dialogs"

@Component({
    selector: "ns-add",
    moduleId: module.id,
    templateUrl: "./add.component.html",
})
export class AddComponent implements OnInit {
    private players: Player[];
    private marks: number[];

    constructor(private gameService: GameService, private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        this.players = this.gameService.getPlayers();
        this.marks = Array<number>(this.players.length);
    }

    marksValid(): boolean {
        for (const mark of this.marks) {
            if (isNaN(mark) || mark.toString() === "") {
                return false;
            }
        }
        return true;
    }

    addNewRound(): void {
        if (this.marksValid()) {
            confirm({ title: "Marks are right ?", message: "", cancelButtonText: "NO", okButtonText: "YES" }).then(confirm => {
                if (confirm) {
                    this.gameService.addRound(this.marks)
                    this.routerExtensions.navigate(["/board"], { clearHistory: true });
                }
            });
        }
    }

    cancel(): void {
        this.routerExtensions.navigate(["/board"], { clearHistory: true });
    }
}
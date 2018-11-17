import { Component, OnInit } from "@angular/core";

import { GameService } from "../services/game.service";
import { Player } from "../services/player";
import { RouterExtensions } from "nativescript-angular/router";
import { confirm } from "tns-core-modules/ui/dialogs"

@Component({
    selector: "ns-board",
    moduleId: module.id,
    templateUrl: "./board.component.html"
})
export class BoardComponent implements OnInit {
    private players: Array<Player>
    private rounds: Array<Array<number>>;

    constructor(private gameService: GameService, private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        this.players = [];
        this.rounds = [];

        this.players = this.gameService.getPlayers();
        this.rounds = this.gameService.getRounds();
    }

    lastRound(round: number[]): boolean {
        return round == this.rounds[this.rounds.length - 1];
    }

    coLeader(): boolean {
        const leaders = this.players.filter(p => p.leader);
        return leaders.length > 1;
    }

    finish(): void {
        confirm({ title: "Game is hover ?", message: "", cancelButtonText: "NO", okButtonText: "YES" }).then(confirm => {
            if (confirm) {
                this.routerExtensions.navigate(["/finish"], { clearHistory: true });
            }
        });
    }

}

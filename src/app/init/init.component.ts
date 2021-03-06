import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Player } from "../services/player";
import { GameService } from "../services/game.service";
import { confirm } from "tns-core-modules/ui/dialogs"

@Component({
    selector: "ns-init",
    moduleId: module.id,
    templateUrl: "./init.component.html",
})
export class InitComponent implements OnInit {
    private players: Array<Player>

    constructor(private gameService: GameService, private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        this.players = [];
        this.players = this.gameService.getPlayers();
    }

    setPlayers(): void {
        this.gameService.setPlayers(this.players);
    }

    addPlayer(): void {
        this.players.push(new Player(""));
    }

    removePlayer(i: number): void {
        this.players.splice(i, 1);
    }

    playersValid(): boolean {
        for (const player of this.players) {
            if (player.name === "") {
                return false;
            }
        }
        return true;
    }

    launchGame(): void {
        if (this.playersValid()) {
            confirm({ title: "Launch the game ?", cancelButtonText: "NO", okButtonText: "YES" }).then(confirm => {
                if (confirm) {
                    this.gameService.setPlayers(this.players);
                    this.routerExtensions.navigate(["/board"], { clearHistory: true });
                }
            });
        }
    }
}


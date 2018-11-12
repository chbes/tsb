import { Component, OnInit } from "@angular/core";

import { GameService } from "../services/game.service";
import { Player } from "../services/player";

@Component({
    selector: "ns-finish",
    moduleId: module.id,
    templateUrl: "./finish.component.html",
})
export class FinishComponent implements OnInit {
    private players: Player[];

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.players = this.gameService.getPlayers();
        this.players.sort(function (a, b) {
            return a.lastScore() - b.lastScore();
        });
    }

    getOrderScores(): number[] {
        let scores = [];
        this.players.forEach(player => {
            scores.push(player.lastScore());
        });
        scores.sort(function (a, b) {
            return a - b;
        });

        scores = scores.filter(function (el, i, self) {
            return i == self.indexOf(el);
        });

        return scores;
    }

    getPosition(player: Player): number {
        const scores = this.getOrderScores();
        return scores.indexOf(player.lastScore()) + 1;
    }

}
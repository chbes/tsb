import { Injectable } from "@angular/core";
import { Player } from "./player";
import { Game } from "./game";

@Injectable()
export class GameService {

    private mockNamePlayer = ["Guy", "Anita", "Papadopoulos", "Yo"];

    // private game = new Game(this.mockNamePlayer);
    private game = new Game(["",""]);

    getPlayers(): Player[] {
        return this.game.players;
    }

    setPlayers(players: Player[]): void {
        this.game.players = players;
    }

    getRounds(): number[][] {
        let rounds = [];
        const nbPlayer = this.game.players.length;
        const nbRound = this.game.players[0].scores.length;

        for (let i = 0; i < nbRound; i++) {
            let round = [];
            for (let j = 0; j < nbPlayer; j++) {
                round.push(this.game.players[j].scores[i]);
            }
            rounds.push(round);
        }

        return rounds;
    }

    addRound(marks: number[]) {
        this.game.addRound(marks);
    }

}

import { Player } from "./player";

export class Game {
    players: Array<Player>;

    constructor(names: Array<string>) {
        this.players = [];

        names.forEach(name => {
            this.players.push(new Player(name));
        });

        this.whoIsStarter();
    }

    addRound(marks: number[]) {
        for (const i in marks) {
            this.players[i].addMark(Number(marks[i]));
        }

        this.resetLeaderAndStarter()
        this.whoIsLeader();
        this.whoIsStarter();
    }

    private resetLeaderAndStarter() {
        this.players.forEach(p => {
            p.leader = false;
            p.starter = false;
        });
    }

    private whoIsLeader() {
        let lastScores = [];
        for (const player of this.players) {
            lastScores.push(player.lastScore())
        }
        const leaderScore = Math.min(...lastScores);

        for (const player of this.players) {
            if (player.lastScore() === leaderScore) {
                player.leader = true;
            }
        }
    }

    private whoIsStarter() {
        let lastScores = [];
        let starters = [];

        for (const player of this.players) {
            lastScores.push(player.lastMark())
        }
        const loserScore = Math.max(...lastScores);

        for (const player of this.players) {
            if (player.lastMark() === loserScore) {
                starters.push(player);
            }
        }

        // If many potential starters, choose one by random
        const i = Math.floor(Math.random() * starters.length)
        starters[i].starter = true;
    }

}

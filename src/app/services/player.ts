export class Player {
    name: string;
    leader: boolean;
    starter: boolean;
    scores: number[]; // List of each player's score at each round (score = sum all points won by the player) 
    marks: number[]; // List of each player's points won at each round

    constructor(name: string) {
        this.name = name;
        this.leader = false;
        this.starter = false;
        this.scores = [];
        this.marks = [];
    }

    addMark(mark: number): void {
        mark = Number(mark);
        this.marks.push(mark);
        this.scores.push(mark + this.lastScore())
    }

    lastScore(): number {
        return this.scores.length > 0 ? this.scores[this.scores.length - 1]: 0;
    }
    
    lastMark(): number {
        return this.marks.length > 0 ? this.marks[this.marks.length - 1]: 0;
    }
}

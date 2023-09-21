class GameRound {
    constructor(level) {
        this.level = level;
        this.allMemoryFramesShown = false;

        switch (level) {
            case 1:
                this.reactionMode = "words";
                this.memoryMode = "letters";
                break;
            case 2:
                this.reactionMode = "images";
                this.memoryMode = "positions";
                break;
            case 3:
                this.reactionMode = "words";
                this.memoryMode = "positions";
                break;
            case 4:
                this.reactionMode = "images";
                this.memoryMode = "letters";
                break;
            default:
                let reactionModes = ["words", "images"];
                let memoryModes = ["letters", "positions"];
                this.reactionMode = reactionModes[Math.floor(Math.random()*reactionModes.length)];
                this.memoryMode = memoryModes[Math.floor(Math.random()*memoryModes.length)];
        }
        this.memoryAmount = Math.round(level / 2) + 2;
        if (this.memoryAmount > 7) this.memoryAmount = 7;
        console.log(`Game modes for this round: ${this.reactionMode} and ${this.memoryMode}`);
        console.log(`Items to be memorized this round: ${this.memoryAmount}`);
    }


    Next() {
        
    }

    #createFrame() {
        if (this.reactionMode == "words") {}
        else if (this.reactionMode == "images") {}
    }

    #createMemoryItem() {

    }
}
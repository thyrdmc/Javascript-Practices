class MusicPlayer{
    constructor(soundtracks){
        this.soundtracks = soundtracks;
        this.index = 0;
    }

    getMusic(){
        return this.soundtracks[this.index];
    }

    next(){
        if(this.index+1 < this.soundtracks.length){
            this.index += 1;
        }
        else{
            this.index = 0;
        }
    }

    prev(){
        if(this.index+1 != 0){
            this.index -= 1;
        }
        else{
            this.index = this.soundtracks.length - 1;
        }
    }
}
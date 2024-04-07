class Soundtrack{
    constructor(title, singer, image, file){
        this.title = title;
        this.singer = singer;
        this.image = image;
        this.file = file;
    }

    getName(){
        return this.title + " " + this.singer;
    }
}


const soundtracks = [
    new Soundtrack("Bosver", "Nilufer", "1.jpeg", "1.mp3"),
    new Soundtrack("Bu da gecer sevgilim", "Yalin", "2.jpeg", "2.mp3"),
    new Soundtrack("Aramizda ucurumlar", "Suat Suna", "3.jpeg", "3.mp3")

];
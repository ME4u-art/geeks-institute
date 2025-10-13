                    /*Daily challenge : Creating Objects*/

class Video{
    constructo(title, uploader, time ){
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
    }
}

const video1 = new Video("Surfing in Morocco", "Bad Boy", 300);
video1.watch();

const video2 = new Video("JavaScript Basics", "Mosh", 600);
video2.watch();

const videoData = [
    { title: "Surfing in Morocco", uploader: "Bad Boy", time: 300 },
  { title: "Learn JavaScript", uploader: "Mosh", time: 600 },
  { title: "Freediving 101", uploader: "DeepBlue", time: 450 },
  { title: "Cooking Tajine", uploader: "ChefYoussef", time: 200 },
  { title: "React Crash Course", uploader: "Traversy", time: 900 }
]

const videos = videoData.map(video => new Video(video.title, video.uploader, video.time))
videos.forEach(video => video.watch());

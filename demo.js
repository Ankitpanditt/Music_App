console.log("Welcome to my music app")
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName : "Tujh bin", filePath :"song/1.mp3", coverPath:"logo3.jpg" },
    {songName : "Tujh bin", filePath :"1.mp3", coverPath:"logo3.jpg" },
    {songName : "Tujh bin", filePath :"1.mp3", coverPath:"logo3.jpg" },
    {songName : "Tujh bin", filePath :"1.mp3", coverPath:"logo3.jpg" },
    {songName : "Tujh bin", filePath :"1.mp3", coverPath:"logo3.jpg" },
]
    masterplay.addEventListener('click', ()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
        }
    })
myProgressBar.addEventListener('timeupdate', ()=>{
         console.log('timeupdate');
})
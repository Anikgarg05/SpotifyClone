console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('song/1.mp3'); 
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"No Lie - Sean Paul, Dua Lipa", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"Elyanna - Callin'U(Tamally Maak)", filePath: "song/2.mp3", coverPath:"cover/2.jpg"},
    {songName:"Tesher - Punjabi Kompa", filePath: "song/3.mp3", coverPath:"cover/3.jpg"},
    {songName:"Water - Diljit Dosanjh", filePath: "song/4.mp3", coverPath:"cover/4.jpg"},
    {songName:"Karan Aujla, OneRepublic, Ikky - Tell Me", filePath: "song/5.mp3", coverPath:"cover/5.jpg"},
    {songName:"Dheere Dheere - Anirudh Ravichander, Shilpa Rao", filePath: "song/6.mp3", coverPath:"cover/6.jpg"},
    {songName:"Manasilaayo - Anirudh Ravichander", filePath: "song/7.mp3", coverPath:"cover/7.jpg"},
    {songName:"Mawa Enthaina - Thaman S", filePath: "song/8.mp3", coverPath:"cover/8.jpg"},
    {songName:"Naina - Diljit Dosanjh, Badshah", filePath: "song/9.mp3", coverPath:"cover/9.jpg"},
    {songName:"Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez)", filePath: "song/10.mp3", coverPath:"cover/10.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName; 
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndexindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`song/${songIndex+1}.mp3`;
        masterSongNameinnerText=songs[songIndex].songName;  
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
    songIndex += 1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
    songIndex -= 1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongNameinnerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
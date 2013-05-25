var is_playing = false;

function play_index(button, id){
    var audio = songs[id];

    if (is_playing)
    {
        audio.pause();
        button.src = "img/play.png";
    }
    else
    {
        audio.play();
        button.src = "img/pause.png";
    }
    
    is_playing = !is_playing;
}


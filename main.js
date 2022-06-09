//botoes

let playBtn = document.querySelector("#PlayBtn");
let StopBtn = document.querySelector('#StopBtn');
let VolumeBtn = document.querySelector('#VolumeBtn');

playBtn.onclick = function play() {
    wavesurfer.playPause();
    if(playBtn.src.includes('play.png')) {
        playBtn.src = 'pause.png';
    } else {
        playBtn.src = 'play.png';
    }
}

StopBtn.onclick = function stop() {
    wavesurfer.stop();
    if(playBtn.src = 'pause.png') {
        playBtn.src = 'play.png';
    }
}

VolumeBtn.onclick = function volume() {
    wavesurfer.toggleMute();
    if(VolumeBtn.src.includes('som.png')) {
        VolumeBtn.src = 'mute.png';
    } else {
        VolumeBtn.src = 'som.png';
    }
}

//botoes

// waveform

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'rgb(214, 91, 43)',
    progressColor: 'orange',
    barWidth: 2,
    height: 100,
    width: 100,
});

wavesurfer.on('finish', function() {
    playBtn.src = 'play.png';
    wavesurfer.stop();
})

wavesurfer.load('Kanye West - Praise God.mp3');

// waveform
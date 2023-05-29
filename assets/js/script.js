{
  var playlist = []
  cols = document.getElementsByClassName('indexcolname');

  for(const e of cols){
    let extension = e.innerText.split('.').slice(-1)[0];

    switch (extension) {
      case 'mp4':
        playlist.push( {videoUrl: e.innerText});
        break;
      case 'jpg':
        playlist.push( {videoUrl: e.innerText});
        break;
      case 'png':
        playlist.push( {videoUrl: e.innerText});
        break;
      default:
        break;
    }
  }
  /*
  var playlist = [
    {
      videoUrl: "mediaShare/"//,
      //audioUrl: "audio1.mp3"
    },
    {
      videoUrl: "video2.mp4"//,
      //audioUrl: "audio2.mp3"
    },
    {
      videoUrl: "video3.mp4"//,
      //audioUrl: "audio3.mp3"
    }
  ];
*/
  var currentVideoIndex = 0;
  var videoPlayer = document.getElementById('videoPlayer');

  function playNextVideo() {
    if (currentVideoIndex >= playlist.length) {
      currentVideoIndex = 0; // Reiniciar la lista de reproducción
    }

    var currentVideo = playlist[currentVideoIndex];
    videoPlayer.innerHTML = '<video autoplay><source src="/pantallas/mediaShare/' + currentVideo.videoUrl + '" type="video/mp4"></video>';
    //videoPlayer.innerHTML += '<audio autoplay><source src="' + currentVideo.audioUrl + '" type="audio/mp3"></audio>';

    currentVideoIndex++;
  }

  // Reproducir el primer video al cargar la página
  playNextVideo();

}
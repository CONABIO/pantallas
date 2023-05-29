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

  var currentVideoIndex = 0;
  var videoPlayer = document.getElementById('videoPlayer');

  function playNextVideo() {
    if (currentVideoIndex >= playlist.length) {
      currentVideoIndex = 0; // Reiniciar la lista de reproducción
    }

    var currentVideo = playlist[currentVideoIndex];
    videoPlayer.innerHTML = '<video autoplay><source src="/pantallas/mediaShare/' + currentVideo.videoUrl + '" type="video/mp4"></video>';

    currentVideoIndex++;
    let video = document.querySelector("video");
    video.addEventListener("ended", (event) => {playNextVideo()});

  }

  // Reproducir el primer video al cargar la página
  playNextVideo();
}
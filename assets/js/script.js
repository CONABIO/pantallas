{
  fileNames = []
  cols = document.getElementsByClassName('indexcolname');
  cols
  for(const e of cols){
    let extension = e.innerText.split('.').slice(-1)[0];
    
    switch (extension) {
      case 'mp4':
        fileNames.push(e.innerText);
        break;
      case 'jpg':
        fileNames.push(e.innerText);
        break;
      case 'png':
        fileNames.push(e.innerText);
        break;
      default:
        break;
    }
  }

}
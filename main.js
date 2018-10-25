const url = "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&api_key=e941da3543824deaddb92310754b2a2d&format=json&limit=5&artist=brunomars"
const artistSong ="https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&api_key=e941da3543824deaddb92310754b2a2d&format=json&limit=10&artist=brunomars"

const traer =()=> {
  fetch(url)
    .then(res => res.json())
    .then(datos => {
      console.log(datos);
    })
}
traer();

const listar =()=> {
  fetch(artistSong)
    .then(res => res.json())
    .then(datos => {
      console.log(datos);
    })
}
listar();
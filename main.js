const container = document.getElementById('track-list');

const albumArtist = [
  'BIGBANG',
  'DUA LIPA',
  'GOT7',
  'BRUNO MARS',
  'CARDI B',
  'CAMILA CABELLO',
  'BEYONCE',
  'ED SHEERAN',
  'POST MALONE'
]

let orderByLikeCount = (trackA, trackB) => trackB.likeCount - trackA.likeCount;
const songs = [];
const showArtist = () => {
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e941da3543824deaddb92310754b2a2d&format=json&limit=10&artist')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
};
showArtist(); 

const showSongs = ()=>{
  const show = data.artists.artist;
  show.map((artist)=>{
    console.log(artist);
    
  })
  container.innerHTML += 
  `<div id="${showSongs}" class="col-6">${showSongs}</div>
      <div class="col">
      <div class="carousel-item active"></div>
    </div>
  `;
}

// // fetch("https://api.spotify.com/v1/albums?2b2c43aba8a44bec89b9e7bbf9e1b090").then((response) => response.json())
// //   .then((data) => {
// //     console.log(data);

// //     const date = data.results[9];

// //     data.results.map((arr) => {
// //       const box = document.querySelector(".api1");
// //       const html = `
// //              <div class="slide images1">
// //              <img src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" alt="" />
// //               </div>
// //              `;
// //       box.insertAdjacentHTML("beforeend", html);
// //     });

// //   });


// // function App(){
// //     const CLIENT_ID = "2b2c43aba8a44bec89b9e7bbf9e1b090"
// //     const REDIRECT_URI = "http://online:5000"
// //     const AUTH_ENDPOINT = "https://account.spotify.com/authorize"
// //     const RESPONSE_TYPE = "token"

// //     return(
// //         <div className="App">
// //             <header className="App-header">
// //                 <h1>Spotify</h1>
// //                 <a href={'${AUTH_ENDPOINT}?client_id=${CLIENT_ID}$redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}'}>Login to Spotify</a>
// //             </header>
// //         </div>
// //     );
// // }

// // export default App;

// const APIController = (function () {
//     const clientId = '';
//     const clientSecret = '';

//     const _getToken = async () => {
//         const result = await fetch('https://account.spotify.com/ai/token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-from-urlcoded',
//                 'Authorization': 'Basic' + btoa(clientId + ':' + clientSecret)
//             },
//             body: 'grant_type=client_credentials'
//         });
//         const data = await result.json();
//         return data.access_token;
//     }

//     const _getGenres = async (token) => {
//         const result = await fetch('https://api.spotify.com/v1/browser/categories?locale=sv_IN', {
//             method: 'GET',
//             header: { 'Authorization': 'Brearer' + token }
//         });
//         const data = await result.json();
//         return data.categories.items;

//     }
//     const _getPlaylistByGenre = async (token, genreID) => {
//         const limit = 10;
//         const result = await fetch('https://api.spotify.com/v1/browser/categories/${genreID}/playlist?limit=${limit}', {
//             method: 'GET',
//             header: { 'Authorization': 'Brearer' + token }
//         });
//         const data = await result.json();
//         return data.playlists.items;
//     }

//     const _getTrack = async (token, trackEndPoint) => {
//         const limit = 10;
//         const result = await fetch('${trackEndPoint}?limit=${limit}', {
//             method: 'GET',
//             header: { 'Authorization': 'Brearer' + token }
//         });
//         const data = await result.json();
//         return data.items;
//     }

//     const _getTrack = async (token, trackEndPoint) => {

//         const result = await fetch('${trackEndPoint}', {
//             method: 'GET',
//             header: { 'Authorization': 'Brearer' + token }
//         });
//         const data = await result.json();
//         return data;
//     }
//     return {
//         getToken() {
//             return _getToken();
//         },
//         getGenres(token) {
//             return _getGenres(token);
//         },
//         getPlaylistByGenres(Token, genresId) {
//             return _getPlaylistByGenres(token, genresId);
//         },
//         getTracks(token, trackEndPoint) {
//             return _getTracks(token, tracksEndPoint);
//         },
//         getTrack(token, trackEndPoint) {
//             return _getTrack(token, tracksEndPoint);
//         }
//     }

// })();


// //UI Module

// const UIController = (function () {

//     const DOMElements = {
//         selectGenre: '#select_genre',
//         selectPlaylist: '#select_playlist',
//         buttonSubmit: '#btn_submit',
//         divSongDetail: '#song-detail',
//         hfToken: '#hidden_token',
//         divSonglist: '.song-list'
//     }


//     //public method

//     return {
//         //method to get input fields
//         inputFileld() {
//             return {
//                 genre: document.querySelector(DOMElements.selectGenre),
//                 playlisty: document.querySelector(DOMElements.selectPlaylist),
//                 songs: document.querySelector(DOMElements.divSonglist),
//                 submit: document.querySelector(DOMElements.buttonSubmit),
//                 songDetail: document.querySelector(DOMElements.divSongDetail)
//             }
//         },

//         // need methods to create select list option
//         createGenre(text, value) {
//             const html = '<option value="${value}">${text}</option>';
//             document.querySelector(DOMElements.selectGenre).insertAdjacentHTML('beforeend', html);
//         },
//         createPlaylist(text, value) {
//             const htm1 = '<option value="${value}">${text}</option>';
//             document.querySelector(DOMElements.selectPlaylist).insertAdjacentHTML('beforeend', html);
//         },
//         // need method to create a track list group item
//         createTrack(id, name) {
//             const html = '< a href = "#" class="list-group-item list-group-item-action list-group-item-light" id = "${id}" > ${ name }</a >';
//             document.querySelector(DOMElements.divSonglist).insertAdjacentHTML('beforeend', html);
//         },
//         // need method to create the song detail
//         createSongDetail(img, title, artist) {
//             const detailDiv = document.querySelector(DOMElements.divSongDetail);
//             // any time user clicks a new song, we need to clear out the song detail div
//             detailDiv.innerHTML = '';
//             const html = '<div class="row col-sm-12 px -0"> <img src = "${img}" alt = "" > </div> <div class="row col-sm-12 px -0"> <label for="Genre" class="form-label col-sm-12">${title}:</label> </div> <div class="row col-sm-12 px -0"> <label for="artist" class="form-label col-sm-12">By ${artist}:</label> </div>';

//             detailDiv.insertAdjacentHTML('beforeend', html)
//         },
//     }
// })();


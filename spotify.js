
// // Data for playlist items
// const playlistData = [
//   {
//     title: "Song 1",
//     artist: "Artist 1",
//     albumArt: "(link unavailable)",
//     duration: "3:45"
//   },
//   {
//     title: "Song 2",
//     artist: "Artist 2",
//     albumArt: "(link unavailable)",
//     duration: "4:10"
//   },
//   {
//     title: "Song 3",
//     artist: "Artist 3",
//     albumArt: "(link unavailable)",
//     duration: "3:20"
//   },
//   // Add more songs...
// ];

// // Function to generate playlist items
// function generatePlaylist() {
//   const playlistList = document.getElementById("playlist-list");
//   playlistData.forEach((song, index) => {
//     const playlistItem = document.createElement("LI");
//     playlistItem.innerHTML = `
//       <img src="${song.albumArt}" alt="Album Art">
//       <div class="song-info">
//         <h3>${song.title}</h3>
//         <p>${song.artist}</p>
//       </div>
//       <span>${song.duration}</span>
//     `;
//     playlistList.appendChild(playlistItem);
//   });
// }

// // Call function to generate playlist
// generatePlaylist();

// // Music player functionality
// const musicPlayerContainer = document.querySelector(".music-player-container");
// const playPauseButton = document.querySelector(".play-pause");
// const nextSongButton = document.querySelector(".next-song");
// const progressBar = document.getElementById("progress-bar");

// let currentSongIndex = 0;
// let isPlaying = false;

// // Function to play/pause music
// function playPauseMusic() {
//   isPlaying = !isPlaying;
//   if (isPlaying) {
//     playPauseButton.textContent = "Pause";
//     // Add audio playback logic here
//   } else {
//     playPauseButton.textContent = "Play";
//     // Add audio pause logic here
//   }
// }

// // Function to play next song
// function playNextSong() {
//   currentSongIndex = (currentSongIndex + 1) % playlistData.length;
//   updateMusicPlayer();
// }

// // Function to update music player info
// function updateMusicPlayer() {
//   const currentSong = playlistData[currentSongIndex];
//   musicPlayerContainer.querySelector(".album-art").src = currentSong.albumArt;
//   musicPlayerContainer.querySelector(".song-title").textContent = currentSong.title;
//   musicPlayerContainer.querySelector(".artist-name").textContent = currentSong.artist;
//   progressBar.value = 0;
// }

// // Add event listeners
// playPauseButton.addEventListener("click", playPauseMusic);
// nextSongButton.addEventListener("click", playNextSong);

// // Initialize music player
// updateMusicPlayer();

// Elements
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result")

// Vars
let songs = []
let deezerURL = 'https://api.deezer.com/search?'
// https://api.deezer.com/search?q=track:"i need a dollar"

// Functions
const songSearch = async () => {
    const searchTerm = searchInput.value;
    if (!searchTerm) {
        alert("Please enter a song name");
        return;
    }

    const searchQuery = `q=track:"${searchTerm}"`
    console.log(deezerURL + searchQuery);

    try {
        const res = await fetch('https://api.deezer.com/search?q=track:"i need a dollar"');
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
        alert("Song not found");
        return;
    }
};

// Event Listeners
searchBtn.addEventListener("click", 
    songSearch
);

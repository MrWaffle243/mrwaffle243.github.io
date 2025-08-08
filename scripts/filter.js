// Elements
const cards = document.getElementById("card-container");

const filterSelections = document.getElementsByClassName("filter-selection")
const typeFilterSelection = document.getElementById("type-filter-selection");

const showHideFilterBtn = document.getElementById("show-hide-filter");
const applyFilterBtn = document.getElementById("apply-filter-btn");
const clearFilterBtn = document.getElementById("clear-filter-btn");

const filterOptionContainers = document.getElementsByClassName("filter-option-container");
let areFilterOptionsShowing = false;

// Variables
const cardList = [
    {
        id: 0,
        name: "Top 20 Albums",
        image: 'images/album-covers/deja-vu.png',
        link: "top-20-albums.html",
        tags: ["albums"]
    },
    {
        id: 1,
        name: "Top 20 Songs",
        image: "images/you-get-what-you-give.png",
        tags: ["songs"]
    },
    {
        id: 2,
        name: "Top 10 Acoustic Songs",
        image: "images/acoustic-paul.jpg",
        tags: ["songs", "acoustic"]
    },
    {
        id: 3,
        name: "Top 10 Albums from the 70s",
        image: "images/album-covers/ziggy-stardust.png",
        tags: ["albums", "70s"]
    },
    {
        id: 4,
        name: "Top 10 Artists",
        image: "images/jimi-hendrix.png",
        tags: ["artists"]
    }, 
    {   
        id: 0,
        name: "Top 20 Albums",
        image: 'images/album-covers/deja-vu.png',
        link: "top-20-albums.html",
        tags: ["albums"]
    },
    {
        id: 1,
        name: "Top 20 Songs",
        image: "images/you-get-what-you-give.png",
        tags: ["songs"]
    },
    {
        id: 2,
        name: "Top 10 Acoustic Songs",
        image: "images/acoustic-paul.jpg",
        tags: ["songs", "acoustic"]
    },
    {
        id: 3,
        name: "Top 10 Albums from the 70s",
        image: "images/album-covers/ziggy-stardust.png",
        tags: ["albums", "70s"]
    },
    {
        id: 4,
        name: "Top 10 Artists",
        image: "images/jimi-hendrix.png",
        tags: ["artists"]
    }
];
let filterList = [...cardList];


// Functions
const renderCards = () => {
    cards.innerHTML = ``
    if (filterList.length === 0) {
        cards.innerHTML = `
            <div class="col m-auto text-center">
            <br>
            <br>
                <p>No results found!</p>
                <p>Try some other filter options.</p>
            </div>
        `
    } else {
        let link
        filterList.forEach((card) => {
            link = Object.hasOwn(card, "link") ? `music-lists/${card.link}` : "#";
            cards.innerHTML += `
                <div class="col">
                    <div class="card fade-in" id="card-${card.id}">
                    <img src="${card.image}" class="card-img-top">
                        <div class="card-body">
                            <p class="card-title h5">${card.name}</p>
                            <a href="${link}" class="btn btn-primary">Go to List</a>
                        </div>
                    </div>
                <div>`
        });
    }
};

const filter = () => {
    filterList = cardList
    for (let selection of filterSelections) {
        if (selection.value === "all") {
            continue
        } else {
            filterList = cardList.filter((card) => card.tags.includes(selection.value));
        }
    }
    renderCards()
};

const clearFilter = () => {
    filterList = cardList;

    for (let selection of filterSelections) {
        selection.value = "all"
    }
    renderCards();
};

const showHideFilterOptions = () => {
    for (let option of filterOptionContainers) {
        option.style.display = areFilterOptionsShowing ? "none" : "block";
    }
    applyFilterBtn.style.display = areFilterOptionsShowing ? "none" : "inline";
    clearFilterBtn.style.display = areFilterOptionsShowing ? "none" : "inline";

    showHideFilterBtn.innerText = areFilterOptionsShowing ? "Show" : "Hide";
    areFilterOptionsShowing = !areFilterOptionsShowing;
};

// Run on start
renderCards();

// Event Listeners
applyFilterBtn.addEventListener("click", filter)
clearFilterBtn.addEventListener("click", clearFilter)
showHideFilterBtn.addEventListener("click", showHideFilterOptions)
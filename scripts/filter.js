// Filter Elements
const cards = document.getElementById("card-container");

const filterSelections = document.getElementsByClassName("filter-selection")
//const typeFilterSelection = document.getElementById("type-filter-selection");

const showHideFilterBtn = document.getElementById("show-hide-filter");
const applyFilterBtn = document.getElementById("apply-filter-btn");
const clearFilterBtn = document.getElementById("clear-filter-btn");

const filterOptionContainers = document.getElementsByClassName("filter-option-container");
let areFilterOptionsShowing = false;

// Sort Elements
const sortSelection = document.getElementById("sort-selection");

// Sort Functions (for card objs)
const strToDate = (date) => { // Date str (eg. 11/8/2025) to JS Date obj
    date = date.split("/");
    date[1] -= 1
    date = date.reverse()
    return new Date(...date)
};

const dateToStr = (date) => { 
    day = date.getDate()
    month = date.getMonth() + 1
    year = date.getFullYear()
    return `${day}/${month}/${year}`
};


// Variables
const cardList = [
    {
        id: -1,
        name: "Top 10 White Stripes Songs",
        image: "/images/album-covers/lets-shake-hands.jpg",
        tags: ["specific artists", "00s", "songs"],
        date: strToDate("1/1/1970")
    },
    {
        id: 0,
        name: "Top 20 Albums",
        image: '/images/album-covers/deja-vu.png',
        link: "top-20-albums.html",
        tags: ["albums", "featured"],
        date: strToDate("27/7/2025")
    },
    {
        id: 1,
        name: "Top 20 Songs",
        image: "/images/you-get-what-you-give.png",
        link: "top-20-songs.html",
        tags: ["songs", "featured"],
        date: strToDate("19/12/2025")
    },
    {
        id: 2,
        name: "Top 10 Acoustic Songs",
        image: "/images/acoustic-paul.jpg",
        tags: ["songs", "acoustic"],
        date: strToDate("1/1/1970")
    },
    {
        id: 3,
        name: "Top 10 Albums from the 70s",
        image: "/images/album-covers/led-zeppelin-iv.jpg",
        tags: ["albums", "70s"],
        date: strToDate("1/1/1970")
    },
    {
        id: 4,
        name: "Top 10 Artists",
        image: "/images/the-white-stripes.png",
        link: "top-10-artists.html",
        tags: ["artists", "featured"],
        date: strToDate("12/9/2025")
    },     
    {
        id: 5,
        name: "Top 15 Beatles Songs",
        image: "/images/album-covers/paperback-writer-and-rain.jpg",
        link: "top-15-beatles-songs.html",
        tags: ["60s", "specific artists", "songs"],
        date: strToDate("31/8/2025")
    },
    {
        id: 6,
        name: "Top 5 Guitarists",
        image: "/images/jimi-hendrix.jpg",
        link: "top-5-guitarists.html",
        tags: ["artists", "guitar", "guitarists", "featured"],
        date: strToDate("25/2/2026")
    }
];
let filterList = [...cardList];

// Filter Functions
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
            isBtnDisabled = Object.hasOwn(card, "link") ? "btn-primary" : "btn-secondary disabled";
            btnText = Object.hasOwn(card, "link") ? "Go To List" : "Coming Soon";
            lastUpdatedText = card.date.getTime() != strToDate("1/1/1970").getTime() ? `${dateToStr(card.date)}` : "TBC";

            cards.innerHTML += `
                <div class="col">
                    <div class="card fade-in" id="card-${card.id}">
                    <img src="${card.image}" class="card-img-top">
                        <div class="card-body">
                            <p class="card-title h5">${card.name}</p>
                            <a href="${link}" class="btn ${isBtnDisabled}" >${btnText}</a>
                            <p class="card-date fst-italic mb-0 pt-1"> Last updated: ${lastUpdatedText}</p>
                        </div>
                    </div>
                <div>`
        });
    }
};

const filter = () => {
    filterList = cardList;
    for (let selection of filterSelections) {
        if (selection.value === "all") {
            continue
        } else {
            filterList = cardList.filter((card) => card.tags.includes(selection.value));
        }
    }
};

const clearFilter = () => {
    filterList = cardList;

    for (let selection of filterSelections) {
        selection.value = "all";
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

// Sort functions
const compareDates = (a, b) => {
    if (a.date < b.date) {
        return -1;
    } else if (a.date > b.date) {
        return 1;
    }
    return 0;
};

const sortLists = () => {
    if (sortSelection.value == "newest") {
        filterList.sort(compareDates).reverse();
    } else if (sortSelection.value == "oldest") {
        let actualFilterList = filterList.filter((card) => card.date.getFullYear() != 1970);
        let comingSoonCards = filterList.filter((card) => card.date.getFullYear() == 1970);
        actualFilterList.sort(compareDates);
        filterList = [...actualFilterList, ...comingSoonCards];
    }
};

const clearSort = () => {
    sortSelection.value = "newest";
    sortLists();
    renderCards();
};

// Run on start
sortLists();
renderCards();

// Event Listeners
applyFilterBtn.addEventListener("click", () => {
    filter();
    sortLists();
    renderCards();
}
);
clearFilterBtn.addEventListener("click", () => {
    clearFilter();
    clearSort();
});
showHideFilterBtn.addEventListener("click", showHideFilterOptions);

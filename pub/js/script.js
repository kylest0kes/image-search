// Event listeners
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchImgs();
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchImgs();
})


// Flickr search function
function searchImgs() {
    const userSearch = searchInput.value;
    console.log(userSearch);
}
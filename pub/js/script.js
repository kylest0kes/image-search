const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const backToTopBtn = document.getElementById("back-to-top");

let input = document.getElementById('search-input');

// Event listeners
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchImgs();
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchImgs();
})

//change the width in the .form to 300px from 50px if input has text
input.addEventListener("input", (e) => {
    input = e.target.value;
    if(input != '') {
        searchForm.classList.remove("form");
        searchForm.classList.add("active-form");
    } else {
        searchForm.classList.remove("active-form");
        searchForm.classList.add("form");
    }
})

// Unsplash search function
function searchImgs() {
    const userSearch = searchInput.value;
    const randomPageNum = Math.floor(Math.random() * 20);
    const APIkey = "zvBQLtkpw1SOsWh-0yw6ZefRBVdAMRqT2NrYHfiK2UM";

    
    const URL = `https://api.unsplash.com/search/photos?page=${randomPageNum}&query=${userSearch}&client_id=${APIkey}&per_page=20&content_filter=high`

    $('#searched').empty()
    $('#search-results').empty()

    if (userSearch != '') {
       $('#search-results').html(`<p id="searched">You searched for "${userSearch.toUpperCase()}":</p>`);

        $.ajax({
            method: 'GET',
            url: URL,
            success: (data) => {
                if (data.results.length != 0) {
                    backToTopBtn.classList.remove("hidden");
                    data.results.forEach(img => {
                       $('#search-results').append(`
                        <img class='result-img' src='${img.urls.regular}' alt='img' />
                       `) 
                    });
                } else {
                    $('#searched').text('No available results');
                }

            }
        })
    } else {
        $('#searched').text('Please enter valid search terms');
    }
}